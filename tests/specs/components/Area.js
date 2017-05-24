/* global cc, describe, it, expect, beforeEach afterEach */

describe('Area Component', () => {
  let config
  let chart
  let data
  let container = document.querySelector('#chart')

  beforeEach(() => {
    config = {
      x: {
        accessor: 'group.x',
        labelFormatter: 'Value',
      },
      y: [
        {
          accessor: 'group.a',
          stack: 'first',
          labelFormatter: 'Label Group.A',
          color: 'red',
        }, {
          accessor: 'b',
          stack: 'second',
          labelFormatter: 'Label B',
          color: 'green',
        },
        {
          accessor: 'c',
          stack: 'second',
          color: 'orange',
        }
      ]
    }
    data = [
      {b: 0, c: 0, group: {a: 1, x: 0}},
      {b: -2, c: -4, group: {a: 8, x: 1}},
      {b: 0, c: 0, group: {a: 5, x: 2}},
      {b: -2, c: -8, group: {a: 0, x: 3}},
      {b: -5, c: -10, group: {a: 2, x: 4}},
    ]
    chart = new cc.components.AreaView({config, container})
  })

  afterEach(() => {
    while (container.firstChild) { container.firstChild.remove() }
  })

  describe('Render with minimal config.', () => {
    it('should accept single accessor', () => {
      config = {
        x: {accessor: 'group.x'},
        y: [{accessor: 'group.a'}]
      }
      chart.setConfig(config)
      chart.setData(data)
      expect(chart.el.querySelectorAll('path.area').length).toEqual(1)
    })

    it('should apply default colors', done => {
      config = {
        x: {accessor: 'group.x'},
        y: [{accessor: 'group.a'}, {accessor: 'b'}]
      }
      chart.setConfig(config)
      chart.setData(data)
      let path = container.querySelectorAll('path.area')[1]

      observer('attr', path, 'd', () => {
        let chartAreas = container.querySelectorAll('path.area')
        _.each(chartAreas, (area, i) => {
          let hex = d3.schemeCategory20[i]
          let rgb = hexToRGB(parseInt(hex.slice(1), 16))
          let color = area.getAttribute('fill')

          expect(color).toBe(rgb)
        })
        done()
      })
    })
  })

  describe('Render with changed config.', () => {
    it('should apply top and left margin', () => {
      config.margin = {left: 20, top: 10}
      chart.setConfig(config)
      chart.setData(data)
      let el = container.querySelector('g.area')

      expect(el.getAttribute('transform')).toBe('translate(20,10)')
    })

    it('should apply bottom and right margin', (done) => {
      config.margin = {right: 10, bottom: 5}
      // use linear data to avoid area exceeding it's projected size
      data = [
        { b: 0, c: 0, group: {a: 0, x: 0} },
        { b: 1, c: 1, group: {a: -1, x: 1} },
        { b: 2, c: 2, group: {a: -2, x: 2} },
      ]
      chart.setConfig(config)
      chart.setData(data)
      let svg = container.querySelector('svg')
      let path = container.querySelectorAll('path.area')[2]

      observer('attr', path, 'd', () => {
        let areaContainer = container.querySelector('g.area')
        let areaContainerRect = areaContainer.getBoundingClientRect()
        let svgRect = svg.getBoundingClientRect()

        expect(svgRect.width - areaContainerRect.width).toBe(config.margin.right)
        expect(svgRect.height - areaContainerRect.height).toBe(config.margin.bottom)
        done()
      })
    })

    it('should apply colors to areas', (done) => {
      config.y[0].color = '#FF0000'
      config.y[1].color = '#00FF00'
      config.y[2].color = '#0000FF'
      chart.setConfig(config)
      chart.setData(data)
      let path = container.querySelectorAll('path.area')[2]

      observer('attr', path, 'd', () => {
        let paths = container.querySelectorAll('path.area')
        _.each(paths, (path, i) => {
          let rgb = hexToRGB(parseInt(config.y[i].color.slice(1), 16))
          expect(path.getAttribute('fill')).toBe(rgb)
        })
        done()
      })
    })

    it('should stack areas on top of each other', (done) => {
      data = [
        {b: -1, c: -1, a: -1, x: 0},
        {b: -1, c: -1, a: -1, x: 1},
        {b: -1, c: -1, a: -1, x: 2}
      ]
      config.x.accessor = 'x'
      config.y[0].accessor = 'a'
      config.y[0].stack = 'firstGroup'
      config.y[1].stack = 'firstGroup'
      config.y[2].stack = 'firstGroup'
      chart.setConfig(config)
      chart.setData(data)
      let path = container.querySelectorAll('path.area')[2]

      observer('attr', path, 'd', () => {
        let paths = container.querySelectorAll('path.area')
        let firstRect = paths[0].getBoundingClientRect()
        let secondRect = paths[1].getBoundingClientRect()
        let thirdRect = paths[2].getBoundingClientRect()

        expect(firstRect.top + firstRect.height).toBe(secondRect.top)
        expect(secondRect.top + secondRect.height).toBe(thirdRect.top)
        done()
      })
    })

    it('should combine areas in two stacks', (done) => {
      config.y[0].stack = 'firstGroup'
      config.y[1].stack = 'firstGroup'
      config.y[2].stack = 'secondGroup'
      chart.setConfig(config)
      chart.setData(data)
      let path = container.querySelectorAll('path.area')[2]

      observer('attr', path, 'd', () => {
        let paths = container.querySelectorAll('path.area')
        let firstD = paths[0].getAttribute('d')
        let secondD = paths[1].getAttribute('d')
        let thirdD = paths[2].getAttribute('d')

        let firstStartPoint = getPathStartPoint(firstD, 'C')
        let firstEndPoint = getPathEndPoint(firstD)
        let secondStartPoint = getPathStartPoint(secondD, 'C')
        let thridStartPoint = getPathStartPoint(thirdD, 'C')

        expect(firstEndPoint).toBe(secondStartPoint)
        expect(firstStartPoint).toBe(thridStartPoint)
        done()
      })
    })

    it('should render each area on the same baseline', (done) => {
      config.y[0].stack = 'firstGroup'
      config.y[1].stack = 'secondGroup'
      config.y[2].stack = 'thirdGroup'
      chart.setConfig(config)
      chart.setData(data)
      let path = container.querySelectorAll('path.area')[2]

      observer('attr', path, 'd', () => {
        let paths = container.querySelectorAll('path.area')
        let firstD = paths[0].getAttribute('d')
        let secondD = paths[1].getAttribute('d')
        let thirdD = paths[2].getAttribute('d')

        let firstStartPoint = getPathStartPoint(firstD, 'C')
        let secondStartPoint = getPathStartPoint(secondD, 'C')
        let thridStartPoint = getPathStartPoint(thirdD, 'C')

        expect(firstStartPoint).toBe(secondStartPoint)
        expect(secondStartPoint).toBe(thridStartPoint)
        done()
      })
    })
  })

  describe('Render with data variants.', () => {
    describe('Render with extremum data.', () => {
      describe('should not exceed container size', () => {
        it('should not exceed container height', (done) => {
          data = [
            {a: 1, x: 0},
            {a: 8, x: 1},
            {a: 5, x: 2},
            {a: 0, x: 3},
            {a: 2, x: 4},
          ]
          config = {
            x: {accessor: 'x'},
            y: [{accessor: 'a'}]
          }
          chart.setConfig(config)
          chart.setData(data)
          let svg = container.querySelector('svg')
          let path = container.querySelector('path.area')

          observer('attr', path, 'd', () => {
            let areaContainer = container.querySelector('g.area')
            let areaContainerRect = areaContainer.getBoundingClientRect()
            let svgRect = svg.getBoundingClientRect()

            expect(svgRect.height).toBeGreaterThanOrEqual(areaContainerRect.height)
            done()
          })
        })

        it('should not exceed container width', (done) => {
          data = [
            {x: 2, a: 0},
            {x: 5, a: 1},
            {x: 0, a: 2},
            {x: 2, a: 3}
          ]
          config = {
            x: {accessor: 'x'},
            y: [{accessor: 'a'}]
          }
          chart.setConfig(config)
          chart.setData(data)
          let svg = container.querySelector('svg')
          let path = container.querySelector('path.area')

          observer('attr', path, 'd', () => {
            let areaContainer = container.querySelector('g.area')
            let areaContainerRect = areaContainer.getBoundingClientRect()
            let svgRect = svg.getBoundingClientRect()

            expect(svgRect.width).toBeGreaterThanOrEqual(areaContainerRect.width)
            done()
          })
        })
      })

      it('second area in stack with negative values should fit container', (done) => {
        data = [
          {x: 1, b: -1, a: 0},
          {x: 2, b: -1, a: 1},
          {x: 3, b: -1, a: 2},
        ]
        config = {
          x: {accessor: 'x'},
          y: [
            {
              accessor: 'a',
              stack: 'group'
            },
            {
              accessor: 'b',
              stack: 'group'
            }]
        }
        chart.setConfig(config)
        chart.setData(data)
        let svg = container.querySelector('svg')
        let path = container.querySelector('path.area')

        observer('attr', path, 'd', () => {
          let areaContainer = container.querySelector('g.area')
          let areaContainerRect = areaContainer.getBoundingClientRect()
          let svgRect = svg.getBoundingClientRect()

          expect(svgRect.height).toBeGreaterThanOrEqual(areaContainerRect.height)
          done()
        })
      })
    })

    it('should render empty chart without data', (done) => {
      chart.render()
      let path = container.querySelectorAll('path.area')[2]

      observer('attr', path, 'fill', () => {
        let paths = container.querySelectorAll('path.area')
        _.each(paths, (path) => {
          expect(path.getAttribute('d')).toBeNull()
        })
        done()
      })
    })

    it('should render empty chart with empty data', (done) => {
      chart.setData([])
      let path = container.querySelectorAll('path.area')[2]

      observer('attr', path, 'fill', () => {
        let paths = container.querySelectorAll('path.area')
        _.each(paths, (path) => {
          expect(path.getAttribute('d')).toBeNull()
        })
        done()
      })
    })

    it('should render one point', (done) => {
      config = {
        x: {accessor: 'x'},
        y: [{accessor: 'a'}]
      }
      chart.setConfig(config)
      chart.setData([{b: 1, c: 1, a: 1, x: 0}])
      let path = container.querySelector('path.area')

      observer('attr', path, 'd', () => {
        let paths = container.querySelectorAll('path.area')
        let areaContainer = container.querySelector('g.area')
        let areaContainerHeight = areaContainer.getBoundingClientRect().height
        _.forEach(paths, (path) => {
          expect(path.getAttribute('d')).toBe(`M0,${areaContainerHeight}L0,0Z`)
        })
        done()
      })
    })

    it('should correctly calculate position of two points', (done) => {
      config = {
        width: 300,
        height: 200,
        x: {accessor: 'x'},
        y: [{accessor: 'a'}]
      }
      chart.setConfig(config)
      data = [
        {x: 0, a: 1},
        {x: 1, a: 2}
      ]
      chart.setData(data)
      let path = container.querySelector('path.area')

      observer('attr', path, 'd', () => {
        let path = container.querySelector('path.area')
        expect(path.getAttribute('d')).toBe(`M0,${config.height}L${config.width},${config.height}L${config.width},0L0,100Z`)
        done()
      })
    })

    it('should render with NaN data on y', (done) => {
      config = {
        x: {accessor: 'x'},
        y: [{accessor: 'a'}]
      }
      chart.setConfig(config)
      data = [
        {x: 0, a: 1},
        {x: 1, a: NaN},
        {x: 2, a: 3}
      ]
      chart.setData(data)
      let path = container.querySelector('path.area')

      observer('attr', path, 'd', () => {
        let d = path.getAttribute('d')
        expect(d).not.toContain('NaN')
        done()
      })
    })

    it('should render with undefined data on y', (done) => {
      config = {
        x: {accessor: 'x'},
        y: [{accessor: 'a'}]
      }
      chart.setConfig(config)
      data = [
        {x: 0, a: 1},
        {x: 1, a: undefined},
        {x: 2, a: 3}
      ]
      chart.setData(data)
      let path = container.querySelector('path.area')

      observer('attr', path, 'd', () => {
        let d = path.getAttribute('d')
        expect(d).not.toContain('NaN')
        done()
      })
    })
  })
})
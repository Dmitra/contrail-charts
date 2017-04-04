import _ from 'lodash'
import * as d3Scale from 'd3-scale'

export default {
  defaults: {
    margin: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
  },
  /**
   * Idempotent function to calculate scale based on data model and provided config
   * @param model to extract domain from
   * @param config for a scale
   */
  getScale (model, config = {}) {
    let scale = config.scale
    if (!_.isFunction(scale)) {
      scale = (d3Scale[scale] || d3Scale.scaleLinear)()
    }
    let domain = []

    // data range is overrided by config.domain
    if (config.domain && !_.isNil(config.domain[0]) && !_.isNil(config.domain[1])) {
      domain = config.domain
    } else {
      let getFullRange = false
      if (model.data.length < 2) getFullRange = true
      domain = model.getRangeFor(config.accessor, getFullRange)
      if (config.domain && !_.isNil(config.domain[0])) domain[0] = config.domain[0]
      if (config.domain && !_.isNil(config.domain[1])) domain[1] = config.domain[1]
    }

    scale.domain(domain)
    if (config.range) scale.range(config.range)
    return scale
  },

  outerWidth (width, model, accessor, scale) {
    if (!model || !accessor || !_.isFunction(scale)) return width
    const first = _.get(_(model.data).first(), accessor)
    const last = _.get(_(model.data).last(), accessor)
    return Math.abs(scale(last) - scale(first))
  },
}

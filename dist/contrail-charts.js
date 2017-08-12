(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"), require("lodash"), require("backbone"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["d3v4", "lodash", "backbone", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["cc"] = factory(require("d3"), require("lodash"), require("backbone"), require("jquery"));
	else
		root["cc"] = factory(root["d3"], root["_"], root["Backbone"], root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_86__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 165);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _contrailView = __webpack_require__(167);

var _contrailView2 = _interopRequireDefault(_contrailView);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _Data = __webpack_require__(38);

var _Data2 = _interopRequireDefault(_Data);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _ToggleHalt = __webpack_require__(33);

var _ToggleHalt2 = _interopRequireDefault(_ToggleHalt);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * View base class
 */
var ChartView = function (_ContrailView) {
  _inherits(ChartView, _ContrailView);

  /**
   * @param {HTMLElement} p.container must be specified
   */
  function ChartView() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ChartView);

    var _this = _possibleConstructorReturn(this, (ChartView.__proto__ || Object.getPrototypeOf(ChartView)).call(this, p));

    _this._id = p.id || _lodash2.default.get(p, 'config.id');
    _this.d3.attr('id', _this.id);
    _this._container = p.container;

    // override simple Backbone.View model set
    var Model = _this.constructor.Model || _Data2.default;
    if (!_this.model || !(_this.model instanceof Model)) {
      if (p.model instanceof Model) _this.model = p.model;else _this.model = new Model(undefined, p.model);
      if (!p.config.frozen) _this.listenTo(_this.model, 'change', _this._onDataModelChange || _this.render);
    }
    _this.setConfig(p.config);
    // overwrite _onResize handler with instance specific one
    _this._onResize = _this._onResize.bind(_this);
    if (!p.config.frozen) window.addEventListener('resize', _this._onResize);
    _lodash2.default.each(_this.constructor.Actions, function (action) {
      return _Actionman2.default.set(action, _this);
    });
    _Actionman2.default.set(_ToggleHalt2.default, _this);
    return _this;
  }

  _createClass(ChartView, [{
    key: 'setData',

    /**
    * @param {Array} data
    */
    value: function setData(data) {
      this.model.data = data;
    }
    /**
     * Sets the configuration for this component as a simple object
     * or already instantiated ConfigModel of corresponding type.
     *
     * Calling setConfig on already rendered chart will update the chart.
     */

  }, {
    key: 'setConfig',
    value: function setConfig() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var Config = this.constructor.Config || _configModel2.default;
      if (config instanceof Config) this.config = config;else {
        if (!this.config) {
          // clone config as this object may be changed outside and passed again
          config = _lodash2.default.cloneDeep(config);

          // View and Config model share the same id - "Component id"
          config.id = this.id;
          this.config = new Config(config);
          if (!this.config.get('frozen')) this.listenTo(this.config, 'change', this.render);
        } else {
          this.config.set(config);
        }
      }
    }
    /**
     * Appends components element to container in the order specified in this._order
     *
     * Components which renders vector graphics should call super.render() firsthand
     * in order to initialize shared svg container if missing and append this.el to it
     * Thus this.element will be ready to animate other entering elements
     *
     * Components rendering html should call super.render() at the end to increase performance by less browser redraw
     * @param {String} content to insert into element's html
     */

  }, {
    key: 'render',
    value: function render(content) {
      var _this2 = this;

      if (this.isTagNameSvg(this.tagName)) {
        this._initSvg();
        if (this.svg.select('#' + this.id).empty()) {
          this.el.setAttribute('data-order', this.zIndex);
          var next = _lodash2.default.find(this.svg.node().children, function (el) {
            return el.getAttribute('data-order') > _this2.zIndex;
          }) || null;
          this.svg.node().insertBefore(this.el, next);
        }
        this.d3.attr('transform', 'translate(' + this.config.margin.left + ',' + this.config.margin.top + ')');
      } else {
        // non vector components
        if (content) this.el.innerHTML = content;
        this._insertSorted(this.el);
      }
    }
    /**
     * Shortcut to set container, data and config
     */

  }, {
    key: 'show',
    value: function show(data) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._visible = true;
      if (config.container) this._container = config.container;
      this.config.set(config, { silent: true });
      this.setData(data);
      this.d3.classed('hide', false);
    }
    /**
     * Visually hide own element
     */

  }, {
    key: 'hide',
    value: function hide() {
      this.d3.classed('hide', true);
      this._visible = false;
    }
    /**
     * Set / Remove any automatic update by public methods or actions
     * TODO consider halted state
     */

  }, {
    key: 'setFrozen',
    value: function setFrozen(isFrozen) {
      var _this3 = this;

      if (this.config.get('frozen') === isFrozen) return;
      this.config.set('frozen', isFrozen, { silent: true });
      if (isFrozen) {
        this.stopListening(this.config);
        this.stopListening(this.model);
        _lodash2.default.each(this.constructor.Actions, function (action) {
          return _Actionman2.default.unset(action, _this3);
        });
      } else {
        this.listenTo(this.config, 'change', this.render);
        this.listenTo(this.model, 'change', this._onDataModelChange || this.render);
        _lodash2.default.each(this.constructor.Actions, function (action) {
          return _Actionman2.default.set(action, _this3);
        });
      }
    }
    /**
     * Unsubscribe component from model updates
     * TODO actually the model should stop updating its public "data" attribute
     */

  }, {
    key: 'setHalt',
    value: function setHalt(isHalted) {
      if (this.config.get('halted') === isHalted) return;
      this.config.set('halted', isHalted, { silent: true });
      if (isHalted) {
        this.stopListening(this.model);
      } else {
        this.listenTo(this.model, 'change', this._onDataModelChange || this.render);
      }
    }
    /**
     * This is more like destroy component.
     * Stop listening to config and model. Remove the view from the dom.
     */

  }, {
    key: 'remove',
    value: function remove() {
      var _this4 = this;

      if (this.config) this.stopListening(this.config);
      // TODO this.config should unsubscribe all dependent components
      // and there will be no need to do clear silently
      this.config.clear({ silent: true });
      if (this.model) this.stopListening(this.model);
      window.removeEventListener('resize', this._onResize);
      _lodash2.default.each(this.constructor.Actions, function (action) {
        return _Actionman2.default.unset(action, _this4);
      });

      _get(ChartView.prototype.__proto__ || Object.getPrototypeOf(ChartView.prototype), 'remove', this).call(this);
    }
    /**
     * First component which uses shared svg container appends svg element to container
     * There is a div wrapper on top of svg to workaround FF bug, when svg data-order attribute is not set
     */

  }, {
    key: '_initSvg',
    value: function _initSvg() {
      var isSharedContainer = this.config.get('isSharedContainer');
      if (this.svg.empty()) {
        var wrapper = document.createElement('div');
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        wrapper.appendChild(svg);
        svg.classList.add(this.selectorClass('svg'));
        if (isSharedContainer) {
          svg.classList.add(this.selectorClass('sharedSvg'));
        } else {
          // create wrapper for this component only
          wrapper.setAttribute('id', this.id + '-svg-wrapper');
        }
        wrapper.classList.add(this.selectorClass('svgWrapper'));
        this._insertSorted(wrapper);
      }
      var wrapperPosition = this.svg.node().parentNode.dataset.order;
      if (this.config.get('isPrimary') && wrapperPosition !== this.config.get('order')) {
        var _wrapper = this.svg.node().parentNode;
        _wrapper.remove(); // detach
        this._insertSorted(_wrapper);
      }
      this.svg.classed(this.selectorClass('sharedSvg'), isSharedContainer).attr('width', this.width).attr('height', this.height);
    }
    /**
     * Insert own element into the DOM in the specified order
     */

  }, {
    key: '_insertSorted',
    value: function _insertSorted(el) {
      if (el.parentElement === this._container) return;

      if (!this.config.get('isSharedContainer') || this.config.get('isPrimary')) {
        el.dataset['order'] = this.config.get('order');
      }
      el.classList.add(this.selectorClass('component'));
      // TODO use insertBefore as it is for svg el
      this._container.appendChild(el);
      if (this._container.childElementCount > 1 && this.config.has('order')) {
        this.container.selectAll('#' + this._container.id + ' > ' + this.selectors.component).datum(function () {
          return this.dataset['order'];
        }).sort().datum(null);
      }
    }

    // Event handlers

  }, {
    key: '_onResize',
    value: function _onResize() {
      if (!this._ticking) {
        window.requestAnimationFrame(this.render.bind(this));
        this._ticking = true;
      }
    }
  }, {
    key: '_onEvent',
    value: function _onEvent(d, el, e) {
      var elementName = _lodash2.default.invert(this.selectors)['.' + el.classList[0]];
      var cb = this.config.getAction(elementName, e.type);
      if (_lodash2.default.isFunction(cb)) cb(d.data);
    }
  }, {
    key: 'selectors',
    get: function get() {
      return {
        chart: '.cc-chart',
        component: '.cc-component',
        svgWrapper: '.svg-wrapper',
        svg: '.cc-svg',
        sharedSvg: '.shared-svg',
        node: '.node',
        interactive: '.interactive',
        active: '.active'
      };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click node': '_onEvent',
        'dblclick node': '_onEvent'
      };
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 0;
    }
    /**
     * @return {String} id provided by config or Backbone generated
     */

  }, {
    key: 'id',
    get: function get() {
      return this._id || this.cid;
    }
    /**
     * Backbone tries to set id while initialization
     */
    ,
    set: function set(id) {}
    // do nothing

    // Component is master by default

  }, {
    key: 'isMaster',
    get: function get() {
      var isMaster = this.constructor.isMaster;
      return _lodash2.default.isNil(isMaster) ? true : isMaster;
    }
    /**
     * @returns {Object} d3.selection - Looks for svg container
     */

  }, {
    key: 'svg',
    get: function get() {
      var selector = '';
      if (this.config.get('isSharedContainer')) {
        // this components uses shared svg container
        selector = '#' + this._container.id + ' > ' + this.selectors.svgWrapper + ' > svg' + this.selectors.svg + this.selectors.sharedSvg;
      } else {
        // this component is standalone
        if (this.isTagNameSvg(this.tagName)) {
          // this component is pure svg
          selector = '#' + this._container.id + ' > #' + this.id + '-svg-wrapper > svg' + this.selectors.svg;
        } else {
          // this component may have shared container inside
          selector = '#' + this._container.id + ' > #' + this.id + ' > ' + this.selectors.svgWrapper + ' > svg' + this.selectors.svg + this.selectors.sharedSvg;
        }
      }
      return this.container.select(selector);
    }
    /**
     * @return {Object} d3 selection - container to render into
     */

  }, {
    key: 'container',
    get: function get() {
      return d3Selection.select(this._container);
    }
    /**
     * One-time setter
     * Container cannot be changed from outside
     */
    ,
    set: function set(el) {
      if (!this._container) this._container = el;
    }
    /**
     * Calculate offset of svg relative to the container
     */

  }, {
    key: 'svgOffset',
    get: function get() {
      var left = this.svg.node().getBoundingClientRect().left - this._container.getBoundingClientRect().left;
      var top = this.svg.node().getBoundingClientRect().top - this._container.getBoundingClientRect().top;
      return { left: left, top: top };
    }
    /**
     * Padding depends on view size and rendered data
     */

  }, {
    key: 'padding',
    get: function get() {
      return this.config.padding;
    }
    /**
     * @return {Number} width of the component container
     * This is total available width to take for rendering own element into
     */

  }, {
    key: 'width',
    get: function get() {
      return this.config.get('width') || this._container.getBoundingClientRect().width;
    }
    /**
     * @return {Number} width in px
     */

  }, {
    key: 'innerWidth',
    get: function get() {
      var margin = this.config.margin;
      return this.width - margin.left - margin.right;
    }
    /**
     * @return {Number} width in px of the plot area
     */

  }, {
    key: 'plotWidth',
    get: function get() {
      var padding = this.padding;
      return this.innerWidth - padding.left - padding.right;
    }
    /**
     * @return {Number} height of the component container
     * This is total available height to take for rendering own element into
     */

  }, {
    key: 'height',
    get: function get() {
      return this.config.get('height') || Math.round(this.width / 2);
    }
    /**
     * @return {Number} height in px
     */

  }, {
    key: 'innerHeight',
    get: function get() {
      var margin = this.config.margin;
      return this.height - margin.top - margin.bottom;
    }
    /**
     * @return {Number} height in px of the plot area
     */

  }, {
    key: 'plotHeight',
    get: function get() {
      var padding = this.padding;
      return this.innerHeight - padding.top - padding.bottom;
    }
  }]);

  return ChartView;
}(_contrailView2.default);

exports.default = ChartView;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _contrailModel = __webpack_require__(166);

var _contrailModel2 = _interopRequireDefault(_contrailModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ConfigModel = function (_ContrailModel) {
  _inherits(ConfigModel, _ContrailModel);

  function ConfigModel() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ConfigModel);

    var _this = _possibleConstructorReturn(this, (ConfigModel.__proto__ || Object.getPrototypeOf(ConfigModel)).call(this, p));

    _this.id = p.id;
    return _this;
  }

  _createClass(ConfigModel, [{
    key: 'getValue',

    /**
     * @param {Object} data to extract value from
     * @param {Object} config on how to extract
     */
    value: function getValue(data) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var getValue = config.accessor;
      if (_lodash2.default.isNil(data)) return undefined;
      if (_lodash2.default.isFunction(getValue)) return getValue(data);
      if (_lodash2.default.isString(getValue)) return _lodash2.default.get(data, getValue);
      return data;
    }
    /**
     * @param {Object} data to extract formatted value from
     * @param {Object} config on how to extract
     */

  }, {
    key: 'getFormattedValue',
    value: function getFormattedValue(data) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var formatter = config.valueFormatter;
      var value = this.getValue(data, config);
      if (_lodash2.default.isFunction(formatter)) return formatter(value);
      return value;
    }
    /**
     * @param {Object} data to extract label from
     * @param {Object} config on how to extract label from data
     */

  }, {
    key: 'getLabel',
    value: function getLabel(data) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var getLabel = config.labelFormatter || config.label || config.accessor || config.getLabel;
      if (_lodash2.default.isString(getLabel)) return getLabel;
      if (_lodash2.default.isNil(data)) return undefined;
      if (_lodash2.default.isFunction(getLabel)) return getLabel(data);
    }
  }, {
    key: 'getAction',
    value: function getAction(selector, type) {
      return this.get('action.' + type + ' ' + selector);
    }
  }, {
    key: 'hasAction',
    value: function hasAction(selector, type) {
      var actions = _lodash2.default.filter(this.attributes.action, function (action, key) {
        return key.includes(selector);
      });
      return _lodash2.default.isFunction(actions[0]);
    }
  }, {
    key: 'defaults',
    get: function get() {
      return {
        margin: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        },
        padding: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        },
        duration: 300,

        // if set true - no render will occur on config and data updates
        frozen: false
      };
    }
    /**
     * @return {String} this class name without 'ConfigModel'
     */

  }, {
    key: 'type',
    get: function get() {
      return this.constructor.name.slice(0, -11);
    }
  }, {
    key: 'margin',
    get: function get() {
      return this.attributes.margin;
    }
  }, {
    key: 'padding',
    get: function get() {
      return this.attributes.padding;
    }
  }, {
    key: 'duration',
    get: function get() {
      return this.attributes.duration;
    }
  }]);

  return ConfigModel;
}(_contrailModel2.default);

exports.default = ConfigModel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _contrailEvents = __webpack_require__(39);

var _contrailEvents2 = _interopRequireDefault(_contrailEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Action Manager - Singleton
 */
var Actionman = function () {
  function Actionman() {
    _classCallCheck(this, Actionman);

    this._instances = {};
  }

  _createClass(Actionman, [{
    key: 'get',
    value: function get(id) {
      return this._instances[id];
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this._instances;
    }
  }, {
    key: 'getActive',
    value: function getActive() {
      return _lodash2.default.filter(this._instances, function (action) {
        return action.isEnabled();
      });
    }
    /**
     * @param {Action} Action class to be instantiated
     * @return {Action} found or instantiated action
     */

  }, {
    key: 'set',
    value: function set(Action, registrar) {
      var action = new Action({ registrar: registrar });
      if (this._instances[Action.name] === action) return;

      this._instances[Action.name] = action;
      this.trigger('add', action);
      return action;
    }
    /**
     * unset Action from a registrar
     * @param Action
     * @param registrar
     */

  }, {
    key: 'unset',
    value: function unset(Action, registrar) {
      if (this._instances[Action.name]) {
        this._instances[Action.name].unRegister(registrar);
      }
    }
    /**
     * Updates all actions state
     */

  }, {
    key: 'update',
    value: function update(selection) {
      _lodash2.default.values(this._instances).forEach(function (action) {
        action.evaluate(selection);
      });
    }
    /**
    * Fire an action based on its id
    * @param actionName String The id of the action
    */

  }, {
    key: 'fire',
    value: function fire(actionName) {
      var action = this._instances[actionName];

      if (!_lodash2.default.isNil(action)) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        action.apply.apply(action, args);
      }
    }
  }]);

  return Actionman;
}();
// TODO replace with class extends syntax


_lodash2.default.extend(Actionman.prototype, _contrailEvents2.default);
var actionman = new Actionman();
exports.default = actionman;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Array = __webpack_require__(0);

var d3Array = _interopRequireWildcard(_d3Array);

var _Data = __webpack_require__(38);

var _Data2 = _interopRequireDefault(_Data);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Data preparation
 */
var DataFrameModel = function (_DataModel) {
  _inherits(DataFrameModel, _DataModel);

  function DataFrameModel() {
    var _ref;

    _classCallCheck(this, DataFrameModel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = DataFrameModel.__proto__ || Object.getPrototypeOf(DataFrameModel)).call.apply(_ref, [this].concat(args)));

    _this._ranges = {};
    return _this;
  }

  _createClass(DataFrameModel, [{
    key: 'getRangeFor',

    /**
     * Calculate and cache range of a serie
     * @param {String | Array} accessors - serie accessor
     * @param {Boolean} isFull if true get range of the whole data, not just selection
     * @return {Array} [min, max] extent of values of the serie
     */
    value: function getRangeFor(accessor, isFull) {
      if (_lodash2.default.isArray(accessor)) return this.getCombinedRange(accessor, isFull);
      if (isFull) return d3Array.extent(this._data, function (d) {
        return _lodash2.default.get(d, accessor);
      });

      if (!_lodash2.default.has(this._ranges, accessor)) {
        this._ranges[accessor] = d3Array.extent(this._data, function (d) {
          return _lodash2.default.get(d, accessor);
        });
      }
      return _lodash2.default.clone(this._ranges[accessor]);
    }
    /**
     * @return {Array} [min, max] values of provided series values combined
     */

  }, {
    key: 'getCombinedRange',
    value: function getCombinedRange(accessors) {
      var _this2 = this;

      var domains = _lodash2.default.map(accessors, function (accessor) {
        return _this2.getRangeFor(accessor);
      });
      return d3Array.extent(_lodash2.default.concat.apply(_lodash2.default, _toConsumableArray(domains)));
    }
    /**
     * Limited to ascending sorted values
     */

  }, {
    key: 'getNearest',
    value: function getNearest(accessor, value) {
      var data = this._data;
      var xBisector = d3Array.bisector(function (d) {
        return _lodash2.default.get(d, accessor);
      }).left;
      var index = xBisector(data, value, 1, data.length - 1);
      return value - _lodash2.default.get(data[index - 1], accessor) > _lodash2.default.get(data[index], accessor) - value ? data[index] : data[index - 1];
    }
    /**
     * Filter out dataframes which have no provided key or its value is not within provided range
     * @param {String} key - serie accessor to filter dataframes by
     * @param {Array} range - [min, max] values of a serie
     */

  }, {
    key: 'filter',
    value: function filter(key, range) {
      return _lodash2.default.filter(this._data, function (d) {
        return _lodash2.default.has(d, key) && d[key] >= range[0] && d[key] <= range[1];
      });
    }
    /**
     * Utility function to filter data by inclusion of dataframe inside provided ranges
     * @param {Object[]} data
     * @param {Object} ranges
     * @param {Object[]} ranges.keys
     */

  }, {
    key: 'filterByRanges',
    value: function filterByRanges(data, ranges) {
      return _lodash2.default.filter(data, function (d) {
        var pass = true;
        var i = 0;
        var keys = ranges.keys();
        while (pass && i < keys.length) {
          var key = keys[i];
          pass = _lodash2.default.has(d, key) && d[key] >= ranges[key][0] && d[key] <= ranges[key][1];
          i++;
        }
      });
    }
  }, {
    key: 'data',
    get: function get() {
      return _get(DataFrameModel.prototype.__proto__ || Object.getPrototypeOf(DataFrameModel.prototype), 'data', this);
    },
    set: function set(data) {
      this._data = this.parse(data) || [];
      this._ranges = {};
      this.trigger('change');
    }
    // TODO loop through all data and find all accessors

  }, {
    key: 'accessors',
    get: function get() {
      return _lodash2.default.keys(this._data[0]);
    }
  }]);

  return DataFrameModel;
}(_Data2.default);

exports.default = DataFrameModel;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  defaults: {
    colorScheme: d3Scale.schemeCategory20
  },

  set: function set() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var value = arguments[1];
    var options = arguments[2];

    // consider another set signature
    if (!_lodash2.default.isObject(p)) p = _defineProperty({}, p, value);else options = value;

    if (p.colorScheme && !p.colorScale) p.colorScale = d3Scale.scaleOrdinal(p.colorScheme);
    return p;
  },

  /**
   * @param {Object} data to extract color from
   * @param {Object} config on how to extract color from data
   * TODO should the getColor function if provided be evaluated on empty data?
   * Legend Panel needs to display a color not for particular data point but for the whole serie
   */
  getColor: function getColor(data) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var getColor = config.color;
    if (_lodash2.default.isString(getColor)) return getColor;
    if (_lodash2.default.isNil(data)) return undefined;
    if (_lodash2.default.isFunction(getColor)) return getColor(data);
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _contrailEvents = __webpack_require__(39);

var _contrailEvents2 = _interopRequireDefault(_contrailEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A "Command" object
 * @event enable
 * @event disable
 */
var instances = {};

var Action = function () {
  function Action() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Action);

    if (!instances[this.id]) instances[this.id] = this;
    var instance = instances[this.id];

    instance.registrars = instance.registrars || [];
    if (!_lodash2.default.includes(instance.registrars, p.registrar)) instance.registrars.push(p.registrar);

    instance._deny = true;
    return instance;
  }
  /**
   * Action is a Singleton so constructor name is effectively used as an id
   */


  _createClass(Action, [{
    key: 'apply',

    /**
     * Execute the action code
     */
    value: function apply() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (this._deny) return undefined;

      if (this._execute) {
        _lodash2.default.each(this.registrars, function (registrar) {
          _this._registrar = registrar;
          _this._execute.apply(_this, args);
          _this._registrar = undefined;
        });
      }
      this.trigger.apply(this, ['fired'].concat(args));
    }
    /**
     * Changes enable/disable state
     * Notifies "disable" Event
     */

  }, {
    key: 'disable',
    value: function disable() {
      if (this._deny) return;
      this._deny = true;
      this.trigger('disable');
    }
    /**
     * Changes enable/disable state
     * Notifies "enable" Event
     */

  }, {
    key: 'enable',
    value: function enable() {
      if (!this._deny) return;
      this._deny = false;
      this.trigger('enable');
    }
    /**
     * @returns Boolean whether Action has undo method
     */

  }, {
    key: 'canUndo',
    value: function canUndo() {
      return !!this._undo;
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      return !this._deny;
    }
    /**
     * Evaluate enabled state on selection change
     * @param selection Array
     */

  }, {
    key: 'evaluate',
    value: function evaluate(selection) {}
    /**
     * Remove registrar from action's registrars list
     * Clear all listeners if there are no registrars left
     * @param registrar
     */

  }, {
    key: 'unRegister',
    value: function unRegister(registrar) {
      var instance = instances[this.id];
      instance.registrars = _lodash2.default.without(instance.registrars, registrar);
      if (_lodash2.default.isEmpty(instances.registrars)) this.off();
    }
    /**
     * Override in Concrete Command
     */

  }, {
    key: '_execute',
    value: function _execute() {}
    /**
     * Toggle enabled state
     */

  }, {
    key: '_evaluate',
    value: function _evaluate(enable) {
      enable ? this.enable() : this.disable();
    }
  }, {
    key: 'id',
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return Action;
}();
// TODO replace with class extends syntax


exports.default = Action;
_lodash2.default.extend(Action.prototype, _contrailEvents2.default);

module.exports = Action;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENDED = exports.ENDING = exports.RUNNING = exports.STARTED = exports.STARTING = exports.SCHEDULED = exports.CREATED = undefined;

exports.default = function (node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
};

exports.init = init;
exports.set = set;
exports.get = get;

var _d3Dispatch = __webpack_require__(169);

var _d3Timer = __webpack_require__(84);

var emptyOn = (0, _d3Dispatch.dispatch)("start", "end", "interrupt");
var emptyTween = [];

var CREATED = exports.CREATED = 0;
var SCHEDULED = exports.SCHEDULED = 1;
var STARTING = exports.STARTING = 2;
var STARTED = exports.STARTED = 3;
var RUNNING = exports.RUNNING = 4;
var ENDING = exports.ENDING = 5;
var ENDED = exports.ENDED = 6;

function init(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED) throw new Error("too late");
  return schedule;
}

function set(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING) throw new Error("too late");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("too late");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0, _d3Timer.timer)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0, _d3Timer.timeout)(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          delete schedules[i];
        }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0, _d3Timer.timeout)(function () {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) {
      return;
    } // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * Idempotent function to calculate scale based on data model and provided config
   * @param model to extract domain from
   * @param config for a scale
   */
  getScale: function getScale(model) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var scale = config.scale;
    if (!_lodash2.default.isFunction(scale)) {
      scale = (d3Scale[scale] || d3Scale.scaleLinear)();
    }
    var domain = [];

    // data range is overrided by config.domain
    if (config.domain && !_lodash2.default.isNil(config.domain[0]) && !_lodash2.default.isNil(config.domain[1])) {
      domain = config.domain;
    } else if (model.data.length > 1) {
      var getFullRange = false;
      if (model.data.length < 2) getFullRange = true;
      domain = model.getRangeFor(config.accessor, getFullRange);

      if (config.stacked && config.accessor.length > 1) {
        domain[1] = _lodash2.default.reduce(config.accessor, function (sum, accessor) {
          return sum + model.getRangeFor(accessor)[1];
        }, 0);
      }

      if (config.domain && !_lodash2.default.isNil(config.domain[0])) domain[0] = config.domain[0];
      if (config.domain && !_lodash2.default.isNil(config.domain[1])) domain[1] = config.domain[1];
    }

    if (!_lodash2.default.isEmpty(domain)) scale.domain(domain);
    if (config.range) scale.range(config.range);
    return scale;
  },
  getCalculatedDomain: function getCalculatedDomain(model) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return model.getRangeFor(config.accessor, false);
  },
  outerWidth: function outerWidth(width, model, accessor, scale) {
    if (!model || !accessor || !_lodash2.default.isFunction(scale)) return width;
    var first = _lodash2.default.get((0, _lodash2.default)(model.data).first(), accessor);
    var last = _lodash2.default.get((0, _lodash2.default)(model.data).last(), accessor);
    return Math.abs(scale(last) - scale(first));
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRTdCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFtQjtBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQUlNLFVBQVUsR0FKaEIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLENBQUM7R0FDcEYsQ0FBQztDQUNIO1FBQ08sVUFBVSxHQUFWLFVBQVU7Ozs7O0FBSVgsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxVQUFTLEtBQUssRUFBRTtBQUN0RCxTQUFPLEFBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUFHLEtBQUssQ0FBQztDQUNqRyxDQUFDOzs7OztBQUdLLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUdNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUFFLFdBQU8sTUFBTSxDQUFDO0dBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuIl19


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(208)['default'];


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transition = Transition;
exports.default = transition;
exports.newId = newId;

var _d3Selection = __webpack_require__(0);

var _attr = __webpack_require__(115);

var _attr2 = _interopRequireDefault(_attr);

var _attrTween = __webpack_require__(116);

var _attrTween2 = _interopRequireDefault(_attrTween);

var _delay = __webpack_require__(117);

var _delay2 = _interopRequireDefault(_delay);

var _duration = __webpack_require__(118);

var _duration2 = _interopRequireDefault(_duration);

var _ease = __webpack_require__(119);

var _ease2 = _interopRequireDefault(_ease);

var _filter = __webpack_require__(120);

var _filter2 = _interopRequireDefault(_filter);

var _merge = __webpack_require__(121);

var _merge2 = _interopRequireDefault(_merge);

var _on = __webpack_require__(122);

var _on2 = _interopRequireDefault(_on);

var _remove = __webpack_require__(123);

var _remove2 = _interopRequireDefault(_remove);

var _select = __webpack_require__(124);

var _select2 = _interopRequireDefault(_select);

var _selectAll = __webpack_require__(125);

var _selectAll2 = _interopRequireDefault(_selectAll);

var _selection = __webpack_require__(126);

var _selection2 = _interopRequireDefault(_selection);

var _style = __webpack_require__(127);

var _style2 = _interopRequireDefault(_style);

var _styleTween = __webpack_require__(128);

var _styleTween2 = _interopRequireDefault(_styleTween);

var _text = __webpack_require__(129);

var _text2 = _interopRequireDefault(_text);

var _transition = __webpack_require__(130);

var _transition2 = _interopRequireDefault(_transition);

var _tween = __webpack_require__(22);

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0, _d3Selection.selection)().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = _d3Selection.selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select2.default,
  selectAll: _selectAll2.default,
  filter: _filter2.default,
  merge: _merge2.default,
  selection: _selection2.default,
  transition: _transition2.default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on2.default,
  attr: _attr2.default,
  attrTween: _attrTween2.default,
  style: _style2.default,
  styleTween: _styleTween2.default,
  text: _text2.default,
  remove: _remove2.default,
  tween: _tween2.default,
  delay: _delay2.default,
  duration: _duration2.default,
  ease: _ease2.default
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_color__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "color", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__src_color__, "rgb")) __webpack_require__.d(__webpack_exports__, "rgb", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["rgb"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__src_color__, "hsl")) __webpack_require__.d(__webpack_exports__, "hsl", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["hsl"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_lab__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__src_lab__, "hcl")) __webpack_require__.d(__webpack_exports__, "hcl", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["hcl"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_cubehelix__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix___default.a; });





/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ToggleVisibility = function (_Action) {
  _inherits(ToggleVisibility, _Action);

  function ToggleVisibility(p) {
    _classCallCheck(this, ToggleVisibility);

    var _this = _possibleConstructorReturn(this, (ToggleVisibility.__proto__ || Object.getPrototypeOf(ToggleVisibility)).call(this, p));

    _this._deny = false;
    return _this;
  }

  _createClass(ToggleVisibility, [{
    key: '_execute',
    value: function _execute(ids, isVisible) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      var _this2 = this;

      _lodash2.default.isArray(ids) || (ids = [ids]);
      _lodash2.default.each(ids, function (id) {
        if (_this2._registrar.id === id) {
          var _registrar, _registrar2;

          isVisible ? (_registrar = _this2._registrar).show.apply(_registrar, args) : (_registrar2 = _this2._registrar).hide.apply(_registrar2, args);
        }
      });
    }
  }]);

  return ToggleVisibility;
}(_Action3.default);

exports.default = ToggleVisibility;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SelectColor = function (_Action) {
  _inherits(SelectColor, _Action);

  function SelectColor(p) {
    _classCallCheck(this, SelectColor);

    var _this = _possibleConstructorReturn(this, (SelectColor.__proto__ || Object.getPrototypeOf(SelectColor)).call(this, p));

    _this._deny = false;
    return _this;
  }
  /**
   * Dependent components like Color Picker or Legend Panel will be updated by parent config model triggering 'change' event
   */


  _createClass(SelectColor, [{
    key: '_execute',
    value: function _execute(accessorName, color) {
      this._registrar.config.setColor(accessorName, color);
    }
  }]);

  return SelectColor;
}(_Action3.default);

exports.default = SelectColor;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SelectKey = function (_Action) {
  _inherits(SelectKey, _Action);

  function SelectKey(p) {
    _classCallCheck(this, SelectKey);

    var _this = _possibleConstructorReturn(this, (SelectKey.__proto__ || Object.getPrototypeOf(SelectKey)).call(this, p));

    _this._deny = false;
    return _this;
  }

  _createClass(SelectKey, [{
    key: '_execute',
    value: function _execute() {
      var _registrar$config;

      (_registrar$config = this._registrar.config).setKey.apply(_registrar$config, arguments);
    }
  }]);

  return SelectKey;
}(_Action3.default);

exports.default = SelectKey;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Zoom = function (_Action) {
  _inherits(Zoom, _Action);

  function Zoom(p) {
    _classCallCheck(this, Zoom);

    var _this = _possibleConstructorReturn(this, (Zoom.__proto__ || Object.getPrototypeOf(Zoom)).call(this, p));

    _this._deny = false;
    return _this;
  }
  /**
   * Zoom is performed by accessor ranges for any updated component be able to respond
   * while zooming by axes will require components to have the same corresponding axes names
   * @param ranges Hash of ranges by accessor
   */


  _createClass(Zoom, [{
    key: '_execute',
    value: function _execute(ids) {
      var _registrar;

      if (!_lodash2.default.isNil(ids) && !_lodash2.default.isArray(ids)) ids = [ids];

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (!ids || ids.includes(this._registrar.id)) (_registrar = this._registrar).zoom.apply(_registrar, args);
    }
  }]);

  return Zoom;
}(_Action3.default);

exports.default = Zoom;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hue = hue;
exports.gamma = gamma;
exports.default = nogamma;

var _constant = __webpack_require__(47);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linear(a, d) {
  return function (t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, _constant2.default)(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function (a, b) {
    return b - a ? exponential(a, b, y) : (0, _constant2.default)(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0, _constant2.default)(isNaN(a) ? b : a);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_value__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_array__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return __WEBPACK_IMPORTED_MODULE_1__src_array___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_basis__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return __WEBPACK_IMPORTED_MODULE_2__src_basis___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_basisClosed__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_3__src_basisClosed___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_date__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return __WEBPACK_IMPORTED_MODULE_4__src_date___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__src_number__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__src_object__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return __WEBPACK_IMPORTED_MODULE_6__src_object___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__src_round__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__src_string__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return __WEBPACK_IMPORTED_MODULE_8__src_string___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__src_transform_index__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_9__src_transform_index__, "interpolateTransformCss")) __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["interpolateTransformCss"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_9__src_transform_index__, "interpolateTransformSvg")) __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["interpolateTransformSvg"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__src_zoom__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return __WEBPACK_IMPORTED_MODULE_10__src_zoom___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__src_rgb__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_11__src_rgb__, "rgbBasis")) __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["rgbBasis"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_11__src_rgb__, "rgbBasisClosed")) __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["rgbBasisClosed"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__src_hsl__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return __WEBPACK_IMPORTED_MODULE_12__src_hsl___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_12__src_hsl__, "hslLong")) __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return __WEBPACK_IMPORTED_MODULE_12__src_hsl__["hslLong"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__src_lab__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return __WEBPACK_IMPORTED_MODULE_13__src_lab___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__src_hcl__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return __WEBPACK_IMPORTED_MODULE_14__src_hcl___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__src_hcl__, "hclLong")) __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return __WEBPACK_IMPORTED_MODULE_14__src_hcl__["hclLong"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__src_cubehelix__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_15__src_cubehelix__, "cubehelixLong")) __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["cubehelixLong"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_quantize__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_quantize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__src_quantize__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return __WEBPACK_IMPORTED_MODULE_16__src_quantize___default.a; });



















/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', { value: column });
      } else {
        this.column = column;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSTtBQUNGLFFBQUksR0FBRyxFQUFFO0FBQ1AsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJdkIsVUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO0FBQ3pCLGNBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO09BQ3hELE1BQU07QUFDTCxZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztPQUN0QjtLQUNGO0dBQ0YsQ0FBQyxPQUFPLEdBQUcsRUFBRTs7R0FFYjtDQUNGOztBQUVELFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7cUJBRW5CLFNBQVMiLCJmaWxlIjoiZXhjZXB0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgbGV0IGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG4gICAgICBsaW5lLFxuICAgICAgY29sdW1uO1xuICBpZiAobG9jKSB7XG4gICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIGxldCB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAobG9jKSB7XG4gICAgICB0aGlzLmxpbmVOdW1iZXIgPSBsaW5lO1xuXG4gICAgICAvLyBXb3JrIGFyb3VuZCBpc3N1ZSB1bmRlciBzYWZhcmkgd2hlcmUgd2UgY2FuJ3QgZGlyZWN0bHkgc2V0IHRoZSBjb2x1bW4gdmFsdWVcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29sdW1uJywge3ZhbHVlOiBjb2x1bW59KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAobm9wKSB7XG4gICAgLyogSWdub3JlIGlmIHRoZSBicm93c2VyIGlzIHZlcnkgcGFydGljdWxhciAqL1xuICB9XG59XG5cbkV4Y2VwdGlvbi5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhjZXB0aW9uO1xuIl19


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return a = +a, b -= a, function (t) {
    return a + b * t;
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0, _schedule.get)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
};

exports.tweenValue = tweenValue;

var _schedule = __webpack_require__(8);

function tweenRemove(id, name) {
  var tween0, tween1;
  return function () {
    var schedule = (0, _schedule.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function () {
    var schedule = (0, _schedule.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name: name, value: value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function () {
    var schedule = (0, _schedule.set)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function (node) {
    return (0, _schedule.get)(node, id).value[name];
  };
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _components = __webpack_require__(41);

var Components = _interopRequireWildcard(_components);

var _composites = __webpack_require__(42);

var Composites = _interopRequireWildcard(_composites);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Components manager for composited components
 */
var CompositeChart = function () {
  function CompositeChart(p) {
    _classCallCheck(this, CompositeChart);

    this._components = [];
  }

  _createClass(CompositeChart, [{
    key: 'setData',

    /**
     * Set data for all children components which have unique data models
     */
    value: function setData(data) {
      if (!_lodash2.default.isArray(data)) return;
      (0, _lodash2.default)(this._components).filter(function (c) {
        return c.isMaster;
      }).uniqBy(function (c) {
        return c.model;
      }).each(function (c) {
        return c.setData(data);
      });
    }
    /**
     * Get component by id
     * @param {String} id
     */

  }, {
    key: 'get',
    value: function get(id) {
      return _lodash2.default.find(this._components, { id: id });
    }
    /**
     * @param {String} type
     * @return {Array} of components
     */

  }, {
    key: 'getByType',
    value: function getByType(type) {
      _lodash2.default.isArray(type) || (type = [type]);
      return _lodash2.default.filter(this._components, function (component) {
        return type.includes(component.type);
      });
    }
    /**
     * Add component
     * @param {String} p.type
     * @param {Object} p.config
     * @param {Model} p.model optional for dependent components
     */

  }, {
    key: 'add',
    value: function add(p) {
      var type = p.type,
          config = p.config;

      if (!_lodash2.default.isObject(config) || config.enable === false) return false;
      var Component = Components[type + 'View'] || Composites[type + 'View'];
      var component = new Component(p);
      this._components.push(component);
      return component;
    }
  }, {
    key: 'remove',
    value: function remove(id) {
      if (id) {
        var component = this.get(id);
        this._components = _lodash2.default.without(this._components, component);
        return component.remove();
      }
      _lodash2.default.each(this._components, function (component) {
        return component.remove();
      });
      this._components = [];
    }
  }, {
    key: 'components',
    get: function get() {
      return this._components;
    }
  }]);

  return CompositeChart;
}();

exports.default = CompositeChart;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _Data = __webpack_require__(38);

var _Data2 = _interopRequireDefault(_Data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SerieModel = function (_DataModel) {
  _inherits(SerieModel, _DataModel);

  function SerieModel() {
    _classCallCheck(this, SerieModel);

    return _possibleConstructorReturn(this, (SerieModel.__proto__ || Object.getPrototypeOf(SerieModel)).apply(this, arguments));
  }

  _createClass(SerieModel, [{
    key: 'accessors',
    get: function get() {
      return _lodash2.default.keys(this._data);
    }
  }]);

  return SerieModel;
}(_Data2.default);

exports.default = SerieModel;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_selection_index__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_selection_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_selection_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_transition_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_transition_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_transition_index__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return __WEBPACK_IMPORTED_MODULE_1__src_transition_index___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_active__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_active___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_active__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "active", function() { return __WEBPACK_IMPORTED_MODULE_2__src_active___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_interrupt__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_interrupt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_interrupt__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return __WEBPACK_IMPORTED_MODULE_3__src_interrupt___default.a; });






/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function hashCode(str) {
  var hash = 0;
  var i = void 0;
  var chr = void 0;
  var len = void 0;
  if (str.length === 0) return hash;
  for (i = 0, len = str.length; i < len; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

var bubbleShapes = {
  signin: '&#xf090;',
  signout: '&#xf08b;',
  certificate: '&#xf0a3;',
  circleFill: '&#xf111;',
  circle: '&#xf10c;',
  notchCircle: '&#xf1ce;',
  thinCircle: '&#xf1db;',
  dotCircle: '&#xf192;',
  cog: '&#xf013;',
  dashboard: '&#xf0e4;',
  db: '&#xf1c0;',
  desktop: '&#xf108;',
  squareFill: '&#xf0c8;',
  sun: '&#xf185;',
  square: '&#xf096;',
  star: '&#xf005;',
  spinner: '&#xf110;',
  sheld: '&#xf132;',
  network: '&#xf0e8;',
  tv: '&#xf26c;',
  window: '&#xf2d0;',
  cloud: '&#xf0c2;',
  cogs: '&#xf085;',
  compass: '&#xf14e;',
  warning: '&#xf071;',
  alarmFill: '&#xf0f3;',
  deleted: '&#xf05e;',
  asterisk: '&#xf069;',
  bucket: '&#xe919;'
};

exports.hashCode = hashCode;
exports.bubbleShapes = bubbleShapes;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var prefix = exports.prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function has(key) {
    return prefix + key in this;
  },
  get: function get(key) {
    return this[prefix + key];
  },
  set: function set(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function remove(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function clear() {
    for (var property in this) {
      if (property[0] === prefix) delete this[property];
    }
  },
  keys: function keys() {
    var keys = [];
    for (var property in this) {
      if (property[0] === prefix) keys.push(property.slice(1));
    }return keys;
  },
  values: function values() {
    var values = [];
    for (var property in this) {
      if (property[0] === prefix) values.push(this[property]);
    }return values;
  },
  entries: function entries() {
    var entries = [];
    for (var property in this) {
      if (property[0] === prefix) entries.push({ key: property.slice(1), value: this[property] });
    }return entries;
  },
  size: function size() {
    var size = 0;
    for (var property in this) {
      if (property[0] === prefix) ++size;
    }return size;
  },
  empty: function empty() {
    for (var property in this) {
      if (property[0] === prefix) return false;
    }return true;
  },
  each: function each(f) {
    for (var property in this) {
      if (property[0] === prefix) f(this[property], property.slice(1), this);
    }
  }
};

function map(object, f) {
  var map = new Map();

  // Copy constructor.
  if (object instanceof Map) object.each(function (value, key) {
    map.set(key, value);
  });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
      var i = -1,
          n = object.length,
          o;

      if (f == null) while (++i < n) {
        map.set(i, object[i]);
      } else while (++i < n) {
        map.set(f(o = object[i], i, object), o);
      }
    }

    // Convert object to map.
    else if (object) for (var key in object) {
        map.set(key, object[key]);
      }return map;
}

exports.default = map;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brighter = exports.darker = undefined;
exports.Color = Color;
exports.default = color;
exports.rgbConvert = rgbConvert;
exports.rgb = rgb;
exports.Rgb = Rgb;
exports.hslConvert = hslConvert;
exports.hsl = hsl;

var _define = __webpack_require__(29);

var _define2 = _interopRequireDefault(_define);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Color() {}

var _darker = 0.7;
exports.darker = _darker;
var _brighter = 1 / _darker;

exports.brighter = _brighter;
var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0, _define2.default)(Color, color, {
  displayable: function displayable() {
    return this.rgb().displayable();
  },
  toString: function toString() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb(m >> 8 & 0xf | m >> 4 & 0x0f0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
  ) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
  : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
  : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0, _define2.default)(Rgb, rgb, (0, _define.extend)(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function rgb() {
    return this;
  },
  displayable: function displayable() {
    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
  },
  toString: function toString() {
    var a = this.opacity;a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define2.default)(Hsl, hsl, (0, _define.extend)(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
};

exports.extend = extend;
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) {
    prototype[key] = definition[key];
  }return prototype;
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basis = basis;

exports.default = function (values) {
  var n = values.length - 1;
  return function (t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
};

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1,
      t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (a, b) {
    var t = typeof b === "undefined" ? "undefined" : _typeof(b),
        c;
    return b == null || t === "boolean" ? (0, _constant2.default)(b) : (t === "number" ? _number2.default : t === "string" ? (c = (0, _d3Color.color)(b)) ? (b = c, _rgb2.default) : _string2.default : b instanceof _d3Color.color ? _rgb2.default : b instanceof Date ? _date2.default : Array.isArray(b) ? _array2.default : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object2.default : _number2.default)(a, b);
};

var _d3Color = __webpack_require__(13);

var _rgb = __webpack_require__(50);

var _rgb2 = _interopRequireDefault(_rgb);

var _array = __webpack_require__(45);

var _array2 = _interopRequireDefault(_array);

var _date = __webpack_require__(48);

var _date2 = _interopRequireDefault(_date);

var _number = __webpack_require__(21);

var _number2 = _interopRequireDefault(_number);

var _object = __webpack_require__(49);

var _object2 = _interopRequireDefault(_object);

var _string = __webpack_require__(51);

var _string2 = _interopRequireDefault(_string);

var _constant = __webpack_require__(47);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.now = now;
exports.Timer = Timer;
exports.timer = timer;
exports.timerFlush = timerFlush;
var frame = 0,
    // is an animation frame pending?
timeout = 0,
    // is a timeout pending?
interval = 0,
    // are any timers active?
pokeDelay = 1000,
    // how frequently we check for clock skew
taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
    setFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
  setTimeout(f, 17);
};

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call = this._time = this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function restart(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function stop() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead,
      e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(),
      delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0,
      t1 = taskHead,
      t2,
      time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, delay);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clockNow, interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * fired to stop updating component by setData
 */
var ToggleHalt = function (_Action) {
  _inherits(ToggleHalt, _Action);

  function ToggleHalt(p) {
    _classCallCheck(this, ToggleHalt);

    var _this = _possibleConstructorReturn(this, (ToggleHalt.__proto__ || Object.getPrototypeOf(ToggleHalt)).call(this, p));

    _this._deny = false;
    return _this;
  }

  _createClass(ToggleHalt, [{
    key: '_execute',
    value: function _execute(ids, toggle) {
      var _this2 = this;

      _lodash2.default.isArray(ids) || (ids = [ids]);
      _lodash2.default.each(ids, function (id) {
        if (_this2._registrar.id === id) _this2._registrar.setHalt(toggle);
      });
    }
  }]);

  return ToggleHalt;
}(_Action3.default);

exports.default = ToggleHalt;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


/**
 * Axis name is required to start with 'x' or 'y' to designate it's mathematical position
 */
var AxisConfigModel = function (_ConfigModel) {
  _inherits(AxisConfigModel, _ConfigModel);

  function AxisConfigModel() {
    _classCallCheck(this, AxisConfigModel);

    return _possibleConstructorReturn(this, (AxisConfigModel.__proto__ || Object.getPrototypeOf(AxisConfigModel)).apply(this, arguments));
  }

  _createClass(AxisConfigModel, [{
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(AxisConfigModel.prototype.__proto__ || Object.getPrototypeOf(AxisConfigModel.prototype), 'defaults', this), {

        isSharedContainer: true,
        // Default axis ticks if not specified per axis.
        ticks: 10,

        positions: ['left', 'right', 'top', 'bottom'],

        margin: {
          label: 10
        },

        // serie accessors to plot on this axis
        accessors: []
      });
    }
  }, {
    key: 'name',
    get: function get() {
      return this.attributes.name;
    }
  }, {
    key: 'baseName',
    get: function get() {
      return this.attributes.name.slice(0, 1);
    }
  }, {
    key: 'scale',
    get: function get() {
      return this.attributes.scale;
    }
  }, {
    key: 'formatter',
    get: function get() {
      return this.attributes.formatter;
    }
  }, {
    key: 'position',
    get: function get() {
      return this.attributes.position || this.constructor.defaultPosition(this.attributes.name);
    }
  }, {
    key: 'direction',
    get: function get() {
      return this.constructor.getDirection(this.attributes.position);
    }
  }, {
    key: 'isHorizontal',
    get: function get() {
      return this.direction === 'horizontal';
    }
  }, {
    key: 'location',
    get: function get() {
      return this.constructor.getLocation(this.attributes.position);
    }
    /**
     * @return {Number} relative position of the axis to the plot
     */

  }, {
    key: 'side',
    get: function get() {
      return this.location === 'start' ? -1 : 1;
    }
  }, {
    key: 'tickCoords',
    get: function get() {
      return this.attributes.tickCoords;
    }
    /**
     * calculate domain values for ticks based on preset tick coordinates from scale range
     */

  }, {
    key: 'tickValues',
    get: function get() {
      var _this2 = this;

      return _lodash2.default.map(this.attributes.tickCoords, function (coord) {
        return _this2.attributes.scale.invert(coord);
      });
    }
  }, {
    key: 'labels',
    get: function get() {
      var _this3 = this;

      if (this.attributes.label) return [this.attributes.label];
      return _lodash2.default.map(this.attributes.accessors, function (a) {
        return _this3.getLabel([], a);
      });
    }
  }], [{
    key: 'getDirection',

    /**
     * @return {String} Visual direction of Axis
     */
    value: function getDirection(position) {
      if (['left', 'right'].includes(position)) return 'vertical';
      if (['top', 'bottom'].includes(position)) return 'horizontal';
    }
    /**
     * @return {String} Visual location of axis relative to the plot
     */

  }, {
    key: 'getLocation',
    value: function getLocation(position) {
      if (['top', 'left'].includes(position)) return 'start';
      if (['bottom', 'right'].includes(position)) return 'end';
    }
  }, {
    key: 'defaultPosition',
    value: function defaultPosition(name) {
      if (name.startsWith('x')) return 'bottom';
      if (name.startsWith('y')) return 'left';
    }
  }]);

  return AxisConfigModel;
}(_configModel2.default);

exports.default = AxisConfigModel;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Shape = __webpack_require__(0);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _d3Brush = __webpack_require__(0);

var d3Brush = _interopRequireWildcard(_d3Brush);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _BrushConfigModel = __webpack_require__(56);

var _BrushConfigModel2 = _interopRequireDefault(_BrushConfigModel);

__webpack_require__(173);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BrushView = function (_ChartView) {
  _inherits(BrushView, _ChartView);

  _createClass(BrushView, null, [{
    key: 'Config',
    get: function get() {
      return _BrushConfigModel2.default;
    }
  }]);

  function BrushView() {
    var _ref;

    _classCallCheck(this, BrushView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = BrushView.__proto__ || Object.getPrototypeOf(BrushView)).call.apply(_ref, [this].concat(args)));

    _this._brush = d3Brush.brushX().on('start brush end', _this._onSelection.bind(_this));
    return _this;
  }

  _createClass(BrushView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      _get(BrushView.prototype.__proto__ || Object.getPrototypeOf(BrushView.prototype), 'render', this).call(this);
      this._brush.extent(this.config.extent).handleSize(10);

      var yRange = this.config.get('yRange');
      this.d3.selectAll(this.selectors.unselected).data([{ type: 'w' }, { type: 'e' }]).enter().append('rect').attr('class', function (d) {
        return _this2.selectorClass('unselected') + '-' + d.type;
      }).classed('hide', true).classed(this.selectorClass('unselected'), true).attr('y', yRange[1]).attr('height', yRange[0] - yRange[1]);

      this.d3.selectAll(this.selectors.handle).data([{ type: 'w' }, { type: 'e' }]).enter().append('path').classed('hide', true).classed(this.selectorClass('handle'), true).attr('d', d3Shape.arc().innerRadius(0).outerRadius(this.config.handleHeight / 2).startAngle(0).endAngle(function (d, i) {
        return i ? Math.PI : -Math.PI;
      }));
      this.d3.call(this._brush);

      if (_lodash2.default.isEmpty(this.config.selection)) this._brush.move(this.d3, null);else {
        var brushGroup = this.d3.transition().ease(d3Ease.easeLinear).duration(this.config.duration);
        this._brush.move(brushGroup, this.config.selection);
      }
    }
  }, {
    key: 'show',
    value: function show(selection) {
      var _this3 = this;

      var xRange = this.config.get('xRange');
      this.d3.selectAll(this.selectors.unselected).classed('hide', false).attr('x', function (d) {
        return d.type === 'w' ? xRange[0] : selection[1];
      }).attr('width', function (d) {
        var length = d.type === 'w' ? selection[0] - xRange[0] : xRange[1] - selection[1];
        return length > 0 ? length : 0;
      });

      this.d3.selectAll(this.selectors.handle).classed('hide', false).attr('transform', function (d, i) {
        return 'translate(' + selection[i] + ',' + _this3.config.handleCenter + ') scale(1,2)';
      });
    }
  }, {
    key: 'move',
    value: function move(selection) {
      this._brush.move(this.d3, selection);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.d3.selectAll(this.selectors.handle).classed('hide', true);
      this.d3.selectAll(this.selectors.unselected).classed('hide', true);
    }

    // Event handlers

  }, {
    key: '_onSelection',
    value: function _onSelection() {
      var _this4 = this;

      var selection = d3Selection.event.selection;
      var xRange = this.config.get('xRange');

      if (!selection) return this.hide();else this.show(selection);

      this.config.set('selection', selection, { silent: true });
      // selection is removed when clicking outside a brush
      if (selection[0] === selection[1]) {
        var _xRange = this.config.get('xRange');
        selection = [_xRange[0], _xRange[1]];
      }
      if (_lodash2.default.isEqual(selection, xRange)) {
        setTimeout(function () {
          return _this4._brush.move(_this4.d3);
        });
      }

      this.trigger('selection', selection);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 9;
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(BrushView.prototype.__proto__ || Object.getPrototypeOf(BrushView.prototype), 'selectors', this), {
        handle: '.handle--custom',
        unselected: '.unselected'
      });
    }
  }]);

  return BrushView;
}(_chartView2.default);

exports.default = BrushView;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cluster = function (_Action) {
  _inherits(Cluster, _Action);

  function Cluster(p) {
    _classCallCheck(this, Cluster);

    var _this = _possibleConstructorReturn(this, (Cluster.__proto__ || Object.getPrototypeOf(Cluster)).call(this, p));

    _this._deny = false;
    return _this;
  }

  _createClass(Cluster, [{
    key: '_execute',
    value: function _execute() {
      var _registrar;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var ids = args.length > 1 ? args.shift() : null;
      if (!_lodash2.default.isNil(ids) && !_lodash2.default.isArray(ids)) ids = [ids];
      if (!ids || ids.includes(this._registrar.id)) (_registrar = this._registrar).cluster.apply(_registrar, args);
    }
  }]);

  return Cluster;
}(_Action3.default);

exports.default = Cluster;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(198);

module.exports = function TitleView(container, text) {
  var selector = '.cc-title';
  var el = container.querySelector(selector) || document.createElement('div');
  el.classList.add(selector.substr(1));
  el.innerHTML = text;
  container.prepend(el);
}; /*
    * Copyright (c) Juniper Networks, Inc. All rights reserved.
    */
/*
 * Simple title rendering
 */

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _contrailEvents = __webpack_require__(39);

var _contrailEvents2 = _interopRequireDefault(_contrailEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base data model.
 */
var DataModel = function () {
  function DataModel(data, config) {
    _classCallCheck(this, DataModel);

    this.config = config;
    if (!_lodash2.default.isEmpty(data)) this.data = data;
  }

  _createClass(DataModel, [{
    key: 'parse',
    value: function parse(data) {
      return _lodash2.default.isFunction(this._formatter) ? this._formatter(data) : data;
    }
  }, {
    key: 'data',
    get: function get() {
      return this._data || [];
    },
    set: function set(data) {
      this._data = this.parse(data);
      this.trigger('change');
    }
  }, {
    key: 'type',
    get: function get() {
      return this.constructor.name.slice(0, -5);
    }
  }, {
    key: 'config',
    set: function set() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          formatter = _ref.formatter;

      if (!formatter) return;
      this._formatter = formatter;
      this.trigger('change');
    }
  }]);

  return DataModel;
}();
// TODO replace with class extends syntax


exports.default = DataModel;
_lodash2.default.extend(DataModel.prototype, _contrailEvents2.default);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _backbone = __webpack_require__(40);

var _backbone2 = _interopRequireDefault(_backbone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return a list of assigned event listeners.
 *
 * @param {String} event The events that should be listed.
 * @param {Boolean} exists We only need to know if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
/*
 * Copyright (c) Juniper Networks, Inc. All rights reserved.
 */
_backbone2.default.Events.listeners = function listeners(event, exists) {
  var available = this._events && this._events[event];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].callback;
  }

  return ee;
};
_lodash2.default.extend(_backbone2.default.View.prototype, _backbone2.default.Events);
_lodash2.default.extend(_backbone2.default.Model.prototype, _backbone2.default.Events);
exports.default = _backbone2.default.Events;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BrushView = __webpack_require__(35);

Object.defineProperty(exports, 'BrushView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BrushView).default;
  }
});

var _BrushConfigModel = __webpack_require__(56);

Object.defineProperty(exports, 'BrushConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BrushConfigModel).default;
  }
});

var _BucketView = __webpack_require__(135);

Object.defineProperty(exports, 'BucketView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BucketView).default;
  }
});

var _BucketConfigModel = __webpack_require__(57);

Object.defineProperty(exports, 'BucketConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BucketConfigModel).default;
  }
});

var _ColorPickerConfigModel = __webpack_require__(58);

Object.defineProperty(exports, 'ColorPickerConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorPickerConfigModel).default;
  }
});

var _ColorPickerView = __webpack_require__(137);

Object.defineProperty(exports, 'ColorPickerView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorPickerView).default;
  }
});

var _StackedBarView = __webpack_require__(156);

Object.defineProperty(exports, 'StackedBarView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StackedBarView).default;
  }
});

var _StackedBarConfigModel = __webpack_require__(74);

Object.defineProperty(exports, 'StackedBarConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StackedBarConfigModel).default;
  }
});

var _GroupedBarView = __webpack_require__(142);

Object.defineProperty(exports, 'GroupedBarView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GroupedBarView).default;
  }
});

var _GroupedBarConfigModel = __webpack_require__(61);

Object.defineProperty(exports, 'GroupedBarConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GroupedBarConfigModel).default;
  }
});

var _AreaView = __webpack_require__(133);

Object.defineProperty(exports, 'AreaView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AreaView).default;
  }
});

var _AreaConfigModel = __webpack_require__(55);

Object.defineProperty(exports, 'AreaConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AreaConfigModel).default;
  }
});

var _LineView = __webpack_require__(145);

Object.defineProperty(exports, 'LineView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LineView).default;
  }
});

var _LineConfigModel = __webpack_require__(64);

Object.defineProperty(exports, 'LineConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LineConfigModel).default;
  }
});

var _RadialLineView = __webpack_require__(152);

Object.defineProperty(exports, 'RadialLineView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadialLineView).default;
  }
});

var _RadialLineConfigModel = __webpack_require__(70);

Object.defineProperty(exports, 'RadialLineConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadialLineConfigModel).default;
  }
});

var _RadialBarView = __webpack_require__(151);

Object.defineProperty(exports, 'RadialBarView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadialBarView).default;
  }
});

var _RadialBarConfigModel = __webpack_require__(69);

Object.defineProperty(exports, 'RadialBarConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadialBarConfigModel).default;
  }
});

var _ScatterPlotView = __webpack_require__(155);

Object.defineProperty(exports, 'ScatterPlotView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScatterPlotView).default;
  }
});

var _ScatterPlotConfigModel = __webpack_require__(73);

Object.defineProperty(exports, 'ScatterPlotConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScatterPlotConfigModel).default;
  }
});

var _ControlPanelConfigModel = __webpack_require__(59);

Object.defineProperty(exports, 'ControlPanelConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ControlPanelConfigModel).default;
  }
});

var _ControlPanelView = __webpack_require__(138);

Object.defineProperty(exports, 'ControlPanelView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ControlPanelView).default;
  }
});

var _CrosshairConfigModel = __webpack_require__(60);

Object.defineProperty(exports, 'CrosshairConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CrosshairConfigModel).default;
  }
});

var _CrosshairView = __webpack_require__(139);

Object.defineProperty(exports, 'CrosshairView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CrosshairView).default;
  }
});

var _FilterView = __webpack_require__(141);

Object.defineProperty(exports, 'FilterView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FilterView).default;
  }
});

var _FilterConfigModel = __webpack_require__(140);

Object.defineProperty(exports, 'FilterConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FilterConfigModel).default;
  }
});

var _LegendConfigModel = __webpack_require__(63);

Object.defineProperty(exports, 'LegendConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LegendConfigModel).default;
  }
});

var _LegendView = __webpack_require__(144);

Object.defineProperty(exports, 'LegendView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LegendView).default;
  }
});

var _LegendPanelConfigModel = __webpack_require__(62);

Object.defineProperty(exports, 'LegendPanelConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LegendPanelConfigModel).default;
  }
});

var _LegendPanelView = __webpack_require__(143);

Object.defineProperty(exports, 'LegendPanelView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LegendPanelView).default;
  }
});

var _MessageView = __webpack_require__(146);

Object.defineProperty(exports, 'MessageView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MessageView).default;
  }
});

var _PieConfigModel = __webpack_require__(67);

Object.defineProperty(exports, 'PieConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PieConfigModel).default;
  }
});

var _PieView = __webpack_require__(149);

Object.defineProperty(exports, 'PieView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PieView).default;
  }
});

var _RadialDendrogramConfigModel = __webpack_require__(71);

Object.defineProperty(exports, 'RadialDendrogramConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadialDendrogramConfigModel).default;
  }
});

var _RadialDendrogramView = __webpack_require__(153);

Object.defineProperty(exports, 'RadialDendrogramView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadialDendrogramView).default;
  }
});

var _SankeyConfigModel = __webpack_require__(72);

Object.defineProperty(exports, 'SankeyConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SankeyConfigModel).default;
  }
});

var _SankeyView = __webpack_require__(154);

Object.defineProperty(exports, 'SankeyView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SankeyView).default;
  }
});

var _StandaloneConfigModel = __webpack_require__(75);

Object.defineProperty(exports, 'StandaloneConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StandaloneConfigModel).default;
  }
});

var _StandaloneView = __webpack_require__(157);

Object.defineProperty(exports, 'StandaloneView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StandaloneView).default;
  }
});

var _TimelineConfigModel = __webpack_require__(76);

Object.defineProperty(exports, 'TimelineConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TimelineConfigModel).default;
  }
});

var _TimelineView = __webpack_require__(158);

Object.defineProperty(exports, 'TimelineView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TimelineView).default;
  }
});

var _TooltipConfigModel = __webpack_require__(77);

Object.defineProperty(exports, 'TooltipConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TooltipConfigModel).default;
  }
});

var _TooltipView = __webpack_require__(159);

Object.defineProperty(exports, 'TooltipView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TooltipView).default;
  }
});

var _AxisConfigModel = __webpack_require__(34);

Object.defineProperty(exports, 'AxisConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AxisConfigModel).default;
  }
});

var _AxisView = __webpack_require__(134);

Object.defineProperty(exports, 'AxisView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AxisView).default;
  }
});

var _RadialAxisConfigModel = __webpack_require__(68);

Object.defineProperty(exports, 'RadialAxisConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadialAxisConfigModel).default;
  }
});

var _RadialAxisView = __webpack_require__(150);

Object.defineProperty(exports, 'RadialAxisView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadialAxisView).default;
  }
});

var _MapView = __webpack_require__(66);

Object.defineProperty(exports, 'MapView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MapView).default;
  }
});

var _MapConfigModel = __webpack_require__(65);

Object.defineProperty(exports, 'MapConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MapConfigModel).default;
  }
});

var _TrafficMapConfigModel = __webpack_require__(78);

Object.defineProperty(exports, 'TrafficMapConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TrafficMapConfigModel).default;
  }
});

var _TrafficMapView = __webpack_require__(160);

Object.defineProperty(exports, 'TrafficMapView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TrafficMapView).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CompositeView = __webpack_require__(161);

Object.defineProperty(exports, 'CompositeView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CompositeView).default;
  }
});

var _CompositeYView = __webpack_require__(82);

Object.defineProperty(exports, 'CompositeYView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CompositeYView).default;
  }
});

var _CompositeYConfigModel = __webpack_require__(81);

Object.defineProperty(exports, 'CompositeYConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CompositeYConfigModel).default;
  }
});

var _CompositeRadialView = __webpack_require__(163);

Object.defineProperty(exports, 'CompositeRadialView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CompositeRadialView).default;
  }
});

var _CompositeRadialConfigModel = __webpack_require__(80);

Object.defineProperty(exports, 'CompositeRadialConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CompositeRadialConfigModel).default;
  }
});

var _NavigationConfigModel = __webpack_require__(79);

Object.defineProperty(exports, 'NavigationConfigModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavigationConfigModel).default;
  }
});

var _NavigationView = __webpack_require__(162);

Object.defineProperty(exports, 'NavigationView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavigationView).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Serie = __webpack_require__(24);

Object.defineProperty(exports, 'Serie', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Serie).default;
  }
});

var _DataFrame = __webpack_require__(5);

Object.defineProperty(exports, 'DataFrame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DataFrame).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var deg2rad = exports.deg2rad = Math.PI / 180;
var rad2deg = exports.rad2deg = 180 / Math.PI;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(nb),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) {
    x[i] = (0, _value2.default)(a[i], b[i]);
  }for (; i < nb; ++i) {
    c[i] = b[i];
  }return function (t) {
    for (i = 0; i < na; ++i) {
      c[i] = x[i](t);
    }return c;
  };
};

var _value = __webpack_require__(31);

var _value2 = _interopRequireDefault(_value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values) {
  var n = values.length;
  return function (t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0, _basis.basis)((t - i / n) * n, v0, v1, v2, v3);
  };
};

var _basis = __webpack_require__(30);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var d = new Date();
  return a = +a, b -= a, function (t) {
    return d.setTime(a + b * t), d;
  };
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || (typeof a === "undefined" ? "undefined" : _typeof(a)) !== "object") a = {};
  if (b === null || (typeof b === "undefined" ? "undefined" : _typeof(b)) !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = (0, _value2.default)(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) {
      c[k] = i[k](t);
    }return c;
  };
};

var _value = __webpack_require__(31);

var _value2 = _interopRequireDefault(_value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbBasisClosed = exports.rgbBasis = undefined;

var _d3Color = __webpack_require__(13);

var _basis = __webpack_require__(30);

var _basis2 = _interopRequireDefault(_basis);

var _basisClosed = __webpack_require__(46);

var _basisClosed2 = _interopRequireDefault(_basisClosed);

var _color = __webpack_require__(18);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function rgbGamma(y) {
  var color = (0, _color.gamma)(y);

  function rgb(start, end) {
    var r = color((start = (0, _d3Color.rgb)(start)).r, (end = (0, _d3Color.rgb)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
}(1);

function rgbSpline(spline) {
  return function (colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i,
        color;
    for (i = 0; i < n; ++i) {
      color = (0, _d3Color.rgb)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function (t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = exports.rgbBasis = rgbSpline(_basis2.default);
var rgbBasisClosed = exports.rgbBasisClosed = rgbSpline(_basisClosed2.default);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0,
      // scan index for next number in b
  am,
      // current match in a
  bm,
      // current match in b
  bs,
      // string preceding current number in b, if any
  i = -1,
      // index in s
  s = [],
      // string constants and placeholders
  q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else {
      // interpolate non-matching numbers
      s[++i] = null;
      q.push({ i: i, x: (0, _number2.default)(am, bm) });
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i = 0, o; i < b; ++i) {
      s[(o = q[i]).i] = o.x(t);
    }return s.join("");
  });
};

var _number = __webpack_require__(21);

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function () {
    return b;
  };
}

function one(b) {
  return function (t) {
    return b(t) + "";
  };
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty = false;continue;
    }
    active = schedule.state > _schedule.STARTING && schedule.state < _schedule.ENDING;
    schedule.state = _schedule.ENDED;
    schedule.timer.stop();
    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
};

var _schedule = __webpack_require__(8);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (a, b) {
    var c;
    return (typeof b === "number" ? _d3Interpolate.interpolateNumber : b instanceof _d3Color.color ? _d3Interpolate.interpolateRgb : (c = (0, _d3Color.color)(b)) ? (b = c, _d3Interpolate.interpolateRgb) : _d3Interpolate.interpolateString)(a, b);
};

var _d3Color = __webpack_require__(13);

var _d3Interpolate = __webpack_require__(19);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Used for browsing through available data.
 * For example to move the selected range of displayed data one step forward / backward.
 */
var Browse = function (_Action) {
  _inherits(Browse, _Action);

  function Browse(p) {
    _classCallCheck(this, Browse);

    var _this = _possibleConstructorReturn(this, (Browse.__proto__ || Object.getPrototypeOf(Browse)).call(this, p));

    _this._deny = false;
    return _this;
  }

  _createClass(Browse, [{
    key: '_execute',
    value: function _execute(ids, toggle, attribute) {
      var _this2 = this;

      _lodash2.default.isArray(ids) || (ids = [ids]);
      _lodash2.default.each(ids, function (id) {
        if (_this2._registrar.id === id) {
          _this2._registrar.browse(attribute);
        }
      });
    }
  }]);

  return Browse;
}(_Action3.default);

exports.default = Browse;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Array = __webpack_require__(0);

var d3Array = _interopRequireWildcard(_d3Array);

var _d3Shape = __webpack_require__(0);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

var _ScalableChart = __webpack_require__(9);

var _ScalableChart2 = _interopRequireDefault(_ScalableChart);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var AreaConfigModel = function (_ConfigModel) {
  _inherits(AreaConfigModel, _ConfigModel);

  function AreaConfigModel() {
    _classCallCheck(this, AreaConfigModel);

    return _possibleConstructorReturn(this, (AreaConfigModel.__proto__ || Object.getPrototypeOf(AreaConfigModel)).apply(this, arguments));
  }

  _createClass(AreaConfigModel, [{
    key: 'set',
    value: function set() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _ColoredChart2.default.set.apply(_ColoredChart2.default, args);
      (_get2 = _get(AreaConfigModel.prototype.__proto__ || Object.getPrototypeOf(AreaConfigModel.prototype), 'set', this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: 'getOuterWidth',
    value: function getOuterWidth(model, width) {
      return _ScalableChart2.default.outerWidth(width, model, this.get('x.accessor'), this.get('x.scale'));
    }
    /**
     * @param model
     * @param width
     * @param height
     */

  }, {
    key: 'calculateScales',
    value: function calculateScales(model) {
      var config = this.attributes.x;
      _lodash2.default.set(this.attributes, 'x.scale', _ScalableChart2.default.getScale(model, config));

      var stackGroups = _lodash2.default.groupBy(this.yAccessors, 'stack');
      var totalDomainValues = _lodash2.default.reduce(stackGroups, function (totalDomainValues, accessors) {
        var stackedDomain = _lodash2.default.reduce(accessors, function (stackedDomain, accessor) {
          var domain = model.getRangeFor(accessor.accessor);
          // Summarize ranges for stacked layers
          return [stackedDomain[0] + domain[0], stackedDomain[1] + domain[1]];
        }, [0, 0]);
        // Get min / max extent for non-stacked layers
        return totalDomainValues.concat(stackedDomain);
      }, [0, 0]);
      var domain = d3Array.extent(totalDomainValues);
      config = _lodash2.default.merge({ domain: domain }, this.attributes.y);
      _lodash2.default.set(this.attributes, 'y.scale', _ScalableChart2.default.getScale(model, config));
    }
  }, {
    key: 'getColor',
    value: function getColor(accessorName) {
      var configured = _lodash2.default.find(this.yAccessors, { accessor: accessorName }).color;
      return configured || this.attributes.colorScale(accessorName);
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(AreaConfigModel.prototype.__proto__ || Object.getPrototypeOf(AreaConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {
        isSharedContainer: true,
        curve: d3Shape.curveCatmullRom.alpha(0.5)
      });
    }
  }, {
    key: 'yAccessors',
    get: function get() {
      return _lodash2.default.filter(this.attributes.y, function (a) {
        return !(a.enabled === false);
      });
    }
  }, {
    key: 'xScale',
    get: function get() {
      return this.get('x.scale');
    }
  }, {
    key: 'yScale',
    get: function get() {
      return this.get('y.scale');
    }
  }]);

  return AreaConfigModel;
}(_configModel2.default);

exports.default = AreaConfigModel;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BrushConfigModel = function (_ConfigModel) {
  _inherits(BrushConfigModel, _ConfigModel);

  function BrushConfigModel() {
    _classCallCheck(this, BrushConfigModel);

    return _possibleConstructorReturn(this, (BrushConfigModel.__proto__ || Object.getPrototypeOf(BrushConfigModel)).apply(this, arguments));
  }

  _createClass(BrushConfigModel, [{
    key: 'selection',

    /**
     * Brush selection in percentage [xMin%, xMax%]
     */
    get: function get() {
      return this.attributes.selection || [];
    }
  }, {
    key: 'handleHeight',
    get: function get() {
      return this.has('handleHeight') ? this.attributes.handleHeight : 16;
    }
  }, {
    key: 'handleCenter',
    get: function get() {
      return this.attributes.yRange[1] / 2 + this.attributes.yRange[0] / 2;
    }
  }, {
    key: 'extent',
    get: function get() {
      return [[this.attributes.xRange[0], this.attributes.yRange[1]], [this.attributes.xRange[1], this.attributes.yRange[0]]];
    }
  }]);

  return BrushConfigModel;
}(_configModel2.default);

exports.default = BrushConfigModel;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BucketConfigModel = function (_ConfigModel) {
  _inherits(BucketConfigModel, _ConfigModel);

  function BucketConfigModel() {
    _classCallCheck(this, BucketConfigModel);

    return _possibleConstructorReturn(this, (BucketConfigModel.__proto__ || Object.getPrototypeOf(BucketConfigModel)).apply(this, arguments));
  }

  _createClass(BucketConfigModel, [{
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(BucketConfigModel.prototype.__proto__ || Object.getPrototypeOf(BucketConfigModel.prototype), 'defaults', this), {
        isSharedContainer: true,
        // range start 256 - is an area of 16x16 square considering the default font for number of buckets as 14px
        range: [256, 512],
        scale: d3Scale.scaleLinear(),
        shape: '&#xf111;'
      });
    }
  }, {
    key: 'scale',
    get: function get() {
      var configRange = this.attributes.range;
      var defaultRange = this.defaults.range;
      var start = _lodash2.default.isNil(configRange[0]) ? defaultRange[0] : configRange[0];
      var end = _lodash2.default.isNil(configRange[1]) ? defaultRange[1] : configRange[1];
      return this.attributes.scale.range([start, end]);
    }
  }]);

  return BucketConfigModel;
}(_configModel2.default);

exports.default = BucketConfigModel;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ColorPickerConfigModel = function (_ConfigModel) {
  _inherits(ColorPickerConfigModel, _ConfigModel);

  function ColorPickerConfigModel() {
    _classCallCheck(this, ColorPickerConfigModel);

    return _possibleConstructorReturn(this, (ColorPickerConfigModel.__proto__ || Object.getPrototypeOf(ColorPickerConfigModel)).apply(this, arguments));
  }

  _createClass(ColorPickerConfigModel, [{
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(ColorPickerConfigModel.prototype.__proto__ || Object.getPrototypeOf(ColorPickerConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults);
    }
    /**
     * Ask parent component for serie accessors
     */

  }, {
    key: 'data',
    get: function get() {
      var _this2 = this;

      var data = { colors: this.attributes.colorScheme };
      var accessors = this._parent.yAccessors;
      data.series = _lodash2.default.map(accessors, function (accessor) {
        return {
          accessor: accessor.accessor,
          label: _this2.getLabel(undefined, accessor),
          color: _this2._parent.getColor(accessor.accessor)
        };
      });
      return data;
    }
  }]);

  return ColorPickerConfigModel;
}(_configModel2.default);

exports.default = ColorPickerConfigModel;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ControlPanelConfigModel = function (_ConfigModel) {
  _inherits(ControlPanelConfigModel, _ConfigModel);

  function ControlPanelConfigModel() {
    _classCallCheck(this, ControlPanelConfigModel);

    return _possibleConstructorReturn(this, (ControlPanelConfigModel.__proto__ || Object.getPrototypeOf(ControlPanelConfigModel)).apply(this, arguments));
  }

  _createClass(ControlPanelConfigModel, [{
    key: 'set',
    value: function set(key, value, options) {
      if (_lodash2.default.isString(key) && !this.attributes[key]) {
        var currentActionId = _lodash2.default.findKey(this.menuItems, function (item) {
          return item.attribute === key && item.toggle === value;
        });
        var oppositeId = _lodash2.default.findKey(this.menuItems, function (item) {
          return item.attribute === key && item.toggle === !value;
        });

        var menuItem = _lodash2.default.find(this.attributes.menu, function (item) {
          return item.id === currentActionId;
        });

        menuItem.id = oppositeId;
        this.trigger('change');
      } else _get(ControlPanelConfigModel.prototype.__proto__ || Object.getPrototypeOf(ControlPanelConfigModel.prototype), 'set', this).call(this, key, value, options);
    }
  }, {
    key: 'menuItems',
    get: function get() {
      return {
        Refresh: {
          title: 'Refresh chart',
          icon: 'icon-refresh'
        },
        Halt: {
          action: 'ToggleHalt',
          attribute: 'halted',
          toggle: true,
          title: 'Stop Live Update',
          icon: 'icon-stop'
        },
        Start: {
          action: 'ToggleHalt',
          attribute: 'halted',
          toggle: false,
          title: 'Start Live Update',
          icon: 'icon-play'
        },
        ColorPicker: {
          title: 'Select color for serie',
          icon: 'icon-color'
        },
        Filter: {
          title: 'Select serie to show',
          icon: 'icon-eye'
        }
      };
    }
  }, {
    key: 'update',
    get: function get() {
      return this.attributes.update.concat([this.id]);
    }
  }]);

  return ControlPanelConfigModel;
}(_configModel2.default);

exports.default = ControlPanelConfigModel;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
* This CrosshairConfigModel is designed to prepare data for CrosshairView based on the CompositeYView.
*/
var CrosshairConfigModel = function (_ConfigModel) {
  _inherits(CrosshairConfigModel, _ConfigModel);

  function CrosshairConfigModel() {
    _classCallCheck(this, CrosshairConfigModel);

    return _possibleConstructorReturn(this, (CrosshairConfigModel.__proto__ || Object.getPrototypeOf(CrosshairConfigModel)).apply(this, arguments));
  }

  _createClass(CrosshairConfigModel, [{
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(CrosshairConfigModel.prototype.__proto__ || Object.getPrototypeOf(CrosshairConfigModel.prototype), 'defaults', this), {
        // by default will use common shared container under the parent
        isSharedContainer: true,
        duration: 100,
        bubbleR: 5,

        // draw bubbles on cross of crosshair and chart
        bubbles: false,

        // draw lines across all chart height / width
        lines: 'full'
      });
    }
  }]);

  return CrosshairConfigModel;
}(_configModel2.default);

exports.default = CrosshairConfigModel;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

var _ScalableChart = __webpack_require__(9);

var _ScalableChart2 = _interopRequireDefault(_ScalableChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var GroupedBarConfigModel = function (_ConfigModel) {
  _inherits(GroupedBarConfigModel, _ConfigModel);

  function GroupedBarConfigModel() {
    _classCallCheck(this, GroupedBarConfigModel);

    return _possibleConstructorReturn(this, (GroupedBarConfigModel.__proto__ || Object.getPrototypeOf(GroupedBarConfigModel)).apply(this, arguments));
  }

  _createClass(GroupedBarConfigModel, [{
    key: 'set',
    value: function set() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _ColoredChart2.default.set.apply(_ColoredChart2.default, args);
      (_get2 = _get(GroupedBarConfigModel.prototype.__proto__ || Object.getPrototypeOf(GroupedBarConfigModel.prototype), 'set', this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: 'getOuterWidth',
    value: function getOuterWidth(model, width) {
      return _ScalableChart2.default.outerWidth(width, model, this.get('x.accessor'), this.get('x.scale'));
    }
    /**
     * @param model
     * @param width
     * @param height
     */

  }, {
    key: 'calculateScales',
    value: function calculateScales(model) {
      var config = this.attributes.x;
      _lodash2.default.set(this.attributes, 'x.scale', _ScalableChart2.default.getScale(model, config));
      config = _lodash2.default.merge({
        accessor: _lodash2.default.map(this.yAccessors, 'accessor')
      }, this.attributes.y);
      _lodash2.default.set(this.attributes, 'y.scale', _ScalableChart2.default.getScale(model, config));
    }
    /**
     * @param {Object} data may be used to assign color to individual bar based on its value
     */

  }, {
    key: 'getColor',
    value: function getColor(accessorName, data) {
      var accessor = _lodash2.default.find(this.yAccessors, { accessor: accessorName });
      var configured = _ColoredChart2.default.getColor(data, accessor);
      return configured || this.attributes.colorScale(accessorName);
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(GroupedBarConfigModel.prototype.__proto__ || Object.getPrototypeOf(GroupedBarConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {
        isSharedContainer: true,
        // Padding between series in percents of bar width
        barPadding: 15
      });
    }
  }, {
    key: 'yAccessors',
    get: function get() {
      return _lodash2.default.filter(this.attributes.y, function (a) {
        return !(a.enabled === false);
      });
    }
  }, {
    key: 'xScale',
    get: function get() {
      return this.get('x.scale');
    }
  }, {
    key: 'yScale',
    get: function get() {
      return this.get('y.scale');
    }
  }]);

  return GroupedBarConfigModel;
}(_configModel2.default);

exports.default = GroupedBarConfigModel;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Legend Panel is a dependent component which retrieves its data from the parent
 */
var LegendPanelConfigModel = function (_ConfigModel) {
  _inherits(LegendPanelConfigModel, _ConfigModel);

  function LegendPanelConfigModel() {
    _classCallCheck(this, LegendPanelConfigModel);

    return _possibleConstructorReturn(this, (LegendPanelConfigModel.__proto__ || Object.getPrototypeOf(LegendPanelConfigModel)).apply(this, arguments));
  }

  _createClass(LegendPanelConfigModel, [{
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(LegendPanelConfigModel.prototype.__proto__ || Object.getPrototypeOf(LegendPanelConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {
        editable: {
          color: false,
          chart: false
        },
        filter: true,
        placement: 'horizontal'
      });
    }
  }]);

  return LegendPanelConfigModel;
}(_configModel2.default);

exports.default = LegendPanelConfigModel;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var LegendConfigModel = function (_ConfigModel) {
  _inherits(LegendConfigModel, _ConfigModel);

  function LegendConfigModel() {
    _classCallCheck(this, LegendConfigModel);

    return _possibleConstructorReturn(this, (LegendConfigModel.__proto__ || Object.getPrototypeOf(LegendConfigModel)).apply(this, arguments));
  }

  return LegendConfigModel;
}(_configModel2.default);

exports.default = LegendConfigModel;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Shape = __webpack_require__(0);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ScalableChart = __webpack_require__(9);

var _ScalableChart2 = _interopRequireDefault(_ScalableChart);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var LineConfigModel = function (_ConfigModel) {
  _inherits(LineConfigModel, _ConfigModel);

  function LineConfigModel() {
    _classCallCheck(this, LineConfigModel);

    return _possibleConstructorReturn(this, (LineConfigModel.__proto__ || Object.getPrototypeOf(LineConfigModel)).apply(this, arguments));
  }

  _createClass(LineConfigModel, [{
    key: 'calculateScales',

    /**
     * @param model
     * @param width
     * @param height
     */
    value: function calculateScales(model) {
      var config = this.attributes.x;
      _lodash2.default.set(this.attributes, 'x.scale', _ScalableChart2.default.getScale(model, config));
      config = this.attributes.y;
      _lodash2.default.set(this.attributes, 'y.scale', _ScalableChart2.default.getScale(model, config));
    }
  }, {
    key: 'getColor',
    value: function getColor() {
      return this.get('y.color');
    }
  }, {
    key: 'setColor',
    value: function setColor(accessorName, color) {
      this.set('y.color', color);
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(LineConfigModel.prototype.__proto__ || Object.getPrototypeOf(LineConfigModel.prototype), 'defaults', this), {
        isSharedContainer: true,
        curve: d3Shape.curveCatmullRom.alpha(0.5),
        y: {
          color: 'steelblue'
        }

        //scale - calculated from data domain and available plot area size
      });
    }
  }, {
    key: 'xScale',
    get: function get() {
      return this.get('x.scale');
    }
  }, {
    key: 'yScale',
    get: function get() {
      return this.get('y.scale');
    }
  }]);

  return LineConfigModel;
}(_configModel2.default);

exports.default = LineConfigModel;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _d3Geo = __webpack_require__(0);

var d3Geo = _interopRequireWildcard(_d3Geo);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MapConfigModel = function (_ConfigModel) {
  _inherits(MapConfigModel, _ConfigModel);

  function MapConfigModel() {
    _classCallCheck(this, MapConfigModel);

    return _possibleConstructorReturn(this, (MapConfigModel.__proto__ || Object.getPrototypeOf(MapConfigModel)).apply(this, arguments));
  }

  _createClass(MapConfigModel, [{
    key: 'project',
    value: function project(serie) {
      var lon = this.getValue(serie, { accessor: this.get('accessors.longitude') });
      var lat = this.getValue(serie, { accessor: this.get('accessors.latitude') });
      return this.attributes.projection([lon, lat]);
    }
  }, {
    key: 'defaults',
    get: function get() {
      return Object.assign(_get(MapConfigModel.prototype.__proto__ || Object.getPrototypeOf(MapConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {
        isSharedContainer: true,

        projection: d3Geo.geoMercator(),
        zoom: {
          // scale factor to show map at
          // 170 is the world view for mercator projection
          // If no factor is provided the whole map is fit into the container
          // factor: 170,
          step: 0.5,
          extent: [1, 8]
        },

        // grid of meridians and parallels for showing projection distortion
        graticule: false,

        accessors: {
          longitude: 'longitude',
          latitude: 'latitude'
        }
      });
    }
  }, {
    key: 'zoom',
    get: function get() {
      return this.attributes.zoom;
    }
  }]);

  return MapConfigModel;
}(_configModel2.default);

exports.default = MapConfigModel;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Zoom = __webpack_require__(0);

var d3Zoom = _interopRequireWildcard(_d3Zoom);

var _d3Geo = __webpack_require__(0);

var d3Geo = _interopRequireWildcard(_d3Geo);

var _topojson = __webpack_require__(223);

var topojson = _interopRequireWildcard(_topojson);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _MapConfigModel = __webpack_require__(65);

var _MapConfigModel2 = _interopRequireDefault(_MapConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

__webpack_require__(183);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MapView = function (_ChartView) {
  _inherits(MapView, _ChartView);

  function MapView() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MapView);

    // Flag indicating if zoom was applied. Zoom is applied on first render.
    var _this = _possibleConstructorReturn(this, (MapView.__proto__ || Object.getPrototypeOf(MapView)).call(this, p));

    _this._zoomApplied = false;
    return _this;
  }

  _createClass(MapView, [{
    key: 'render',


    /**
     * Draw a world map
     */
    value: function render() {
      _get(MapView.prototype.__proto__ || Object.getPrototypeOf(MapView.prototype), 'render', this).call(this);
      this._renderMap();
      this._renderData();
      this._ticking = false;
    }

    // TODO

  }, {
    key: '_renderGraticule',
    value: function _renderGraticule() {
      if (!this.config.get('graticule')) return;
      var graticule = d3Geo.geoGraticule();

      this.d3.append('path').datum(graticule).attr('class', 'graticule');
      // .attr('d', path)

      this.d3.append('defs').append('path').datum({ type: 'Sphere' }).attr('id', 'sphere');
      // .attr('d', path)

      this.d3.append('use').attr('class', 'stroke').attr('xlink:href', '#sphere');

      this.d3.append('use').attr('class', 'fill').attr('xlink:href', '#sphere');
    }

    // TODO temporary method to plot data before integrating with any chart component like scatter plot
    // Note, people often put these in lat then lng, but mathematically we want x then y which is `lng,lat`

  }, {
    key: '_renderData',
    value: function _renderData() {
      var _this2 = this;

      var data = this.model.data;
      // TODO links data extraction should take place in Data Provider
      var linksData = [];
      _lodash2.default.each(data, function (source) {
        linksData = linksData.concat(_lodash2.default.map(source.links, function (sourceLink) {
          var link = _lodash2.default.extend({ source: source, target: _lodash2.default.find(data, { id: sourceLink.id }) }, sourceLink);
          delete link.id;
          return link;
        }));
      });

      // Create a path for each source/target pair.
      var links = this.d3.selectAll(this.selectors.link).data(linksData);

      links.enter().append('path').attr('class', this.selectorClass('link')).merge(links).attr('d', function (link) {
        var source = _this2.config.project(link.source);
        var target = _this2.config.project(link.target);
        return _this2._arc(source, target);
      }).attr('stroke-width', function (link) {
        return link.width;
      });

      var nodes = this.d3.selectAll(this.selectors.node).data(data);

      nodes.enter().append('circle').attr('class', this.selectorClass('node')).attr('r', 8).merge(nodes).attr('cx', function (d) {
        return _this2.config.project(d)[0];
      }).attr('cy', function (d) {
        return _this2.config.project(d)[1];
      });
    }

    /**
    * Prepares link path data using a cubic bezier curve.
    */

  }, {
    key: '_arc',
    value: function _arc(source, target) {
      if (target && source) {
        var dx = Math.abs(target[0] - source[0]) / 3;
        var dsx = (target[0] - source[0]) / 3;
        var dtx = (source[0] - target[0]) / 3;
        var dsy = (target[1] - source[1]) / 3;
        var dty = (source[1] - target[1]) / 3;
        return 'M' + source[0] + ',' + source[1] + ' C' + (source[0] + dsx) + ',' + (source[1] + dsy - dx) + ' ' + (target[0] + dtx) + ',' + (target[1] + dty - dx) + ' ' + target[0] + ',' + target[1];
      } else {
        return 'M0,0,l0,0z';
      }
    }

    /**
     * Alternative arc definition using arc curve.
     * @param {Number} bend parameter for how much bend is applied to arcs
     * If no bend is supplied, then do the plain square root
     * A bend of 5 looks nice and subtle, but this will depend on the length of arcs
     * Higher the number the less bend
     */
    /*
    _arc (source, target, bend = 1) {
      if (target && source) {
        const dx = target[0] - source[0]
        const dy = target[1] - source[1]
        const dr = Math.sqrt(dx * dx + dy * dy) * bend
         // To avoid a whirlpool effect, make the bend direction consistent regardless of whether the source is left or right of the target
        const isSourceLeft = (target[0] - source[0]) < 0
        if (isSourceLeft) return `M${target[0]},${target[1]}A${dr},${dr} 0 0,1 ${source[0]},${source[1]}`
        return `M${source[0]},${source[1]}A${dr},${dr} 0 0,1 ${target[0]},${target[1]}`
      } else {
        return 'M0,0,l0,0z'
      }
    }
    */

  }, {
    key: '_renderMap',
    value: function _renderMap() {
      this.d3.attr('transform', 'translate(' + this.config.get('margin.left') + ', ' + this.config.get('margin.top') + ')');
      var map = this.config.get('map.data');
      var featureName = this.config.get('map.feature');
      var featureData = topojson.feature(map, map.objects[featureName]).features;
      var boundariesData = [topojson.mesh(map, map.objects[featureName], function (a, b) {
        return a !== b;
      })];
      var path = d3Geo.geoPath();
      var projection = this.config.get('projection');
      if (!this._zoomApplied) {
        // Rendering the map for the first time.
        var zoomFactor = this.config.get('zoom.factor');
        if (zoomFactor) {
          projection.scale(zoomFactor).translate([this.width / 2, this.height / 2]);
        } else {
          var featureToFit = topojson.feature(map, map.objects[this.config.get('map.fit')]);
          this._fit(path, projection, featureToFit, { width: this.innerWidth, height: this.innerHeight });
        }
        var zoom = d3Zoom.zoom().scaleExtent(this.config.get('zoom.extent')).on('zoom', this._onZoom.bind(this));
        this.svg.call(zoom);
        this._zoomApplied = true;
      }
      path.projection(projection);
      var mapSvg = this.d3.select('.map');
      if (mapSvg.empty()) {
        this.d3.append('g').attr('class', 'map');
        mapSvg = this.d3.select('.map');
      }
      var features = mapSvg.selectAll(this.selectors.feature).data(featureData);
      features.enter().append('path').attr('class', this.selectorClass('feature')).merge(features).attr('d', path);
      features.exit().remove();
      var boundaries = mapSvg.selectAll(this.selectors.boundary).data(boundariesData);
      boundaries.enter().append('path').attr('class', this.selectorClass('boundary')).merge(boundaries).attr('d', path);
      boundaries.exit().remove();
    }
  }, {
    key: '_fit',
    value: function _fit(path, projection, feature, rect) {
      var zoomExtent = this.config.get('zoom.extent');
      projection.scale(1).translate([0, 0]);
      path.projection(projection);
      var b = path.bounds(feature);
      var scale = 0.95 / Math.max((b[1][0] - b[0][0]) / rect.width, (b[1][1] - b[0][1]) / rect.height);
      var translate = [(rect.width - scale * (b[1][0] + b[0][0])) / 2, (rect.height - scale * (b[1][1] + b[0][1])) / 2];
      d3Zoom.zoomIdentity.k = scale;
      d3Zoom.zoomIdentity.x = translate[0];
      d3Zoom.zoomIdentity.y = translate[1];
      this.config.get('zoom').extent[0] = scale * zoomExtent[0];
      this.config.get('zoom').extent[1] = scale * zoomExtent[1];
      projection.scale(scale).translate(translate);
    }

    // Event handlers

  }, {
    key: '_onZoom',
    value: function _onZoom() {
      if (!this._ticking) {
        window.requestAnimationFrame(this._onZoomHandler.bind(this, d3Selection.event.transform));
        this._ticking = true;
      }
    }

    /**
    * Called by _onZoom when no rendering is taking place.
    */

  }, {
    key: '_onZoomHandler',
    value: function _onZoomHandler(transform) {
      this.config.get('projection').scale(transform.k).translate([transform.x, transform.y]);
      this.render();
    }
  }, {
    key: '_onMousemoveNode',
    value: function _onMousemoveNode(d, el) {
      var _d3Selection$mouse = d3Selection.mouse(this._container),
          _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
          left = _d3Selection$mouse2[0],
          top = _d3Selection$mouse2[1];

      _Actionman2.default.fire('ToggleVisibility', this.config.get('tooltip'), true, d, { left: left, top: top });
    }
  }, {
    key: '_onMouseoutNode',
    value: function _onMouseoutNode(d, el) {
      _Actionman2.default.fire('ToggleVisibility', this.config.get('tooltip'), false);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(MapView.prototype.__proto__ || Object.getPrototypeOf(MapView.prototype), 'selectors', this), {
        node: '.point',
        link: '.link',
        graticule: '.graticule',
        feature: '.feature',
        boundary: '.boundary'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return _lodash2.default.extend(_get(MapView.prototype.__proto__ || Object.getPrototypeOf(MapView.prototype), 'events', this), {
        'mousemove node': '_onMousemoveNode',
        'mouseout node': '_onMouseoutNode'
      });
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _MapConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }]);

  return MapView;
}(_chartView2.default);

exports.default = MapView;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PieConfigModel = function (_ConfigModel) {
  _inherits(PieConfigModel, _ConfigModel);

  function PieConfigModel() {
    _classCallCheck(this, PieConfigModel);

    return _possibleConstructorReturn(this, (PieConfigModel.__proto__ || Object.getPrototypeOf(PieConfigModel)).apply(this, arguments));
  }

  _createClass(PieConfigModel, [{
    key: 'set',
    value: function set() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _ColoredChart2.default.set.apply(_ColoredChart2.default, args);
      (_get2 = _get(PieConfigModel.prototype.__proto__ || Object.getPrototypeOf(PieConfigModel.prototype), 'set', this)).call.apply(_get2, [this].concat(args));
    }
    /**
     * retrieves color by label in accessor OR by getLabel function from the data
     */

  }, {
    key: 'getColor',
    value: function getColor(data) {
      var _this2 = this;

      var accessor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      accessor.color = function (datum) {
        return _this2.attributes.colorScale(accessor.label || _this2.getLabel(datum, _this2.attributes.serie));
      };
      return _ColoredChart2.default.getColor(data, accessor);
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(PieConfigModel.prototype.__proto__ || Object.getPrototypeOf(PieConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {
        // sets the position for shared svg container
        isPrimary: true
      });
    }
  }, {
    key: 'innerRadius',
    get: function get() {
      var chartType = this.get('type');
      var innerRadiusCoefficient = chartType === 'pie' ? 0 : 0.75;
      return this.get('radius') * innerRadiusCoefficient;
    }
  }]);

  return PieConfigModel;
}(_configModel2.default);

exports.default = PieConfigModel;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


/**
 * Axis name is required to start with 'x' or 'y' to designate it's mathematical position
 */
var RadialAxisConfigModel = function (_ConfigModel) {
  _inherits(RadialAxisConfigModel, _ConfigModel);

  function RadialAxisConfigModel() {
    _classCallCheck(this, RadialAxisConfigModel);

    return _possibleConstructorReturn(this, (RadialAxisConfigModel.__proto__ || Object.getPrototypeOf(RadialAxisConfigModel)).apply(this, arguments));
  }

  _createClass(RadialAxisConfigModel, [{
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(RadialAxisConfigModel.prototype.__proto__ || Object.getPrototypeOf(RadialAxisConfigModel.prototype), 'defaults', this), {
        isSharedContainer: true,

        // Default axis ticks if not specified per axis.
        ticks: 10,

        // Removes last angular tick if true.
        removeLastAngularTick: false,

        margin: {
          label: 10
        },

        // serie accessors to plot on this axis
        accessors: []
      });
    }
  }, {
    key: 'name',
    get: function get() {
      return this.attributes.name;
    }
  }, {
    key: 'baseName',
    get: function get() {
      return this.attributes.name.slice(0, 1);
    }
  }, {
    key: 'scale',
    get: function get() {
      return this.attributes.scale;
    }
  }, {
    key: 'formatter',
    get: function get() {
      return this.attributes.formatter;
    }
  }, {
    key: 'position',
    get: function get() {
      return this.attributes.position || this.constructor.defaultPosition(this.attributes.name);
    }
  }, {
    key: 'direction',
    get: function get() {
      return this.constructor.getDirection(this.attributes.position);
    }
  }, {
    key: 'isHorizontal',
    get: function get() {
      return this.direction === 'horizontal';
    }
  }, {
    key: 'location',
    get: function get() {
      return this.constructor.getLocation(this.attributes.position);
    }
    /**
     * @return {Number} relative position of the axis to the plot
     */

  }, {
    key: 'side',
    get: function get() {
      return this.location === 'start' ? -1 : 1;
    }
  }, {
    key: 'tickCoords',
    get: function get() {
      return this.attributes.tickCoords;
    }
    /**
     * calculate domain values for ticks based on preset tick coordinates from scale range
     */

  }, {
    key: 'tickValues',
    get: function get() {
      var _this2 = this;

      return _lodash2.default.map(this.attributes.tickCoords, function (coord) {
        return _this2.attributes.scale.invert(coord);
      });
    }
  }, {
    key: 'labels',
    get: function get() {
      if (this.attributes.label) return [this.attributes.label];
      return _lodash2.default.map(this.attributes.accessors, 'labelFormatter');
    }
  }], [{
    key: 'getDirection',

    /**
     * @return {String} Visual direction of Axis
     */
    value: function getDirection(position) {
      if (['left', 'right'].includes(position)) return 'vertical';
      if (['top', 'bottom'].includes(position)) return 'horizontal';
    }
    /**
     * @return {String} Visual location of axis relative to the plot
     */

  }, {
    key: 'getLocation',
    value: function getLocation(position) {
      if (['top', 'left'].includes(position)) return 'start';
      if (['bottom', 'right'].includes(position)) return 'end';
    }
  }, {
    key: 'defaultPosition',
    value: function defaultPosition(name) {
      if (name.startsWith('x')) return 'bottom';
      if (name.startsWith('y')) return 'left';
    }
  }]);

  return RadialAxisConfigModel;
}(_configModel2.default);

exports.default = RadialAxisConfigModel;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

var _ScalableChart = __webpack_require__(9);

var _ScalableChart2 = _interopRequireDefault(_ScalableChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var RadialBarConfigModel = function (_ConfigModel) {
  _inherits(RadialBarConfigModel, _ConfigModel);

  function RadialBarConfigModel() {
    _classCallCheck(this, RadialBarConfigModel);

    return _possibleConstructorReturn(this, (RadialBarConfigModel.__proto__ || Object.getPrototypeOf(RadialBarConfigModel)).apply(this, arguments));
  }

  _createClass(RadialBarConfigModel, [{
    key: 'calculateScales',


    /**
     * @param model
     * @param width
     * @param height
     */
    value: function calculateScales(model, width, height) {
      var config = _lodash2.default.extend({ range: [0, 2 * Math.PI] }, this.attributes.angular);
      // check if user provided a scale in config
      if (!_lodash2.default.has(this.attributes, 'angular.providedScale')) {
        _lodash2.default.set(this.attributes, 'angular.providedScale', _lodash2.default.has(this.attributes, 'angular.scale'));
      }
      if (!_lodash2.default.has(this.attributes, 'radial.providedScale')) {
        _lodash2.default.set(this.attributes, 'radial.providedScale', _lodash2.default.has(this.attributes, 'radial.scale'));
      }

      _lodash2.default.set(this.attributes, 'angular.calculatedDomain', _ScalableChart2.default.getCalculatedDomain(model, config));
      if (!_lodash2.default.has(this.attributes, 'angular.scale') || !this.attributes.angular.providedScale) {
        _lodash2.default.set(this.attributes, 'angular.scale', _ScalableChart2.default.getScale(model, config));
      }
      config = _lodash2.default.merge({
        accessor: _lodash2.default.map(this.radialAccessors, 'accessor')
      }, { range: [0, Math.min(width / 2, height / 2)] }, this.attributes.radial);
      // TODO handle multiple r accessors
      _lodash2.default.set(this.attributes, 'radial.calculatedDomain', _ScalableChart2.default.getCalculatedDomain(model, config));
      if (!_lodash2.default.has(this.attributes, 'radial.scale') || !this.attributes.radial.providedScale) {
        _lodash2.default.set(this.attributes, 'radial.scale', _ScalableChart2.default.getScale(model, config));
      }
    }

    /**
     * @param {Object} data may be used to assign color to individual bar based on its value
     */

  }, {
    key: 'getColor',
    value: function getColor(accessor, data) {
      var configured = _ColoredChart2.default.getColor(data, accessor);
      return configured || this.attributes.colorScale(accessor.accessor);
    }
  }, {
    key: 'setColor',
    value: function setColor(accessorName, color) {
      this.set('radial.color', color);
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(RadialBarConfigModel.prototype.__proto__ || Object.getPrototypeOf(RadialBarConfigModel.prototype), 'defaults', this), {
        isSharedContainer: true,
        radial: {
          color: 'steelblue'
        },
        // Padding between series in percents of bar width
        barPadding: 15

        //scale - calculated from data domain and available plot area size
      });
    }
  }, {
    key: 'angularScale',
    get: function get() {
      return this.get('angular.scale');
    }
  }, {
    key: 'radialScale',
    get: function get() {
      return this.get('radial.scale');
    }
  }, {
    key: 'radialAccessors',
    get: function get() {
      return _lodash2.default.isArray(this.get('radial')) ? this.get('radial') : [this.get('radial')];
    }
  }]);

  return RadialBarConfigModel;
}(_configModel2.default);

exports.default = RadialBarConfigModel;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Shape = __webpack_require__(0);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ScalableChart = __webpack_require__(9);

var _ScalableChart2 = _interopRequireDefault(_ScalableChart);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var RadialLineConfigModel = function (_ConfigModel) {
  _inherits(RadialLineConfigModel, _ConfigModel);

  function RadialLineConfigModel() {
    _classCallCheck(this, RadialLineConfigModel);

    return _possibleConstructorReturn(this, (RadialLineConfigModel.__proto__ || Object.getPrototypeOf(RadialLineConfigModel)).apply(this, arguments));
  }

  _createClass(RadialLineConfigModel, [{
    key: 'calculateScales',

    /**
     * @param model
     * @param width
     * @param height
     */
    value: function calculateScales(model, width, height) {
      var config = _lodash2.default.extend({ range: [0, 2 * Math.PI] }, this.attributes.angular);
      // check if user provided a scale in config
      if (!_lodash2.default.has(this.attributes, 'angular.providedScale')) {
        _lodash2.default.set(this.attributes, 'angular.providedScale', _lodash2.default.has(this.attributes, 'angular.scale'));
      }
      if (!_lodash2.default.has(this.attributes, 'radial.providedScale')) {
        _lodash2.default.set(this.attributes, 'radial.providedScale', _lodash2.default.has(this.attributes, 'radial.scale'));
      }

      _lodash2.default.set(this.attributes, 'angular.calculatedDomain', _ScalableChart2.default.getCalculatedDomain(model, config));
      if (!_lodash2.default.has(this.attributes, 'angular.scale') || !this.attributes.angular.providedScale) {
        _lodash2.default.set(this.attributes, 'angular.scale', _ScalableChart2.default.getScale(model, config));
      }
      config = _lodash2.default.extend({ range: [0, Math.min(width / 2, height / 2)] }, this.attributes.radial);
      _lodash2.default.set(this.attributes, 'radial.calculatedDomain', _ScalableChart2.default.getCalculatedDomain(model, config));
      if (!_lodash2.default.has(this.attributes, 'radial.scale') || !this.attributes.radial.providedScale) {
        _lodash2.default.set(this.attributes, 'radial.scale', _ScalableChart2.default.getScale(model, config));
      }
    }
  }, {
    key: 'getColor',
    value: function getColor() {
      return this.get('radial.color');
    }
  }, {
    key: 'setColor',
    value: function setColor(accessorName, color) {
      this.set('radial.color', color);
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(RadialLineConfigModel.prototype.__proto__ || Object.getPrototypeOf(RadialLineConfigModel.prototype), 'defaults', this), {
        isSharedContainer: true,
        curve: d3Shape.curveCatmullRom.alpha(0.5),
        radial: {
          color: 'steelblue'
        }

        //scale - calculated from data domain and available plot area size
      });
    }
  }, {
    key: 'angularScale',
    get: function get() {
      return this.get('angular.scale');
    }
  }, {
    key: 'radialScale',
    get: function get() {
      return this.get('radial.scale');
    }
  }]);

  return RadialLineConfigModel;
}(_configModel2.default);

exports.default = RadialLineConfigModel;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _d3Shape = __webpack_require__(0);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016 Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RadialDendrogramConfigModel = function (_ConfigModel) {
  _inherits(RadialDendrogramConfigModel, _ConfigModel);

  function RadialDendrogramConfigModel() {
    _classCallCheck(this, RadialDendrogramConfigModel);

    return _possibleConstructorReturn(this, (RadialDendrogramConfigModel.__proto__ || Object.getPrototypeOf(RadialDendrogramConfigModel)).apply(this, arguments));
  }

  _createClass(RadialDendrogramConfigModel, [{
    key: 'set',
    value: function set() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _ColoredChart2.default.set.apply(_ColoredChart2.default, args);
      (_get2 = _get(RadialDendrogramConfigModel.prototype.__proto__ || Object.getPrototypeOf(RadialDendrogramConfigModel.prototype), 'set', this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: 'getColor',
    value: function getColor(key) {
      var configured = _lodash2.default.find(this.attributes.levels, { level: key }).color;
      return configured || this.attributes.colorScale(key);
    }
  }, {
    key: 'setColor',
    value: function setColor(key, color) {
      var levels = this.get('levels');
      var level = _lodash2.default.find(levels, function (level) {
        return level.level === key;
      });
      if (!level) return;
      level.color = color;
      this.trigger('change', this.config);
    }
  }, {
    key: 'setKey',
    value: function setKey(key, isEnabled) {
      var levels = this.attributes.levels;
      var level = _lodash2.default.find(levels, function (level) {
        return level.level === key;
      });
      if (!level) return;
      var drillDownLevel = isEnabled ? level.level + 1 : level.level;
      if (drillDownLevel < 1) drillDownLevel = 1;
      this.set({ drillDownLevel: drillDownLevel });
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(RadialDendrogramConfigModel.prototype.__proto__ || Object.getPrototypeOf(RadialDendrogramConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {

        // The labels of the levels.
        levels: [],

        // The duration of transitions.
        ease: d3Ease.easeCubic,
        duration: 500,

        margin: {
          top: 50,
          bottom: 50,
          left: 50,
          right: 50
        },

        // The scale used to display throuput.
        valueScale: d3Scale.scaleLog(),
        // valueScale: d3Scale.scaleLinear(),

        // The separation in degrees between nodes with different parents
        parentSeparation: 1,
        parentSeparationThreshold: 0,
        parentSeparationDepthThreshold: 4,
        parentSeparationShrinkFactor: 0.05,

        // Arc width
        arcWidth: 10,

        // Show arc labels
        showArcLabels: true,
        drawLinks: false,
        drawRibbons: true,

        // Define how will the labels be rendered: 'along-arc', 'perpendicular'
        labelFlow: 'along-arc',

        // Estimated average letter width
        arcLabelLetterWidth: 5,

        // The X offset (in pixels) of the arc label counted from the beggining of the arc.
        arcLabelXOffset: 2,

        // The Y offset (in pixels) of the arc label counted from the outer edge of the arc (positive values offset the label into the center of the circle).
        arcLabelYOffset: 18,

        // Initial drill down level
        drillDownLevel: 1,

        // curve: d3Shape.curveBundle.beta(0.85)
        // curve: d3Shape.curveBundle.beta(0.95)
        // curve: d3Shape.curveBundle.beta(1)
        curve: d3Shape.curveCatmullRom.alpha(0.5)
        // curve: d3Shape.curveCatmullRom.alpha(0.75)
        // curve: d3Shape.curveCatmullRom.alpha(1)
        // curve: d3Shape.curveLinear
      });
    }
  }, {
    key: 'legendData',
    get: function get() {
      var _this2 = this;

      return _lodash2.default.map(this.attributes.levels, function (level) {
        return {
          key: level.level,
          label: level.label,
          color: _this2.getColor(level.level),
          disabled: level.level >= _this2.attributes.drillDownLevel
        };
      });
    }
  }, {
    key: 'legendConfig',
    get: function get() {
      return { colorScheme: this.attributes.colorScheme };
    }
  }]);

  return RadialDendrogramConfigModel;
}(_configModel2.default);

exports.default = RadialDendrogramConfigModel;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016 Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SankeyConfigModel = function (_ConfigModel) {
  _inherits(SankeyConfigModel, _ConfigModel);

  function SankeyConfigModel() {
    _classCallCheck(this, SankeyConfigModel);

    return _possibleConstructorReturn(this, (SankeyConfigModel.__proto__ || Object.getPrototypeOf(SankeyConfigModel)).apply(this, arguments));
  }

  _createClass(SankeyConfigModel, [{
    key: 'set',
    value: function set() {
      _get(SankeyConfigModel.prototype.__proto__ || Object.getPrototypeOf(SankeyConfigModel.prototype), 'set', this).call(this, _ColoredChart2.default.set.apply(_ColoredChart2.default, arguments));
    }
  }, {
    key: 'getColor',
    value: function getColor(data, accessor) {
      return accessor.color || this.attributes.colorScale(accessor.level);
    }
  }, {
    key: 'getAccessors',
    value: function getAccessors() {
      return _lodash2.default.map(this.attributes.levels, function (level) {
        return {
          accessor: level.level,
          level: level.level,
          label: level.label,
          color: level.color,
          enabled: true
        };
      });
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(SankeyConfigModel.prototype.__proto__ || Object.getPrototypeOf(SankeyConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {
        /*
        // by default will use common shared container under the parent
        isSharedContainer: true,
        */

        // Side margins.
        margin: {
          top: 5,
          bottom: 5,
          left: 50,
          right: 50
        },

        // The width of the nodes in sankey diagram.
        nodeWidth: 15,

        // The padding between nodes in sankey diagram.
        nodePadding: 2,

        // The hierarhy levels.
        levels: [],

        // The duration and ease of transitions.
        duration: 200,
        ease: d3Ease.easeCubic
      });
    }
  }]);

  return SankeyConfigModel;
}(_configModel2.default);

exports.default = SankeyConfigModel;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _Util = __webpack_require__(26);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

var _ScalableChart = __webpack_require__(9);

var _ScalableChart2 = _interopRequireDefault(_ScalableChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var ScatterPlotConfigModel = function (_ConfigModel) {
  _inherits(ScatterPlotConfigModel, _ConfigModel);

  function ScatterPlotConfigModel() {
    _classCallCheck(this, ScatterPlotConfigModel);

    return _possibleConstructorReturn(this, (ScatterPlotConfigModel.__proto__ || Object.getPrototypeOf(ScatterPlotConfigModel)).apply(this, arguments));
  }

  _createClass(ScatterPlotConfigModel, [{
    key: 'set',
    value: function set() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _ColoredChart2.default.set.apply(_ColoredChart2.default, args);
      (_get2 = _get(ScatterPlotConfigModel.prototype.__proto__ || Object.getPrototypeOf(ScatterPlotConfigModel.prototype), 'set', this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: 'getOuterWidth',
    value: function getOuterWidth(model, width) {
      return _ScalableChart2.default.outerWidth(width, model, this.get('x.accessor'), this.get('x.scale'));
    }
  }, {
    key: 'calculateScales',
    value: function calculateScales(model, width, height) {
      var config = this.attributes.x;
      _lodash2.default.set(this.attributes, 'x.scale', _ScalableChart2.default.getScale(model, config));

      config = this.attributes.y;
      _lodash2.default.set(this.attributes, 'y.scale', _ScalableChart2.default.getScale(model, config));

      if (this.get('size.accessor')) {
        config = this.attributes.size;
        _lodash2.default.set(this.attributes, 'size.scale', _ScalableChart2.default.getScale(model, config));
      }
    }
    /**
     * @param {Object} data may be used to assign color to individual bubbles based on its value
     */

  }, {
    key: 'getColor',
    value: function getColor(accessorName, data) {
      var configured = _ColoredChart2.default.getColor(data, this.get('y'));
      return configured || this.attributes.colorScale(accessorName);
    }
    // TODO

  }, {
    key: 'setColor',
    value: function setColor() {}
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(ScatterPlotConfigModel.prototype.__proto__ || Object.getPrototypeOf(ScatterPlotConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {
        isSharedContainer: true,
        shape: _Util.bubbleShapes.circleFill,
        size: {
          range: [1, 500]
        }
      });
    }
  }, {
    key: 'xScale',
    get: function get() {
      return this.get('x.scale');
    }
  }, {
    key: 'yScale',
    get: function get() {
      return this.get('y.scale');
    }
  }, {
    key: 'sizeScale',
    get: function get() {
      return this.get('size.scale');
    }
  }]);

  return ScatterPlotConfigModel;
}(_configModel2.default);

exports.default = ScatterPlotConfigModel;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

var _ScalableChart = __webpack_require__(9);

var _ScalableChart2 = _interopRequireDefault(_ScalableChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var StackedBarConfigModel = function (_ConfigModel) {
  _inherits(StackedBarConfigModel, _ConfigModel);

  function StackedBarConfigModel() {
    _classCallCheck(this, StackedBarConfigModel);

    return _possibleConstructorReturn(this, (StackedBarConfigModel.__proto__ || Object.getPrototypeOf(StackedBarConfigModel)).apply(this, arguments));
  }

  _createClass(StackedBarConfigModel, [{
    key: 'set',
    value: function set() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _ColoredChart2.default.set.apply(_ColoredChart2.default, args);
      (_get2 = _get(StackedBarConfigModel.prototype.__proto__ || Object.getPrototypeOf(StackedBarConfigModel.prototype), 'set', this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: 'getOuterWidth',
    value: function getOuterWidth(model, width) {
      return _ScalableChart2.default.outerWidth(width, model, this.get('x.accessor'), this.xScale);
    }
    /**
     * @param model
     * @param width
     * @param height
     */

  }, {
    key: 'calculateScales',
    value: function calculateScales(model) {
      var config = this.attributes.x;
      _lodash2.default.set(this.attributes, 'x.scale', _ScalableChart2.default.getScale(model, config));

      config = _lodash2.default.merge({}, this.attributes.y, {
        stacked: true,
        accessor: _lodash2.default.map(this.yAccessors, 'accessor')
      });
      _lodash2.default.set(this.attributes, 'y.scale', _ScalableChart2.default.getScale(model, config));
    }
    /**
     * @param {Object} data may be used to assign color to individual bar based on its value
     */

  }, {
    key: 'getColor',
    value: function getColor(accessorName, data) {
      var accessor = _lodash2.default.find(this.yAccessors, { accessor: accessorName });
      var configured = _ColoredChart2.default.getColor(data, accessor);
      return configured || this.attributes.colorScale(accessorName);
    }
    // TODO

  }, {
    key: 'setColor',
    value: function setColor() {}
    // TODO

  }, {
    key: 'setKey',
    value: function setKey() {}
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(StackedBarConfigModel.prototype.__proto__ || Object.getPrototypeOf(StackedBarConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {
        isSharedContainer: true,
        // Padding between series in percents of bar width
        barPadding: 15
      });
    }
  }, {
    key: 'yAccessors',
    get: function get() {
      return _lodash2.default.filter(this.attributes.y, function (a) {
        return !(a.enabled === false);
      });
    }
    /**
     * @return {Array} all y accessors
     */

  }, {
    key: 'accessors',
    get: function get() {
      return this.attributes.y;
    }
  }, {
    key: 'xScale',
    get: function get() {
      return this.get('x.scale');
    }
  }, {
    key: 'yScale',
    get: function get() {
      return this.get('y.scale');
    }
  }]);

  return StackedBarConfigModel;
}(_configModel2.default);

exports.default = StackedBarConfigModel;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
* Component to test rendering of vector contents as standalone
*/
var StandaloneModel = function (_ConfigModel) {
  _inherits(StandaloneModel, _ConfigModel);

  function StandaloneModel() {
    _classCallCheck(this, StandaloneModel);

    return _possibleConstructorReturn(this, (StandaloneModel.__proto__ || Object.getPrototypeOf(StandaloneModel)).apply(this, arguments));
  }

  _createClass(StandaloneModel, [{
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(StandaloneModel.prototype.__proto__ || Object.getPrototypeOf(StandaloneModel.prototype), 'defaults', this), {
        // by default will use shared container under the parent
        isSharedContainer: true,
        width: 300,
        height: 100
      });
    }
  }]);

  return StandaloneModel;
}(_configModel2.default);

exports.default = StandaloneModel;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TimelineConfigModel = function (_ConfigModel) {
  _inherits(TimelineConfigModel, _ConfigModel);

  function TimelineConfigModel() {
    _classCallCheck(this, TimelineConfigModel);

    return _possibleConstructorReturn(this, (TimelineConfigModel.__proto__ || Object.getPrototypeOf(TimelineConfigModel)).apply(this, arguments));
  }

  _createClass(TimelineConfigModel, [{
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(TimelineConfigModel.prototype.__proto__ || Object.getPrototypeOf(TimelineConfigModel.prototype), 'defaults', this), {
        isSharedContainer: true,

        // The component height
        height: 100,

        brushHandleHeight: 8,
        brushHandleScaleX: 1,
        brushHandleScaleY: 1.2,

        // Scale to transform values from percentage based selection to visual coordinates
        selectionScale: d3Scale.scaleLinear().domain([0, 100]),

        // The selection to use when first rendered [xMin%, xMax%].
        selection: []
      });
    }
  }, {
    key: 'selectionRange',
    get: function get() {
      this.attributes.selectionScale.range([this.attributes.xRange[0], this.attributes.xRange[1]]);
      if (_lodash2.default.isEmpty(this.attributes.selection)) return [];
      return [this.attributes.selectionScale(this.attributes.selection[0]), this.attributes.selectionScale(this.attributes.selection[1])];
    }
  }]);

  return TimelineConfigModel;
}(_configModel2.default);

exports.default = TimelineConfigModel;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TooltipConfigModel = function (_ConfigModel) {
  _inherits(TooltipConfigModel, _ConfigModel);

  function TooltipConfigModel() {
    _classCallCheck(this, TooltipConfigModel);

    return _possibleConstructorReturn(this, (TooltipConfigModel.__proto__ || Object.getPrototypeOf(TooltipConfigModel)).apply(this, arguments));
  }

  _createClass(TooltipConfigModel, [{
    key: 'defaults',
    get: function get() {
      var _this2 = this;

      return _lodash2.default.merge(_get(TooltipConfigModel.prototype.__proto__ || Object.getPrototypeOf(TooltipConfigModel.prototype), 'defaults', this), {
        // Which tooltip ids to accept. If empty accept all.
        acceptFilters: [],

        // place tooltip at the top of the cursor by default
        placement: 'vertical',

        sticky: false,
        // Default formatter to build tooltip content.
        formatter: function formatter(data) {
          var tooltipContent = {};
          var dataConfig = _this2.get('dataConfig');
          var titleConfig = _this2.get('title');

          if (titleConfig) {
            tooltipContent.title = _lodash2.default.isString(titleConfig) ? titleConfig : _this2.getFormattedValue(data, titleConfig);
          }

          // Todo move out color to be class based.
          tooltipContent.color = _this2.get('color');
          tooltipContent.backgroundColor = _this2.get('backgroundColor');

          tooltipContent.items = _lodash2.default.map(dataConfig, function (datumConfig) {
            return {
              label: _this2.getLabel(data, datumConfig),
              value: _this2.getFormattedValue(data, datumConfig)
            };
          });
          return tooltipContent;
        }
      });
    }
  }, {
    key: 'clip',
    get: function get() {
      return this.attributes.clip;
    }
    // TODO

  }, {
    key: 'stickyMargin',
    get: function get() {
      return { left: 0, right: 0 };
    }
  }, {
    key: 'position',
    get: function get() {
      return {
        left: this.attributes.left,
        top: this.attributes.top
      };
    }
  }, {
    key: 'height',
    get: function get() {
      return this.attributes.height;
    }
  }]);

  return TooltipConfigModel;
}(_configModel2.default);

exports.default = TooltipConfigModel;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _d3Geo = __webpack_require__(0);

var d3Geo = _interopRequireWildcard(_d3Geo);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016 Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TrafficMapConfigModel = function (_ConfigModel) {
  _inherits(TrafficMapConfigModel, _ConfigModel);

  function TrafficMapConfigModel() {
    _classCallCheck(this, TrafficMapConfigModel);

    return _possibleConstructorReturn(this, (TrafficMapConfigModel.__proto__ || Object.getPrototypeOf(TrafficMapConfigModel)).apply(this, arguments));
  }

  _createClass(TrafficMapConfigModel, [{
    key: 'project',
    value: function project(serie) {
      var lon = this.getValue(serie, { accessor: this.get('accessors.longitude') });
      var lat = this.getValue(serie, { accessor: this.get('accessors.latitude') });
      return this.attributes.projection([lon, lat]);
    }
  }, {
    key: 'set',
    value: function set() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _ColoredChart2.default.set.apply(_ColoredChart2.default, args);
      (_get2 = _get(TrafficMapConfigModel.prototype.__proto__ || Object.getPrototypeOf(TrafficMapConfigModel.prototype), 'set', this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: 'getColor',
    value: function getColor(key) {
      var trafficType = _lodash2.default.find(this.attributes.trafficTypes, { name: key });
      var configuredColor = null;
      if (trafficType && trafficType.color) {
        configuredColor = trafficType.color;
      }
      return configuredColor || this.attributes.colorScale(key);
    }
  }, {
    key: 'setColor',
    value: function setColor(key, color) {
      var levels = this.get('levels');
      var level = _lodash2.default.find(levels, function (level) {
        return level.level === key;
      });
      if (!level) return;
      level.color = color;
      this.trigger('change', this.config);
    }
  }, {
    key: 'setKey',
    value: function setKey(key, isEnabled) {
      var levels = this.attributes.levels;
      var level = _lodash2.default.find(levels, function (level) {
        return level.level === key;
      });
      if (!level) return;
      var drillDownLevel = isEnabled ? level.level + 1 : level.level;
      if (drillDownLevel < 1) drillDownLevel = 1;
      this.set({ drillDownLevel: drillDownLevel });
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(TrafficMapConfigModel.prototype.__proto__ || Object.getPrototypeOf(TrafficMapConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {
        isSharedContainer: true,

        // traficTypes - if left empty the colorScheme will be used.
        // { name: 'UDP-Flood', color: '#ff0000' }
        trafficTypes: [],

        colorScheme: d3Scale.schemeCategory10,

        projection: d3Geo.geoEquirectangular(),

        zoom: {
          // scale factor to show map at
          // 170 is the world view for mercator projection
          // If no factor is provided the whole map is fit into the container
          // factor: 170,
          step: 0.5,
          extent: [1, 8]
        },

        map: {
          data: null, // the map json
          feature: 'countries',
          locations: null, // an array of possible location ids, this array will be used to locate the longitude/latitude of the locations given in data.from / data.to
          fit: 'land'
        },

        accessors: {
          id: 'id',
          from: 'from',
          to: 'to',
          width: 'bytes',
          longitude: 'longitude',
          latitude: 'latitude'
        },

        margin: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },

        // The spacing between moving markers measured in pixels.
        markerSpacing: 15,

        // Speed of moving markers measured in pixels per step (step = 60 times per second).
        markerSpeed: 1,

        // Number of steps of the marker ending animation.
        markerEndAnimationSteps: 50,

        // How many times larger does the radius of the ending marker grow.
        markerEndRadiusFactor: 5
      });
    }
  }, {
    key: 'legendData',
    get: function get() {
      var _this2 = this;

      return _lodash2.default.map(this.attributes.levels, function (level) {
        return {
          key: level.level,
          label: level.label,
          color: _this2.getColor(level.level),
          disabled: level.level >= _this2.attributes.drillDownLevel
        };
      });
    }
  }, {
    key: 'legendConfig',
    get: function get() {
      return { colorScheme: this.attributes.colorScheme };
    }
  }]);

  return TrafficMapConfigModel;
}(_configModel2.default);

exports.default = TrafficMapConfigModel;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NavigationConfigModel = function (_ConfigModel) {
  _inherits(NavigationConfigModel, _ConfigModel);

  function NavigationConfigModel() {
    _classCallCheck(this, NavigationConfigModel);

    return _possibleConstructorReturn(this, (NavigationConfigModel.__proto__ || Object.getPrototypeOf(NavigationConfigModel)).apply(this, arguments));
  }

  _createClass(NavigationConfigModel, [{
    key: 'getSelectionRange',
    value: function getSelectionRange(xRange) {
      var scale = this.attributes.selectionScale;
      var selection = this.attributes.selection;
      scale.range(xRange);
      if (_lodash2.default.isEmpty(selection)) return [];
      return [scale(selection[0]), scale(selection[1])];
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(NavigationConfigModel.prototype.__proto__ || Object.getPrototypeOf(NavigationConfigModel.prototype), 'defaults', this), {
        // Scale to transform values from percentage based selection to visual coordinates
        selectionScale: d3Scale.scaleLinear().domain([0, 100]),

        // The selection to use when first rendered [xMin%, xMax%].
        selection: [],

        // How much to move the brush on browse action (1 minute).
        browseMoveBy: 60000,

        // Following is translated to internal yChart
        margin: {
          top: 8,
          left: 8,
          bottom: 8,
          right: 8,
          label: 16
        },
        plot: {
          x: {
            // This should not be changed
            axis: 'x'
          },
          y: {
            // This should not be changed
            axis: 'y'
          }
        },
        axes: {
          x: {},
          y: {}
        }
      });
    }
  }]);

  return NavigationConfigModel;
}(_configModel2.default);

exports.default = NavigationConfigModel;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

var _ScalableChart = __webpack_require__(9);

var _ScalableChart2 = _interopRequireDefault(_ScalableChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var CompositeRadialConfigModel = function (_ConfigModel) {
  _inherits(CompositeRadialConfigModel, _ConfigModel);

  function CompositeRadialConfigModel() {
    _classCallCheck(this, CompositeRadialConfigModel);

    return _possibleConstructorReturn(this, (CompositeRadialConfigModel.__proto__ || Object.getPrototypeOf(CompositeRadialConfigModel)).apply(this, arguments));
  }

  _createClass(CompositeRadialConfigModel, [{
    key: 'set',
    value: function set() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _ColoredChart2.default.set.apply(_ColoredChart2.default, args);
      (_get2 = _get(CompositeRadialConfigModel.prototype.__proto__ || Object.getPrototypeOf(CompositeRadialConfigModel.prototype), 'set', this)).call.apply(_get2, [this].concat(args));
    }

    /**
     * @param {Object} accessors element of array returned by this.children
     */

  }, {
    key: 'getComponentType',
    value: function getComponentType(accessor) {
      return accessor.chart || 'RadialLine';
    }
  }, {
    key: 'getAccessorKey',
    value: function getAccessorKey(accessor) {
      return accessor.angular + '-' + accessor.radial;
    }
  }, {
    key: 'getAngularAxisName',
    value: function getAngularAxisName(accessor) {
      return accessor.angularAxis || 'angularAxis';
    }
  }, {
    key: 'getRadialAxisName',
    value: function getRadialAxisName(accessor) {
      return accessor.radialAxis || 'radialAxis';
    }
  }, {
    key: 'getOtherAxisName',
    value: function getOtherAxisName(position, accessor) {
      if (position === 'radial') {
        return this.getAngularAxisName(accessor);
      } else {
        return this.getRadialAxisName(accessor);
      }
    }
  }, {
    key: 'getAxisAccessors',
    value: function getAxisAccessors(name) {
      var _this2 = this;

      return _lodash2.default.filter(this.accessors, function (accessor) {
        return _this2.getAngularAxisName(accessor) === name || _this2.getRadialAxisName(accessor) === name;
      });
    }
  }, {
    key: 'getAxisConfig',
    value: function getAxisConfig(name) {
      var _this3 = this;

      var axis = this.get('axes.' + name);
      var config = _lodash2.default.extend({
        margin: this.margin,
        height: this.attributes.height,
        width: this.attributes.width,
        accessors: this.getAxisAccessors(name)
      }, axis);
      config.otherAxisNames = (0, _lodash2.default)(_lodash2.default.map(config.accessors, function (a) {
        return _this3.getOtherAxisName(config.position, a);
      })).uniq().value();
      config.otherAxisScales = _lodash2.default.map(config.otherAxisNames, function (axisName) {
        return _this3.get('axes.' + axisName).scale;
      });
      return config;
    }

    /**
     * @param model
     * @param width
     * @param height
     */

  }, {
    key: 'calculateScales',
    value: function calculateScales(model, width, height) {
      var _this4 = this;

      var accessorsByAngularAxis = _lodash2.default.groupBy(this.activeAccessors, function (a) {
        return _this4.getAngularAxisName(a);
      });
      _lodash2.default.each(accessorsByAngularAxis, function (accessors, axisName) {
        var accessorNames = (0, _lodash2.default)(accessors).map('angular').uniq().value();
        var config = _lodash2.default.extend({
          domain: _this4.get('axes.' + axisName + '.calculatedDomain'),
          range: [0, 2 * Math.PI],
          accessor: accessorNames
        }, _this4.get('axes.' + axisName));
        _lodash2.default.set(_this4.attributes, 'axes.' + axisName + '.scale', _ScalableChart2.default.getScale(model, config));
      });
      var accessorsByRadialAxis = _lodash2.default.groupBy(this.activeAccessors, function (a) {
        return _this4.getRadialAxisName(a);
      });
      var availableR = Math.min(width / 2, height / 2);
      _lodash2.default.each(accessorsByRadialAxis, function (accessors, axisName) {
        var accessorNames = (0, _lodash2.default)(accessors).map('radial').uniq().value();
        var config = _lodash2.default.extend({
          domain: _this4.get('axes.' + axisName + '.calculatedDomain'),
          range: [0, availableR],
          accessor: accessorNames
        }, _this4.get('axes.' + axisName));
        // Handle ranges given in %
        var newRange = [config.range[0], config.range[1]];
        _lodash2.default.each(newRange, function (range, i) {
          if (_lodash2.default.endsWith(range, '%')) {
            var percent = parseInt(_lodash2.default.trim(range, ' %'));
            newRange[i] = percent / 100 * availableR;
          }
        });
        config.range = newRange;
        _lodash2.default.set(_this4.attributes, 'axes.' + axisName + '.scale', _ScalableChart2.default.getScale(model, config));
      });
    }
  }, {
    key: 'getColor',
    value: function getColor(accessor) {
      var configured = accessor.color;
      return configured || this.attributes.colorScale(accessor.accessor);
    }
  }, {
    key: 'setColor',
    value: function setColor(accessorName, color) {
      var _this5 = this;

      var accessor = _lodash2.default.find(this.accessors, function (a) {
        return _this5.getAccessorKey(a) === accessorName;
      });
      if (!accessor) return;
      accessor.color = color;
      this.trigger('change');
    }
  }, {
    key: 'setKey',
    value: function setKey(accessorName, isEnabled) {
      var _this6 = this;

      var accessor = _lodash2.default.find(this.accessors, function (a) {
        return _this6.getAccessorKey(a) === accessorName;
      });
      if (!accessor) return;
      accessor.disabled = !isEnabled;
      this.trigger('change');
    }
  }, {
    key: 'isMultiAccessor',
    value: function isMultiAccessor(type) {
      return ['Area', 'StackedBar', 'GroupedBar'].includes(type);
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(CompositeRadialConfigModel.prototype.__proto__ || Object.getPrototypeOf(CompositeRadialConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {
        margin: {
          top: 10,
          left: 40,
          bottom: 40,
          right: 15,
          label: 15
        },
        isPrimary: true,
        isSharedContainer: true,

        // default chart type to plot
        chart: 'RadialLine',
        accessors: [{
          angularAxis: 'angularAxis',
          radialAxis: 'radialAxis'
        }],
        ticks: {}
      });
    }

    /**
     * @return {Array} all enabled accessors
     */

  }, {
    key: 'activeAccessors',
    get: function get() {
      return _lodash2.default.filter(this.accessors, function (a) {
        return !a.disabled;
      });
    }

    /**
     * @return {Array} all y accessors
     */

  }, {
    key: 'accessors',
    get: function get() {
      return this.get('accessors');
    }
  }, {
    key: 'children',
    get: function get() {
      var _this7 = this;

      return _lodash2.default.map(this.activeAccessors, function (accessor) {
        var key = _this7.getAccessorKey(accessor);
        return { key: key, accessor: accessor };
      });
    }
  }, {
    key: 'margin',
    get: function get() {
      return _lodash2.default.cloneDeep(this.attributes.margin);
    }
    /**
     * @return axes with enabled accessors to plot
     */

  }, {
    key: 'activeAngularAxes',
    get: function get() {
      var _this8 = this;

      var angularAxisNames = (0, _lodash2.default)(this.activeAccessors).map(function (a) {
        return _this8.getAngularAxisName(a);
      }).uniq().value();
      return _lodash2.default.filter(this.attributes.axes, function (axis, name) {
        var includes = angularAxisNames.includes(name);
        if (includes) {
          axis.id = _this8.id + '-' + name;
          axis.name = name;
          axis.position = 'angular';
        }
        return includes;
      });
    }
  }, {
    key: 'activeRadialAxes',
    get: function get() {
      var _this9 = this;

      var radialAxisNames = (0, _lodash2.default)(this.activeAccessors).map(function (a) {
        return _this9.getRadialAxisName(a);
      }).uniq().value();
      return _lodash2.default.filter(this.attributes.axes, function (axis, name) {
        var includes = radialAxisNames.includes(name);
        if (includes) {
          axis.id = _this9.id + '-' + name;
          axis.name = name;
          axis.position = 'radial';
        }
        return includes;
      });
    }
  }]);

  return CompositeRadialConfigModel;
}(_configModel2.default);

exports.default = CompositeRadialConfigModel;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

var _ColoredChart = __webpack_require__(6);

var _ColoredChart2 = _interopRequireDefault(_ColoredChart);

var _ScalableChart = __webpack_require__(9);

var _ScalableChart2 = _interopRequireDefault(_ScalableChart);

var _AxisConfigModel = __webpack_require__(34);

var _AxisConfigModel2 = _interopRequireDefault(_AxisConfigModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var CompositeYConfigModel = function (_ConfigModel) {
  _inherits(CompositeYConfigModel, _ConfigModel);

  function CompositeYConfigModel() {
    _classCallCheck(this, CompositeYConfigModel);

    return _possibleConstructorReturn(this, (CompositeYConfigModel.__proto__ || Object.getPrototypeOf(CompositeYConfigModel)).apply(this, arguments));
  }

  _createClass(CompositeYConfigModel, [{
    key: 'set',
    value: function set() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _ColoredChart2.default.set.apply(_ColoredChart2.default, args);
      (_get2 = _get(CompositeYConfigModel.prototype.__proto__ || Object.getPrototypeOf(CompositeYConfigModel.prototype), 'set', this)).call.apply(_get2, [this].concat(args));
    }
    /**
     * @param {Object} accessors element of array returned by this.children
     */

  }, {
    key: 'getComponentType',
    value: function getComponentType() {
      var accessors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{}];

      _lodash2.default.isArray(accessors) || (accessors = [accessors]);
      return accessors[0].chart || 'Line';
    }
  }, {
    key: 'getAxisName',
    value: function getAxisName() {
      var accessors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{}];

      _lodash2.default.isArray(accessors) || (accessors = [accessors]);
      return accessors[0].axis || 'y';
    }
    /**
     * @param {Boolean} filterActive
     * @return {Array} accessors by axis name
     */

  }, {
    key: 'getAxisAccessors',
    value: function getAxisAccessors(name, filterActive) {
      var _this2 = this;

      if (name.startsWith('x')) return [this.get('plot.x.accessor')];
      return _lodash2.default.filter(this.get('plot.y'), function (accessor) {
        return _this2.getAxisName(accessor) === name && (!filterActive || !accessor.disabled);
      });
    }
  }, {
    key: 'getAxisConfig',
    value: function getAxisConfig(name) {
      var axis = this.get('axes.' + name);
      var direction = _AxisConfigModel2.default.getDirection(axis.position);
      var config = _lodash2.default.extend({
        margin: this.margin,
        height: this.attributes.height,
        width: this.attributes.width,
        accessors: this.getAxisAccessors(name, true),
        tickCoords: this.syncScales(direction, axis.scale, axis.ticks)
      }, axis);
      return config;
    }
    /**
     * @param model
     * @param width
     * @param height
     */

  }, {
    key: 'calculateScales',
    value: function calculateScales(model) {
      var _this3 = this;

      var config = _lodash2.default.extend({}, this.get('plot.x'), this.get('axes.x'));
      _lodash2.default.set(this.attributes, 'axes.x.scale', _ScalableChart2.default.getScale(model, config));

      var accessorsByAxis = _lodash2.default.groupBy(this.get('plot.y'), function (a) {
        return _this3.getAxisName(a);
      });
      _lodash2.default.each(accessorsByAxis, function (accessors, axisName) {
        var accessorNames = _lodash2.default.map(accessors, 'accessor');
        var config = _lodash2.default.extend({
          domain: _this3.get('axes.' + axisName + '.calculatedDomain'),
          accessor: accessorNames
        }, _this3.get('axes.' + axisName));
        _lodash2.default.set(_this3.attributes, 'axes.' + axisName + '.scale', _ScalableChart2.default.getScale(model, config));
      });
    }
  }, {
    key: 'getColor',
    value: function getColor(accessorName) {
      var configured = _lodash2.default.find(this.accessors, { accessor: accessorName }).color;
      return configured || this.attributes.colorScale(accessorName);
    }
  }, {
    key: 'setColor',
    value: function setColor(accessorName, color) {
      var accessor = _lodash2.default.find(this.accessors, { accessor: accessorName });
      if (!accessor) return;
      accessor.color = color;
      this.trigger('change');
    }
  }, {
    key: 'setKey',
    value: function setKey(accessorName, isEnabled) {
      var accessor = _lodash2.default.find(this.accessors, function (a) {
        return a.accessor === accessorName;
      });
      if (!accessor) return;
      accessor.disabled = !isEnabled;
      this.trigger('change');
    }
    /**
     * Changing anyone chart type from GroupedBar to StackedBar or vise versa will affect all bars for no bars overlap
     * @param accessorName
     * @param type
     */

  }, {
    key: 'setChartType',
    value: function setChartType(accessorName, type) {
      var _this4 = this;

      var barCharts = ['GroupedBar', 'StackedBar'];
      var accessor = _lodash2.default.find(this.accessors, { accessor: accessorName });
      if (!accessor) return;
      var toUpdate = [accessor];
      if (barCharts.includes(type)) {
        toUpdate.push.apply(toUpdate, _toConsumableArray(_lodash2.default.filter(this.accessors, function (a) {
          return barCharts.includes(a.chart) && _this4.getAxisName(a) === _this4.getAxisName(accessor) && a !== accessor;
        })));
      }

      // TODO should fire SelectChartType action for all extra accessors changed
      _lodash2.default.each(toUpdate, function (accessor) {
        accessor.chart = type;
      });
      this.trigger('change');
    }
    /**
     * Sync ticks of the scales in the same direction
     */

  }, {
    key: 'syncScales',
    value: function syncScales(direction, scale, ticksAmount) {
      var attributes = this.attributes;
      attributes.ticks || (attributes.ticks = {});
      if (attributes.ticks[direction]) return attributes.ticks[direction];else attributes.ticks[direction] = _lodash2.default.map(scale.ticks(ticksAmount), function (v) {
        return scale(v);
      });
    }
  }, {
    key: 'isMultiAccessor',
    value: function isMultiAccessor(type) {
      return ['Area', 'StackedBar', 'GroupedBar'].includes(type);
    }
  }, {
    key: 'defaults',
    get: function get() {
      return _lodash2.default.merge(_get(CompositeYConfigModel.prototype.__proto__ || Object.getPrototypeOf(CompositeYConfigModel.prototype), 'defaults', this), _ColoredChart2.default.defaults, {
        margin: {
          top: 8,
          left: 8,
          bottom: 8,
          right: 8,
          label: 16
        },
        isPrimary: true,
        isSharedContainer: true,

        // default chart type to plot
        chart: 'Line',
        plot: {
          x: {
            // Default x axis name
            axis: 'x'
          },
          y: {
            // Default y axis name.
            axis: 'y'
          }
        },
        ticks: {}
      });
    }
    /**
     * @return {Array} all enabled y accessors
     */

  }, {
    key: 'yAccessors',
    get: function get() {
      return _lodash2.default.filter(this.get('plot.y'), function (a) {
        return !a.disabled;
      });
    }
    /**
     * TODO update name to considering that this is only y accessors with no filter for disabled
     * @return {Array} all y accessors
     */

  }, {
    key: 'accessors',
    get: function get() {
      return this.get('plot.y');
    }
  }, {
    key: 'children',
    get: function get() {
      var _this5 = this;

      var accessorsByChart = _lodash2.default.groupBy(this.yAccessors, function (accessor) {
        var axis = _this5.getAxisName(accessor);
        return axis + '-' + (_this5.isMultiAccessor(accessor.chart) ? accessor.chart : accessor.accessor);
      });
      return _lodash2.default.map(accessorsByChart, function (accessors, key) {
        return { key: key, accessors: accessors };
      });
    }
  }, {
    key: 'xScale',
    get: function get() {
      return this.get('axes.' + this.get('plot.x.axis') + '.scale');
    }
    // TODO should this return all scales or just first?

  }, {
    key: 'yScales',
    get: function get() {
      return _lodash2.default.find(this.get('axes'), function (a) {
        return a.name.startsWith('y');
      }).scale;
    }
    /**
     * Value depends on what is axis label or how many accessors plus label for axis values
     */

  }, {
    key: 'margin',
    get: function get() {
      var _this6 = this;

      var margin = _lodash2.default.cloneDeep(this.attributes.margin);
      _lodash2.default.each(this.attributes.axes, function (config, name) {
        // TODO move to set method
        config.position = config.position || _AxisConfigModel2.default.defaultPosition(name);

        var labelCount = _this6.get('axes.' + name + '.label') ? 2 : _this6.getAxisAccessors(name, true).length + 1;
        margin[config.position] += margin.label * labelCount;
      });
      return margin;
    }
    /**
     * @return axes with enabled accessors to plot
     */

  }, {
    key: 'activeAxes',
    get: function get() {
      var _this7 = this;

      var plotYAxes = (0, _lodash2.default)(this.yAccessors).map(function (a) {
        return _this7.getAxisName(a);
      }).uniq().value();
      return _lodash2.default.filter(this.attributes.axes, function (axis, name) {
        // TODO move to set method
        axis.id = _this7.id + '-' + name;
        axis.name = name;
        return name.startsWith('x') || plotYAxes.includes(name);
      });
    }
  }, {
    key: 'update',
    get: function get() {
      return [this.id].concat(_toConsumableArray(this.attributes.update));
    }
  }]);

  return CompositeYConfigModel;
}(_configModel2.default);

exports.default = CompositeYConfigModel;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Array = __webpack_require__(0);

var d3Array = _interopRequireWildcard(_d3Array);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _CompositeYConfigModel = __webpack_require__(81);

var _CompositeYConfigModel2 = _interopRequireDefault(_CompositeYConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _CompositeChart = __webpack_require__(23);

var _CompositeChart2 = _interopRequireDefault(_CompositeChart);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _SelectColor = __webpack_require__(15);

var _SelectColor2 = _interopRequireDefault(_SelectColor);

var _SelectKey = __webpack_require__(16);

var _SelectKey2 = _interopRequireDefault(_SelectKey);

var _Zoom = __webpack_require__(17);

var _Zoom2 = _interopRequireDefault(_Zoom);

var _Cluster = __webpack_require__(36);

var _Cluster2 = _interopRequireDefault(_Cluster);

var _SelectChartType = __webpack_require__(164);

var _SelectChartType2 = _interopRequireDefault(_SelectChartType);

__webpack_require__(197);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Creates composited chart with X and Y axes and compatible components like: Line, Area, StackedBar, etc
 */
var CompositeYView = function (_ChartView) {
  _inherits(CompositeYView, _ChartView);

  _createClass(CompositeYView, null, [{
    key: 'Config',
    get: function get() {
      return _CompositeYConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { SelectColor: _SelectColor2.default, SelectKey: _SelectKey2.default, SelectChartType: _SelectChartType2.default, Zoom: _Zoom2.default, ClusterAction: _Cluster2.default };
    }
  }]);

  function CompositeYView() {
    var _ref;

    _classCallCheck(this, CompositeYView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = CompositeYView.__proto__ || Object.getPrototypeOf(CompositeYView)).call.apply(_ref, [this].concat(args)));

    _this._composite = new _CompositeChart2.default();
    return _this;
  }

  _createClass(CompositeYView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      _get(CompositeYView.prototype.__proto__ || Object.getPrototypeOf(CompositeYView.prototype), 'render', this).call(this);
      this._updateComponents();
      this.config.calculateScales(this.model);
      // reset axes ticks
      this.config.set('ticks', {}, { silent: true, unset: true });
      this._renderAxes();
      this._renderClip();

      // force composite scale for children components
      var components = this._composite.getByType((0, _lodash2.default)(this.config.yAccessors).map('chart').uniq().value());
      _lodash2.default.each(components, function (component) {
        var componentAxis = _this2.config.getAxisName(component.config.get('y'));
        // TODO even without silent this will not trigger config 'change' because of nested attribute
        component.config.set('x.scale', _this2.config.get('axes.x.scale'), { silent: true });
        component.config.set('y.scale', _this2.config.get('axes.' + componentAxis + '.scale'), { silent: true });
        if (_this2.config.get('bucket') && component.type === 'ScatterPlot') return;
        component.render();
      });
      this._cluster();
      this._showLegend();
      this._initCrosshair();
      this._toggleCrosshair();

      this._ticking = false;
    }
  }, {
    key: 'remove',
    value: function remove() {
      this._composite.remove();
      _get(CompositeYView.prototype.__proto__ || Object.getPrototypeOf(CompositeYView.prototype), 'remove', this).call(this);
    }
    /**
     * Works only with incremental values at x scale, as range is set as min / max values for x scale
     * There is no option to set zoomed range by exact position at x scale (start / end)
     */

  }, {
    key: 'zoom',
    value: function zoom(ranges) {
      var _this3 = this;

      var resetAll = !ranges;
      var accessorsByAxis = _lodash2.default.groupBy(this.config.yAccessors, 'axis');
      accessorsByAxis.x = [{ accessor: this.config.get('plot.x.accessor') }];

      _lodash2.default.each(accessorsByAxis, function (accessors, axisName) {
        // change domains only for specified accessors or
        // if no ranges specified - reset all
        if (!resetAll && _lodash2.default.isEmpty(_lodash2.default.filter(accessors, function (a) {
          return !ranges || ranges[a.accessor];
        }))) return;

        // combine ranges of different accessors on the same axis
        var range = d3Array.extent((0, _lodash2.default)(accessors).map(function (accessor) {
          return ranges ? ranges[accessor.accessor] : [];
        }).flatten().value());

        // Skip equal start-end ranges except they are "undefined"
        if (range[0] !== range[1] || _lodash2.default.isNil(range[0])) {
          _this3.config.set('axes.' + axisName + '.domain', range, { silent: true });
        }
      });

      this.render();
    }
    /**
     * React on "Cluster" action fired
     */

  }, {
    key: 'cluster',
    value: function cluster(overlapping) {
      this._overlapping = overlapping;
      var scatterPlots = this._composite.getByType('ScatterPlot');
      _lodash2.default.each(scatterPlots, function (component) {
        return component.cluster(overlapping);
      });
    }
  }, {
    key: '_renderClip',
    value: function _renderClip() {
      var clip = this.d3.select(this.selectors.clip);
      if (clip.empty()) {
        clip = this.d3.append(this.selectors.clip).attr('id', this.id + '-' + this.selectors.clip);
        clip.append('rect');
      }
      clip.select('rect').attr('width', this.innerWidth).attr('height', this.innerHeight);
    }
    /**
     * Render axes and calculate inner margins for charts
     */

  }, {
    key: '_renderAxes',
    value: function _renderAxes() {
      var _this4 = this;

      var elements = this.svg.selectAll(this.selectors.axis).data(this.config.activeAxes, function (d) {
        return d.name;
      });

      elements.enter().each(function (axis) {
        var component = _this4._composite.add({
          type: 'Axis',
          config: _this4.config.getAxisConfig(axis.name),
          container: _this4._container
        });
        component.el.__data__ = axis;
      });

      elements.each(function (axis) {
        var component = _this4._composite.get(axis.id);
        // if only a scale is changed Backbone doesn't trigger "change" event and no render will happen
        component.config.set(_this4.config.getAxisConfig(axis.name), { silent: true });
        component.render();
      });

      elements.exit().each(function (axis) {
        _this4._composite.remove(axis.id);
      });
    }
    /**
     * Child components are initialized on the first call
     * Individual component scales are calculated and stored in this.config
     * No rendering here
     */

  }, {
    key: '_updateComponents',
    value: function _updateComponents(p) {
      var _this5 = this;

      var config = {
        // all sub charts should not react on model change as some preparation for them is done here
        frozen: true,
        // TODO add axes space to the chart margins
        margin: this.config.margin,
        width: this.width,
        height: this.height,
        x: {
          accessor: this.config.get('plot.x.accessor'),
          domain: this.config.get('axes.x.domain'),
          scale: this.config.get('axes.x.scale')
        }
      };
      var children = this.svg.selectAll(this.selectors.node).data(this.config.children, function (d) {
        return d.key;
      });

      // reset calculated values from previous render
      _lodash2.default.each(this.config.activeAxes, function (axis) {
        _this5.config.set('axes.' + axis.name + '.calculatedDomain', undefined, { silent: true });
        _this5.config.set('axes.' + axis.name + '.range', undefined, { silent: true });
      });
      children.enter().merge(children).each(function (child) {
        return _this5._updateComponent(child, config);
      });

      children.exit().each(function (child) {
        _this5._composite.remove(_this5.id + '-' + child.key);
      });
    }
  }, {
    key: '_updateComponent',
    value: function _updateComponent(child, config) {
      var type = this.config.getComponentType(child.accessors);
      config.id = this.id + '-' + child.key;
      config.duration = this.config.duration;
      if (this.config.isMultiAccessor(type)) config.y = child.accessors;else {
        config.y = child.accessors[0];
        config.tooltip = child.accessors[0].tooltip;
      }
      if (type === 'ScatterPlot') config.size = child.accessors[0].size;

      var component = this._composite.get(this.id + '-' + child.key);
      if (component) component.config.set(config, { silent: true });else {
        component = this._composite.add({
          type: type,
          config: config,
          model: this.model,
          container: this._container
        });
        component.d3.classed(this.selectorClass('node'), true).attr('clip-path', 'url(#' + this.id + '-' + this.selectors.clip + ')');
        component.el.__data__ = { key: child.key };
      }

      component.calculateScales();
      var axisName = this.config.getAxisName(child.accessors);
      var yDomain = this.config.get('axes.' + axisName + '.calculatedDomain') || [];
      var xRange = this.config.get('axes.x.range') || [0, this.innerWidth];
      var yRange = this.config.get('axes.' + axisName + '.range') || [this.innerHeight, 0];
      yDomain = d3Array.extent(yDomain.concat(component.config.yScale.domain()));
      var componentXRange = component.config.xScale.range();
      var componentYRange = component.config.yScale.range();
      xRange = [Math.max(xRange[0], componentXRange[0]), Math.min(xRange[1], componentXRange[1])];
      yRange = [Math.min(yRange[0], componentYRange[0]), Math.max(yRange[1], componentYRange[1])];

      this.config.set('axes.' + axisName + '.calculatedDomain', yDomain, { silent: true });
      this.config.set('axes.x.range', xRange, { silent: true });
      this.config.set('axes.' + axisName + '.range', yRange, { silent: true });
    }
  }, {
    key: '_initCrosshair',
    value: function _initCrosshair() {
      var crosshairId = this.config.get('crosshair');
      if (!crosshairId) return;
      this.svg.delegate('mousemove', 'svg', this._onMousemove.bind(this));
    }
  }, {
    key: '_toggleCrosshair',
    value: function _toggleCrosshair(point) {
      var _this6 = this;

      var crosshairId = this.config.get('crosshair');
      if (!point || point[0] < 0 || point[0] > this.innerWidth || point[1] < 0 || point[1] > this.innerHeight) {
        _Actionman2.default.fire('ToggleVisibility', crosshairId, false);
        this._ticking = false;
        return;
      }
      var xScale = this.config.get('axes.x.scale');
      var mouseX = xScale.invert(point[0]);
      var xAccessor = this.config.get('plot.x.accessor');
      var serie = this.model.getNearest(xAccessor, mouseX);

      var config = {
        container: this._container,
        width: this.width,
        height: this.height,
        margin: this.config.margin,
        bubbles: true,
        lines: 'full'
      };

      var data = {
        hoverPoint: point,
        dataPoint: [],
        item: serie,
        labels: [],
        points: []
      };

      data.dataPoint[0] = xScale(_lodash2.default.get(serie, xAccessor));
      // TODO if scatterplot - calculate snapped y coord too
      data.dataPoint[1] = point[1];

      data.labels = _lodash2.default.map(this.config.activeAxes, function (axisConfig) {
        var axis = _this6._composite.get(_this6.id + '-' + axisConfig.name);
        var accessor = _this6.config.getAxisAccessors(axisConfig.name)[0];
        var value = _lodash2.default.get(serie, accessor);
        var formatter = axis.config.formatter;
        if (formatter) value = formatter(value);
        return {
          position: 'bottom',
          value: value
        };
      });
      // TODO enable not only for x axis
      data.labels = [data.labels[0]];

      _lodash2.default.each(this.config.children, function (child) {
        var component = _this6._composite.get(_this6.id + '-' + child.key);
        _lodash2.default.each(child.accessors, function (accessor) {
          var accessorName = accessor.accessor;
          data.points.push({
            id: accessorName,
            x: component.getScreenX(serie, accessorName),
            y: component.getScreenY(serie, accessorName),
            color: _this6.config.getColor(accessorName)
          });
        });
      });

      _Actionman2.default.fire('ToggleVisibility', crosshairId, true, data, config);
      this._ticking = false;
    }
  }, {
    key: '_showLegend',
    value: function _showLegend() {
      var _this7 = this;

      var legendId = this.config.get('legend');
      if (!legendId) return;

      var config = {
        colorScheme: this.config.get('colorScheme'),
        chartTypes: this.config.get('chartTypes')
      };
      var data = _lodash2.default.map(this.config.accessors, function (accessor) {
        return {
          key: accessor.accessor,
          disabled: accessor.disabled,
          label: _this7.config.getLabel(undefined, accessor),
          color: _this7.config.getColor(accessor.accessor),
          chartType: config.chartTypes ? accessor.chart : undefined,
          axis: accessor.axis,
          shape: accessor.shape
        };
      });
      _Actionman2.default.fire('ToggleVisibility', legendId, true, data, config);
    }
    /**
     * If bucket is specified for this component perform scatterplot data bundling for Bucket
     */

  }, {
    key: '_cluster',
    value: function _cluster() {
      var bucketId = this.config.get('bucket');
      if (!bucketId) return;
      var points = [];

      var scatterPlots = this._composite.getByType('ScatterPlot');
      _lodash2.default.each(scatterPlots, function (component) {
        // TODO performance optimization: cluster only visible points
        points.push.apply(points, _toConsumableArray(component.prepareData()));
      });

      var config = {
        clip: this.id + '-' + this.selectors.clip,
        margin: this.config.margin,
        update: this.config.update,
        xAccessor: this.config.get('plot.x.accessor')
        // TODO performance optimization: do not calculate cluster on Zoom action if start-end distance didn't change
      };_Actionman2.default.fire('ToggleVisibility', this.config.get('bucket'), true, points, config);
    }

    // Event handlers

  }, {
    key: '_onMousemove',
    value: function _onMousemove(d, el, e) {
      var point = d3Selection.mouse(this.el);
      if (!this._ticking) {
        window.requestAnimationFrame(this._toggleCrosshair.bind(this, point));
        this._ticking = true;
      }
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(CompositeYView.prototype.__proto__ || Object.getPrototypeOf(CompositeYView.prototype), 'selectors', this), {
        node: '.child',
        axis: '.axis',
        clip: 'clipPath'
      });
    }
  }]);

  return CompositeYView;
}(_chartView2.default);

exports.default = CompositeYView;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(19)) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3-interpolate'], factory) :
  (factory((global.d3 = global.d3 || {}),global.d3));
}(this, (function (exports,d3Interpolate) { 'use strict';

/**
 * List of params for each command type in a path `d` attribute
 */
var typeMap = {
  M: ['x', 'y'],
  L: ['x', 'y'],
  H: ['x'],
  V: ['y'],
  C: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
  S: ['x2', 'y2', 'x', 'y'],
  Q: ['x1', 'y1', 'x', 'y'],
  T: ['x', 'y'],
  A: ['rx', 'ry', 'xAxisRotation', 'largeArcFlag', 'sweepFlag', 'x', 'y']
};

/**
 * Convert to object representation of the command from a string
 *
 * @param {String} commandString Token string from the `d` attribute (e.g., L0,0)
 * @return {Object} An object representing this command.
 */
function commandObject(commandString) {
  // convert all spaces to commas
  commandString = commandString.trim().replace(/ /g, ',');

  var type = commandString[0];
  var args = commandString.substring(1).split(',');
  return typeMap[type.toUpperCase()].reduce(function (obj, param, i) {
    // parse X as float since we need it to do distance checks for extending points
    obj[param] = param === 'x' ? parseFloat(args[i]) : args[i];
    return obj;
  }, { type: type });
}

/**
 * Converts a command object to a string to be used in a `d` attribute
 * @param {Object} command A command object
 * @return {String} The string for the `d` attribute
 */
function commandToString(command) {
  var type = command.type;

  var params = typeMap[type.toUpperCase()];
  return '' + type + params.map(function (p) {
    return command[p];
  }).join(',');
}

/**
 * Converts command A to have the same type as command B.
 *
 * e.g., L0,5 -> C0,5,0,5,0,5
 *
 * Uses these rules:
 * x1 <- x
 * x2 <- x
 * y1 <- y
 * y2 <- y
 * rx <- 0
 * ry <- 0
 * xAxisRotation <- read from B
 * largeArcFlag <- read from B
 * sweepflag <- read from B
 *
 * @param {Object} aCommand Command object from path `d` attribute
 * @param {Object} bCommand Command object from path `d` attribute to match against
 * @return {Object} aCommand converted to type of bCommand
 */
function convertToSameType(aCommand, bCommand) {
  var conversionMap = {
    x1: 'x',
    y1: 'y',
    x2: 'x',
    y2: 'y'
  };

  var readFromBKeys = ['xAxisRotation', 'largeArcFlag', 'sweepFlag'];

  // convert (but ignore M types)
  if (aCommand.type !== bCommand.type && bCommand.type.toUpperCase() !== 'M') {
    (function () {
      var aConverted = {};
      Object.keys(bCommand).forEach(function (bKey) {
        var bValue = bCommand[bKey];
        // first read from the A command
        var aValue = aCommand[bKey];

        // if it is one of these values, read from B no matter what
        if (aValue === undefined) {
          if (readFromBKeys.includes(bKey)) {
            aValue = bValue;
          } else {
            // if it wasn't in the A command, see if an equivalent was
            if (aValue === undefined && conversionMap[bKey]) {
              aValue = aCommand[conversionMap[bKey]];
            }

            // if it doesn't have a converted value, use 0
            if (aValue === undefined) {
              aValue = 0;
            }
          }
        }

        aConverted[bKey] = aValue;
      });

      // update the type to match B
      aConverted.type = bCommand.type;
      aCommand = aConverted;
    })();
  }

  return aCommand;
}

/**
 * Extends an array of commands to the length of the second array
 * inserting points at the spot that is closest by X value. Ensures
 * all the points of commandsToExtend are in the extended array and that
 * only numPointsToExtend points are added.
 *
 * @param {Object[]} commandsToExtend The commands array to extend
 * @param {Object[]} referenceCommands The commands array to match
 * @return {Object[]} The extended commands1 array
 */
function extend(commandsToExtend, referenceCommands, numPointsToExtend) {
  // map each command in B to a command in A by counting how many times ideally
  // a command in A was in the initial path (see https://github.com/pbeshai/d3-interpolate-path/issues/8)
  var initialCommandIndex = void 0;
  if (commandsToExtend.length > 1 && commandsToExtend[0].type === 'M') {
    initialCommandIndex = 1;
  } else {
    initialCommandIndex = 0;
  }

  var counts = referenceCommands.reduce(function (counts, refCommand, i) {
    // skip first M
    if (i === 0 && refCommand.type === 'M') {
      counts[0] = 1;
      return counts;
    }

    var minDistance = Math.abs(commandsToExtend[initialCommandIndex].x - refCommand.x);
    var minCommand = initialCommandIndex;

    // find the closest point by X position in A
    for (var j = initialCommandIndex + 1; j < commandsToExtend.length; j++) {
      var distance = Math.abs(commandsToExtend[j].x - refCommand.x);
      if (distance < minDistance) {
        minDistance = distance;
        minCommand = j;
        // since we assume sorted by X, once we find a value farther, we can return the min.
      } else {
        break;
      }
    }

    counts[minCommand] = (counts[minCommand] || 0) + 1;
    return counts;
  }, {});

  // now extend the array adding in at the appropriate place as needed
  var extended = [];
  var numExtended = 0;
  for (var i = 0; i < commandsToExtend.length; i++) {
    // add in the initial point for this A command
    extended.push(commandsToExtend[i]);

    for (var j = 1; j < counts[i] && numExtended < numPointsToExtend; j++) {
      var commandToAdd = Object.assign({}, commandsToExtend[i]);
      // don't allow multiple Ms
      if (commandToAdd.type === 'M') {
        commandToAdd.type = 'L';
      } else {
        // try to set control points to x and y
        if (commandToAdd.x1 !== undefined) {
          commandToAdd.x1 = commandToAdd.x;
          commandToAdd.y1 = commandToAdd.y;
        }

        if (commandToAdd.x2 !== undefined) {
          commandToAdd.x2 = commandToAdd.x;
          commandToAdd.y2 = commandToAdd.y;
        }
      }
      extended.push(commandToAdd);
      numExtended += 1;
    }
  }

  return extended;
}

/**
 * Interpolate from A to B by extending A and B during interpolation to have
 * the same number of points. This allows for a smooth transition when they
 * have a different number of points.
 *
 * Ignores the `Z` character in paths unless both A and B end with it.
 *
 * @param {String} a The `d` attribute for a path
 * @param {String} b The `d` attribute for a path
 */
function interpolatePath(a, b) {
  // remove Z, remove spaces after letters as seen in IE
  var aNormalized = a == null ? '' : a.replace(/[Z]/gi, '').replace(/([MLCSTQAHV])\s*/gi, '$1');
  var bNormalized = b == null ? '' : b.replace(/[Z]/gi, '').replace(/([MLCSTQAHV])\s*/gi, '$1');
  var aPoints = aNormalized === '' ? [] : aNormalized.split(/(?=[MLCSTQAHV])/gi);
  var bPoints = bNormalized === '' ? [] : bNormalized.split(/(?=[MLCSTQAHV])/gi);

  // if both are empty, interpolation is always the empty string.
  if (!aPoints.length && !bPoints.length) {
    return function nullInterpolator() {
      return '';
    };
  }

  // if A is empty, treat it as if it used to contain just the first point
  // of B. This makes it so the line extends out of from that first point.
  if (!aPoints.length) {
    aPoints.push(bPoints[0]);

    // otherwise if B is empty, treat it as if it contains the first point
    // of A. This makes it so the line retracts into the first point.
  } else if (!bPoints.length) {
    bPoints.push(aPoints[0]);
  }

  // convert to command objects so we can match types
  var aCommands = aPoints.map(commandObject);
  var bCommands = bPoints.map(commandObject);

  // extend to match equal size
  var numPointsToExtend = Math.abs(bPoints.length - aPoints.length);

  if (numPointsToExtend !== 0) {
    // B has more points than A, so add points to A before interpolating
    if (bCommands.length > aCommands.length) {
      aCommands = extend(aCommands, bCommands, numPointsToExtend);

      // else if A has more points than B, add more points to B
    } else if (bCommands.length < aCommands.length) {
      bCommands = extend(bCommands, aCommands, numPointsToExtend);
    }
  }

  // commands have same length now.
  // convert A to the same type of B
  aCommands = aCommands.map(function (aCommand, i) {
    return convertToSameType(aCommand, bCommands[i]);
  });

  var aProcessed = aCommands.map(commandToString).join('');
  var bProcessed = bCommands.map(commandToString).join('');

  // if both A and B end with Z add it back in
  if ((a == null || a[a.length - 1] === 'Z') && (b == null || b[b.length - 1] === 'Z')) {
    aProcessed += 'Z';
    bProcessed += 'Z';
  }

  var stringInterpolator = d3Interpolate.interpolateString(aProcessed, bProcessed);

  return function pathInterpolator(t) {
    // at 1 return the final value without the extensions used during interpolation
    if (t === 1) {
      return b == null ? '' : b;
    }

    return stringInterpolator(t);
  };
}

exports.interpolatePath = interpolatePath;

Object.defineProperty(exports, '__esModule', { value: true });

})));

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_timer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_timer__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__src_timer__, "now")) __webpack_require__.d(__webpack_exports__, "now", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["now"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__src_timer__, "timer")) __webpack_require__.d(__webpack_exports__, "timer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["timer"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__src_timer__, "timerFlush")) __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["timerFlush"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_timeout__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_timeout__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return __WEBPACK_IMPORTED_MODULE_1__src_timeout___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_interval__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_interval__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return __WEBPACK_IMPORTED_MODULE_2__src_interval___default.a; });







/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(10);

var _exception = __webpack_require__(20);

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(211);

var _decorators = __webpack_require__(209);

var _logger = __webpack_require__(219);

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.5';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFDeEIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjUnO1xuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAnXG59O1xuXG5jb25zdCBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG4gIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nZ2VyLmxvZyxcblxuICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUsIHBhcnRpYWwpIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oYEF0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIiR7bmFtZX1cIiBhcyB1bmRlZmluZWRgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcbiAgfVxufTtcblxuZXhwb3J0IGxldCBsb2cgPSBsb2dnZXIubG9nO1xuXG5leHBvcnQge2NyZWF0ZUZyYW1lLCBsb2dnZXJ9O1xuIl19


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Refresh = __webpack_require__(131);

Object.defineProperty(exports, 'Refresh', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Refresh).default;
  }
});

var _SelectKey = __webpack_require__(16);

Object.defineProperty(exports, 'SelectKey', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SelectKey).default;
  }
});

var _SelectColor = __webpack_require__(15);

Object.defineProperty(exports, 'SelectColor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SelectColor).default;
  }
});

var _ToggleFreeze = __webpack_require__(132);

Object.defineProperty(exports, 'ToggleFreeze', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ToggleFreeze).default;
  }
});

var _ToggleVisibility = __webpack_require__(14);

Object.defineProperty(exports, 'ToggleVisibility', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ToggleVisibility).default;
  }
});

var _Browse = __webpack_require__(54);

Object.defineProperty(exports, 'Browse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Browse).default;
  }
});

var _Zoom = __webpack_require__(17);

Object.defineProperty(exports, 'Zoom', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Zoom).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CompositeChart = __webpack_require__(23);

Object.defineProperty(exports, 'CompositeChart', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CompositeChart).default;
  }
});

var _TitleView = __webpack_require__(37);

Object.defineProperty(exports, 'TitleView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TitleView).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (map) {
  var entries = [];
  for (var key in map) {
    entries.push({ key: key, value: map[key] });
  }return entries;
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (map) {
  var keys = [];
  for (var key in map) {
    keys.push(key);
  }return keys;
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var keys = [],
      _sortKeys = [],
      _sortValues,
      _rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (_sortValues != null) array.sort(_sortValues);
      return _rollup != null ? _rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = (0, _map2.default)(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function (values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function _entries(map, depth) {
    if (++depth > keys.length) return map;
    var array,
        sortKey = _sortKeys[depth - 1];
    if (_rollup != null && depth >= keys.length) array = map.entries();else array = [], map.each(function (v, k) {
      array.push({ key: k, values: _entries(v, depth) });
    });
    return sortKey != null ? array.sort(function (a, b) {
      return sortKey(a.key, b.key);
    }) : array;
  }

  return nest = {
    object: function object(array) {
      return apply(array, 0, createObject, setObject);
    },
    map: function map(array) {
      return apply(array, 0, createMap, setMap);
    },
    entries: function entries(array) {
      return _entries(apply(array, 0, createMap, setMap), 0);
    },
    key: function key(d) {
      keys.push(d);return nest;
    },
    sortKeys: function sortKeys(order) {
      _sortKeys[keys.length - 1] = order;return nest;
    },
    sortValues: function sortValues(order) {
      _sortValues = order;return nest;
    },
    rollup: function rollup(f) {
      _rollup = f;return nest;
    }
  };
};

var _map = __webpack_require__(27);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return (0, _map2.default)();
}

function setMap(map, key, value) {
  map.set(key, value);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(27);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Set() {}

var proto = _map2.default.prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function add(value) {
    value += "";
    this[_map.prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set();

  // Copy constructor.
  if (object instanceof Set) object.each(function (value) {
    set.add(value);
  });

  // Otherwise, assume it’s an array.
  else if (object) {
      var i = -1,
          n = object.length;
      if (f == null) while (++i < n) {
        set.add(object[i]);
      } else while (++i < n) {
        set.add(f(object[i], i, object));
      }
    }

  return set;
}

exports.default = set;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (map) {
  var values = [];
  for (var key in map) {
    values.push(map[key]);
  }return values;
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cubehelix;
exports.Cubehelix = Cubehelix;

var _define = __webpack_require__(29);

var _define2 = _interopRequireDefault(_define);

var _color = __webpack_require__(28);

var _math = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
      // NaN if l=0 or l=1
  h = s ? Math.atan2(k, bl) * _math.rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define2.default)(Cubehelix, cubehelix, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    k = k == null ? _color.brighter : Math.pow(_color.brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _color.darker : Math.pow(_color.darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math.deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color.Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
  }
}));

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lab;
exports.Lab = Lab;
exports.hcl = hcl;
exports.Hcl = Hcl;

var _define = __webpack_require__(29);

var _define2 = _interopRequireDefault(_define);

var _color = __webpack_require__(28);

var _math = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Kn = 18,
    Xn = 0.950470,
    // D65 standard referent
Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * _math.deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

(0, _define2.default)(Lab, lab, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function darker(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function rgb() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new _color.Rgb(xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
    xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z), xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z), this.opacity);
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * _math.rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define2.default)(Hcl, hcl, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function darker(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function rgb() {
    return labConvert(this).rgb();
  }
}));

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var noop = { value: function value() {} };

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name: name };
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function on(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) {
        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      }return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);else if (callback == null) for (t in _) {
        _[t] = set(_[t], typename.name, null);
      }
    }

    return this;
  },
  copy: function copy() {
    var copy = {},
        _ = this._;
    for (var t in _) {
      copy[t] = _[t].slice();
    }return new Dispatch(copy);
  },
  call: function call(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
      args[i] = arguments[i + 2];
    }if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  },
  apply: function apply(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name: name, value: callback });
  return type;
}

exports.default = dispatch;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubehelixLong = undefined;

var _d3Color = __webpack_require__(13);

var _color = __webpack_require__(18);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cubehelix(hue) {
  return function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = (0, _d3Color.cubehelix)(start)).h, (end = (0, _d3Color.cubehelix)(end)).h),
          s = (0, _color2.default)(start.s, end.s),
          l = (0, _color2.default)(start.l, end.l),
          opacity = (0, _color2.default)(start.opacity, end.opacity);
      return function (t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  }(1);
}

exports.default = cubehelix(_color.hue);
var cubehelixLong = exports.cubehelixLong = cubehelix(_color2.default);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hclLong = undefined;

var _d3Color = __webpack_require__(13);

var _color = __webpack_require__(18);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hcl(hue) {
  return function (start, end) {
    var h = hue((start = (0, _d3Color.hcl)(start)).h, (end = (0, _d3Color.hcl)(end)).h),
        c = (0, _color2.default)(start.c, end.c),
        l = (0, _color2.default)(start.l, end.l),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}

exports.default = hcl(_color.hue);
var hclLong = exports.hclLong = hcl(_color2.default);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hslLong = undefined;

var _d3Color = __webpack_require__(13);

var _color = __webpack_require__(18);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hsl(hue) {
  return function (start, end) {
    var h = hue((start = (0, _d3Color.hsl)(start)).h, (end = (0, _d3Color.hsl)(end)).h),
        s = (0, _color2.default)(start.s, end.s),
        l = (0, _color2.default)(start.l, end.l),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}

exports.default = hsl(_color.hue);
var hslLong = exports.hslLong = hsl(_color2.default);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lab;

var _d3Color = __webpack_require__(13);

var _color = __webpack_require__(18);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lab(start, end) {
  var l = (0, _color2.default)((start = (0, _d3Color.lab)(start)).l, (end = (0, _d3Color.lab)(end)).l),
      a = (0, _color2.default)(start.a, end.a),
      b = (0, _color2.default)(start.b, end.b),
      opacity = (0, _color2.default)(start.opacity, end.opacity);
  return function (t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) {
    samples[i] = interpolator(i / (n - 1));
  }return samples;
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return a = +a, b -= a, function (t) {
    return Math.round(a + b * t);
  };
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
};

var degrees = 180 / Math.PI;

var identity = exports.identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolateTransformSvg = exports.interpolateTransformCss = undefined;

var _number = __webpack_require__(21);

var _number2 = _interopRequireDefault(_number);

var _parse = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: (0, _number2.default)(xa, xb) }, { i: i - 2, x: (0, _number2.default)(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0, _number2.default)(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0, _number2.default)(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: (0, _number2.default)(xa, xb) }, { i: i - 2, x: (0, _number2.default)(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function (a, b) {
    var s = [],
        // string constants and placeholders
    q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function (t) {
      var i = -1,
          n = q.length,
          o;
      while (++i < n) {
        s[(o = q[i]).i] = o.x(t);
      }return s.join("");
    };
  };
}

var interpolateTransformCss = exports.interpolateTransformCss = interpolateTransform(_parse.parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = exports.interpolateTransformSvg = interpolateTransform(_parse.parseSvg, ", ", ")", ")");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCss = parseCss;
exports.parseSvg = parseSvg;

var _decompose = __webpack_require__(104);

var _decompose2 = _interopRequireDefault(_decompose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssNode, cssRoot, cssView, svgNode;

function parseCss(value) {
  if (value === "none") return _decompose.identity;
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return (0, _decompose2.default)(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose.identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose.identity;
  value = value.matrix;
  return (0, _decompose2.default)(value.a, value.b, value.c, value.d, value.e, value.f);
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (p0, p1) {
  var ux0 = p0[0],
      uy0 = p0[1],
      w0 = p0[2],
      ux1 = p1[0],
      uy1 = p1[1],
      w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function i(t) {
      return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
    };
  }

  // General case.
  else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function i(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
      };
    }

  i.duration = S * 1000;

  return i;
};

var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var sankey = {},
      nodeWidth = 24,
      nodePadding = 8,
      size = [1, 1],
      nodes = [],
      links = [];

  sankey.nodeWidth = function (_) {
    if (!arguments.length) return nodeWidth;
    nodeWidth = +_;
    return sankey;
  };

  sankey.nodePadding = function (_) {
    if (!arguments.length) return nodePadding;
    nodePadding = +_;
    return sankey;
  };

  sankey.nodes = function (_) {
    if (!arguments.length) return nodes;
    nodes = _;
    return sankey;
  };

  sankey.links = function (_) {
    if (!arguments.length) return links;
    links = _;
    return sankey;
  };

  sankey.size = function (_) {
    if (!arguments.length) return size;
    size = _;
    return sankey;
  };

  sankey.layout = function (iterations) {
    computeNodeLinks();
    computeNodeValues();
    computeNodeBreadths();
    computeNodeDepths(iterations);
    computeLinkDepths();
    return sankey;
  };

  sankey.relayout = function () {
    computeLinkDepths();
    return sankey;
  };

  sankey.link = function () {
    var curvature = .5;

    function link(d) {
      var x0 = d.source.x + d.source.dx,
          x1 = d.target.x,
          xi = (0, _d3Interpolate.interpolateNumber)(x0, x1),
          x2 = xi(curvature),
          x3 = xi(1 - curvature),
          y0 = d.source.y + d.sy + d.dy / 2,
          y1 = d.target.y + d.ty + d.dy / 2;
      return "M" + x0 + "," + y0 + "C" + x2 + "," + y0 + " " + x3 + "," + y1 + " " + x1 + "," + y1;
    }

    link.curvature = function (_) {
      if (!arguments.length) return curvature;
      curvature = +_;
      return link;
    };

    return link;
  };

  // Populate the sourceLinks and targetLinks for each node.
  // Also, if the source and target are not objects, assume they are indices.
  function computeNodeLinks() {
    nodes.forEach(function (node) {
      node.sourceLinks = [];
      node.targetLinks = [];
    });
    links.forEach(function (link) {
      var source = link.source,
          target = link.target;
      if (typeof source === "number") source = link.source = nodes[link.source];
      if (typeof target === "number") target = link.target = nodes[link.target];
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    });
  }

  // Compute the value (size) of each node by summing the associated links.
  function computeNodeValues() {
    nodes.forEach(function (node) {
      node.value = Math.max((0, _d3Array.sum)(node.sourceLinks, value), (0, _d3Array.sum)(node.targetLinks, value));
    });
  }

  // Iteratively assign the breadth (x-position) for each node.
  // Nodes are assigned the maximum breadth of incoming neighbors plus one;
  // nodes with no incoming links are assigned breadth zero, while
  // nodes with no outgoing links are assigned the maximum breadth.
  function computeNodeBreadths() {
    var remainingNodes = nodes,
        nextNodes,
        x = 0;

    while (remainingNodes.length) {
      nextNodes = [];
      remainingNodes.forEach(function (node) {
        node.x = x;
        node.dx = nodeWidth;
        node.sourceLinks.forEach(function (link) {
          if (nextNodes.indexOf(link.target) < 0) {
            nextNodes.push(link.target);
          }
        });
      });
      remainingNodes = nextNodes;
      ++x;
    }

    //
    moveSinksRight(x);
    scaleNodeBreadths((size[0] - nodeWidth) / (x - 1));
  }

  // function moveSourcesRight() {
  //   nodes.forEach(function(node) {
  //     if (!node.targetLinks.length) {
  //       node.x = min(node.sourceLinks, function(d) { return d.target.x; }) - 1;
  //     }
  //   });
  // }

  function moveSinksRight(x) {
    nodes.forEach(function (node) {
      if (!node.sourceLinks.length) {
        node.x = x - 1;
      }
    });
  }

  function scaleNodeBreadths(kx) {
    nodes.forEach(function (node) {
      node.x *= kx;
    });
  }

  function computeNodeDepths(iterations) {
    var nodesByBreadth = (0, _d3Collection.nest)().key(function (d) {
      return d.x;
    }).sortKeys(_d3Array.ascending).entries(nodes).map(function (d) {
      return d.values;
    });

    //
    initializeNodeDepth();
    resolveCollisions();
    for (var alpha = 1; iterations > 0; --iterations) {
      relaxRightToLeft(alpha *= .99);
      resolveCollisions();
      relaxLeftToRight(alpha);
      resolveCollisions();
    }

    function initializeNodeDepth() {
      var ky = (0, _d3Array.min)(nodesByBreadth, function (nodes) {
        return (size[1] - (nodes.length - 1) * nodePadding) / (0, _d3Array.sum)(nodes, value);
      });

      nodesByBreadth.forEach(function (nodes) {
        nodes.forEach(function (node, i) {
          node.y = i;
          node.dy = node.value * ky;
        });
      });

      links.forEach(function (link) {
        link.dy = link.value * ky;
      });
    }

    function relaxLeftToRight(alpha) {
      nodesByBreadth.forEach(function (nodes) {
        nodes.forEach(function (node) {
          if (node.targetLinks.length) {
            var y = (0, _d3Array.sum)(node.targetLinks, weightedSource) / (0, _d3Array.sum)(node.targetLinks, value);
            node.y += (y - center(node)) * alpha;
          }
        });
      });

      function weightedSource(link) {
        return center(link.source) * link.value;
      }
    }

    function relaxRightToLeft(alpha) {
      nodesByBreadth.slice().reverse().forEach(function (nodes) {
        nodes.forEach(function (node) {
          if (node.sourceLinks.length) {
            var y = (0, _d3Array.sum)(node.sourceLinks, weightedTarget) / (0, _d3Array.sum)(node.sourceLinks, value);
            node.y += (y - center(node)) * alpha;
          }
        });
      });

      function weightedTarget(link) {
        return center(link.target) * link.value;
      }
    }

    function resolveCollisions() {
      nodesByBreadth.forEach(function (nodes) {
        var node,
            dy,
            y0 = 0,
            n = nodes.length,
            i;

        // Push any overlapping nodes down.
        nodes.sort(ascendingDepth);
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          dy = y0 - node.y;
          if (dy > 0) node.y += dy;
          y0 = node.y + node.dy + nodePadding;
        }

        // If the bottommost node goes outside the bounds, push it back up.
        dy = y0 - nodePadding - size[1];
        if (dy > 0) {
          y0 = node.y -= dy;

          // Push any overlapping nodes back up.
          for (i = n - 2; i >= 0; --i) {
            node = nodes[i];
            dy = node.y + node.dy + nodePadding - y0;
            if (dy > 0) node.y -= dy;
            y0 = node.y;
          }
        }
      });
    }

    function ascendingDepth(a, b) {
      return a.y - b.y;
    }
  }

  function computeLinkDepths() {
    nodes.forEach(function (node) {
      node.sourceLinks.sort(ascendingTargetDepth);
      node.targetLinks.sort(ascendingSourceDepth);
    });
    nodes.forEach(function (node) {
      var sy = 0,
          ty = 0;
      node.sourceLinks.forEach(function (link) {
        link.sy = sy;
        sy += link.dy;
      });
      node.targetLinks.forEach(function (link) {
        link.ty = ty;
        ty += link.dy;
      });
    });

    function ascendingSourceDepth(a, b) {
      return a.source.y - b.source.y;
    }

    function ascendingTargetDepth(a, b) {
      return a.target.y - b.target.y;
    }
  }

  function center(node) {
    return node.y + node.dy / 2;
  }

  function value(link) {
    return link.value;
  }

  return sankey;
};

var _d3Array = __webpack_require__(0);

var _d3Collection = __webpack_require__(168);

var _d3Interpolate = __webpack_require__(19);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback, delay, time) {
  var t = new _timer.Timer(),
      total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? (0, _timer.now)() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
};

var _timer = __webpack_require__(32);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback, delay, time) {
  var t = new _timer.Timer();
  delay = delay == null ? 0 : +delay;
  t.restart(function (elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
};

var _timer = __webpack_require__(32);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _schedule.SCHEDULED && schedule.name === name) {
        return new _index.Transition([[node]], root, name, +i);
      }
    }
  }

  return null;
};

var _index = __webpack_require__(12);

var _schedule = __webpack_require__(8);

var root = [null];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d3Selection = __webpack_require__(0);

var _interrupt = __webpack_require__(113);

var _interrupt2 = _interopRequireDefault(_interrupt);

var _transition = __webpack_require__(114);

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_d3Selection.selection.prototype.interrupt = _interrupt2.default;
_d3Selection.selection.prototype.transition = _transition2.default;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  return this.each(function () {
    (0, _interrupt2.default)(this, name);
  });
};

var _interrupt = __webpack_require__(52);

var _interrupt2 = _interopRequireDefault(_interrupt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var id, timing;

  if (name instanceof _index.Transition) {
    id = name._id, name = name._name;
  } else {
    id = (0, _index.newId)(), (timing = defaultTiming).time = (0, _d3Timer.now)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0, _schedule2.default)(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _index.Transition(groups, this._parents, name, id);
};

var _index = __webpack_require__(12);

var _schedule = __webpack_require__(8);

var _schedule2 = _interopRequireDefault(_schedule);

var _d3Ease = __webpack_require__(0);

var _d3Timer = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: _d3Ease.easeCubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = (0, _d3Timer.now)(), defaultTiming;
    }
  }
  return timing;
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var fullname = (0, _d3Selection.namespace)(name),
      i = fullname === "transform" ? _d3Interpolate.interpolateTransformSvg : _interpolate2.default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, _tween.tweenValue)(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value + ""));
};

var _d3Interpolate = __webpack_require__(19);

var _d3Selection = __webpack_require__(0);

var _tween = __webpack_require__(22);

var _interpolate = __webpack_require__(53);

var _interpolate2 = _interopRequireDefault(_interpolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var value00, interpolate0;
  return function () {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var value00, interpolate0;
  return function () {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var value00, value10, interpolate0;
  return function () {
    var value0,
        value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var value00, value10, interpolate0;
  return function () {
    var value0,
        value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = (0, _d3Selection.namespace)(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
};

var _d3Selection = __webpack_require__(0);

function attrTweenNS(fullname, value) {
  function tween() {
    var node = this,
        i = value.apply(node, arguments);
    return i && function (t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this,
        i = value.apply(node, arguments);
    return i && function (t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, _schedule.get)(this.node(), id).delay;
};

var _schedule = __webpack_require__(8);

function delayFunction(id, value) {
  return function () {
    (0, _schedule.init)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function () {
    (0, _schedule.init)(this, id).delay = value;
  };
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, _schedule.get)(this.node(), id).duration;
};

var _schedule = __webpack_require__(8);

function durationFunction(id, value) {
  return function () {
    (0, _schedule.set)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function () {
    (0, _schedule.set)(this, id).duration = value;
  };
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each(easeConstant(id, value)) : (0, _schedule.get)(this.node(), id).ease;
};

var _schedule = __webpack_require__(8);

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error();
  return function () {
    (0, _schedule.set)(this, id).ease = value;
  };
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (match) {
  if (typeof match !== "function") match = (0, _d3Selection.matcher)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index.Transition(subgroups, this._parents, this._name, this._id);
};

var _d3Selection = __webpack_require__(0);

var _index = __webpack_require__(12);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (transition) {
  if (transition._id !== this._id) throw new Error();

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index.Transition(merges, this._parents, this._name, this._id);
};

var _index = __webpack_require__(12);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, listener) {
  var id = this._id;

  return arguments.length < 2 ? (0, _schedule.get)(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
};

var _schedule = __webpack_require__(8);

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function (t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0,
      on1,
      sit = start(name) ? _schedule.init : _schedule.set;
  return function () {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.on("end.remove", removeFunction(this._id));
};

function removeFunction(id) {
  return function () {
    var parent = this.parentNode;
    for (var i in this.__transition) {
      if (+i !== id) return;
    }if (parent) parent.removeChild(this);
  };
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0, _d3Selection.selector)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0, _schedule2.default)(subgroup[i], name, id, i, subgroup, (0, _schedule.get)(node, id));
      }
    }
  }

  return new _index.Transition(subgroups, this._parents, name, id);
};

var _d3Selection = __webpack_require__(0);

var _index = __webpack_require__(12);

var _schedule = __webpack_require__(8);

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0, _d3Selection.selectorAll)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0, _schedule.get)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0, _schedule2.default)(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index.Transition(subgroups, parents, name, id);
};

var _d3Selection = __webpack_require__(0);

var _index = __webpack_require__(12);

var _schedule = __webpack_require__(8);

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new Selection(this._groups, this._parents);
};

var _d3Selection = __webpack_require__(0);

var Selection = _d3Selection.selection.prototype.constructor;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name, value, priority) {
    var i = (name += "") === "transform" ? _d3Interpolate.interpolateTransformCss : _interpolate2.default;
    return value == null ? this.styleTween(name, styleRemove(name, i)).on("end.style." + name, styleRemoveEnd(name)) : this.styleTween(name, typeof value === "function" ? styleFunction(name, i, (0, _tween.tweenValue)(this, "style." + name, value)) : styleConstant(name, i, value + ""), priority);
};

var _d3Interpolate = __webpack_require__(19);

var _d3Selection = __webpack_require__(0);

var _tween = __webpack_require__(22);

var _interpolate = __webpack_require__(53);

var _interpolate2 = _interopRequireDefault(_interpolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function styleRemove(name, interpolate) {
    var value00, value10, interpolate0;
    return function () {
        var value0 = (0, _d3Selection.style)(this, name),
            value1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
    };
}

function styleRemoveEnd(name) {
    return function () {
        this.style.removeProperty(name);
    };
}

function styleConstant(name, interpolate, value1) {
    var value00, interpolate0;
    return function () {
        var value0 = (0, _d3Selection.style)(this, name);
        return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
    };
}

function styleFunction(name, interpolate, value) {
    var value00, value10, interpolate0;
    return function () {
        var value0 = (0, _d3Selection.style)(this, name),
            value1 = value(this);
        if (value1 == null) value1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
    };
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
};

function styleTween(name, value, priority) {
  function tween() {
    var node = this,
        i = value.apply(node, arguments);
    return i && function (t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return this.tween("text", typeof value === "function" ? textFunction((0, _tween.tweenValue)(this, "text", value)) : textConstant(value == null ? "" : value + ""));
};

var _tween = __webpack_require__(22);

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var name = this._name,
      id0 = this._id,
      id1 = (0, _index.newId)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0, _schedule.get)(node, id0);
        (0, _schedule2.default)(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index.Transition(groups, this._parents, name, id1);
};

var _index = __webpack_require__(12);

var _schedule = __webpack_require__(8);

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Refresh = function (_Action) {
  _inherits(Refresh, _Action);

  function Refresh(p) {
    _classCallCheck(this, Refresh);

    var _this = _possibleConstructorReturn(this, (Refresh.__proto__ || Object.getPrototypeOf(Refresh)).call(this, p));

    _this._deny = false;
    return _this;
  }

  _createClass(Refresh, [{
    key: '_execute',
    value: function _execute(accessorName, color) {
      var config = this._registrar.config;
      if (config) config.trigger('change', config);
    }
  }]);

  return Refresh;
}(_Action3.default);

exports.default = Refresh;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * fired to stop any update happening on action
 */
var ToggleFreeze = function (_Action) {
  _inherits(ToggleFreeze, _Action);

  function ToggleFreeze(p) {
    _classCallCheck(this, ToggleFreeze);

    var _this = _possibleConstructorReturn(this, (ToggleFreeze.__proto__ || Object.getPrototypeOf(ToggleFreeze)).call(this, p));

    _this._deny = false;
    return _this;
  }

  _createClass(ToggleFreeze, [{
    key: '_execute',
    value: function _execute(toggle) {
      if (this._registrar.config) this._registrar.config.set('frozen', toggle);
    }
  }]);

  return ToggleFreeze;
}(_Action3.default);

exports.default = ToggleFreeze;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Shape = __webpack_require__(0);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _AreaConfigModel = __webpack_require__(55);

var _AreaConfigModel2 = _interopRequireDefault(_AreaConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

__webpack_require__(171);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AreaView = function (_ChartView) {
  _inherits(AreaView, _ChartView);

  function AreaView() {
    _classCallCheck(this, AreaView);

    return _possibleConstructorReturn(this, (AreaView.__proto__ || Object.getPrototypeOf(AreaView)).apply(this, arguments));
  }

  _createClass(AreaView, [{
    key: 'getScreenX',
    value: function getScreenX(datum) {
      return this.config.xScale(_lodash2.default.get(datum, this.config.get('x.accessor')));
    }
    /**
    * Y coordinate calculation considers position is being stacked
    */

  }, {
    key: 'getScreenY',
    value: function getScreenY(datum, yAccessor) {
      var stackGroups = _lodash2.default.groupBy(this.config.yAccessors, 'stack');
      var stackName = _lodash2.default.find(this.config.yAccessors, function (config) {
        return config.accessor === yAccessor;
      }).stack;
      var stackedValue = 0;
      _lodash2.default.takeWhile(stackGroups[stackName], function (accessorConfig) {
        stackedValue += _lodash2.default.get(datum, accessorConfig.accessor) || 0;
        return accessorConfig.accessor !== yAccessor;
      });
      return this.config.yScale(stackedValue);
    }
  }, {
    key: 'calculateScales',
    value: function calculateScales() {
      this.config.set('x.range', [this.padding.left, this.innerWidth - this.padding.right], { silent: true });
      this.config.set('y.range', [this.innerHeight - this.padding.bottom, this.padding.top], { silent: true });
      this.config.calculateScales(this.model);
    }
    /**
     * Render all areas in a single stack unless specific stack names specified
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      _get(AreaView.prototype.__proto__ || Object.getPrototypeOf(AreaView.prototype), 'render', this).call(this);
      this.calculateScales();

      var data = this.model.data;
      var xAccessor = this.config.get('x.accessor');
      var area = d3Shape.area().x(function (d) {
        return _this2.config.xScale(_lodash2.default.get(d.data, xAccessor));
      }).y0(function (d) {
        return _this2.config.yScale(d[1]);
      }).y1(function (d) {
        return _this2.config.yScale(d[0]);
      }).curve(this.config.get('curve'));

      var stackGroups = _lodash2.default.groupBy(this.config.yAccessors, 'stack');
      _lodash2.default.each(stackGroups, function (accessorsByStack, stackName) {
        var stack = d3Shape.stack().offset(d3Shape.stackOffsetNone).keys(_lodash2.default.map(accessorsByStack, 'accessor')).value(function (d, key) {
          return _lodash2.default.get(d, key);
        });

        var areas = _this2.d3.selectAll(_this2.selectors.node + '-' + stackName).data(stack(data));
        areas.exit().remove();
        areas.enter().append('path').attr('class', function (d) {
          return _this2.selectorClass('node') + ' ' + _this2.selectorClass('node') + '-' + d.key + ' ' + _this2.selectorClass('node') + '-' + stackName;
        }).merge(areas).transition().ease(d3Ease.easeLinear).duration(_this2.config.get('duration')).attr('fill', function (d) {
          return _this2.config.getColor(d.key);
        }).attr('d', area);
      });

      // Remove areas from non-updated stacks
      var updatedAreaClasses = _lodash2.default.reduce(_lodash2.default.keys(stackGroups), function (sum, key) {
        return sum ? sum + ', ' + _this2.selectors.node + '-' + key : _this2.selectors.node + '-' + key;
      }, '');
      var updatedAreaEls = updatedAreaClasses ? this.el.querySelectorAll(updatedAreaClasses) : [];
      var updatedAreas = _lodash2.default.difference(this.el.querySelectorAll(this.selectors.node), updatedAreaEls);
      _lodash2.default.each(updatedAreas, function (area) {
        return area.remove();
      });

      this._ticking = false;
    }

    // Event handlers

  }, {
    key: '_onMousemove',
    value: function _onMousemove(d, el) {
      var tooltipId = this.config.yAccessors[d.index].tooltip;
      if (tooltipId) {
        var _d3Selection$mouse = d3Selection.mouse(this._container),
            _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
            left = _d3Selection$mouse2[0],
            top = _d3Selection$mouse2[1];

        var xAccessor = this.config.get('x.accessor');
        var xVal = this.config.xScale.invert(left);
        var dataItem = this.model.getNearest(xAccessor, xVal);
        var tooltipConfig = { left: left, top: top, container: this._container };
        _Actionman2.default.fire('ToggleVisibility', d.tooltip, true, dataItem, tooltipConfig);
      }
      el.classList.add(this.selectorClass('active'));
    }
  }, {
    key: '_onMouseout',
    value: function _onMouseout(d, el) {
      var tooltipId = d && d.accessor ? d.accessor.tooltip : _lodash2.default.map(this.config.yAccessors, function (a) {
        return a.tooltip;
      });
      if (!_lodash2.default.isEmpty(tooltipId)) {
        _Actionman2.default.fire('ToggleVisibility', tooltipId, false);
      }
      var els = el ? d3Selection.select(el) : this.d3.selectAll(this.selectors.node);
      els.classed('active', false);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 2;
    }
    /**
     * follow same naming convention for all XY chart sub views
     */

  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(AreaView.prototype.__proto__ || Object.getPrototypeOf(AreaView.prototype), 'selectors', this), {
        node: '.area'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'mousemove node': '_onMousemove',
        'mouseout node': '_onMouseout'
      };
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _AreaConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }]);

  return AreaView;
}(_chartView2.default);

exports.default = AreaView;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Axis = __webpack_require__(0);

var d3Axis = _interopRequireWildcard(_d3Axis);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _AxisConfigModel = __webpack_require__(34);

var _AxisConfigModel2 = _interopRequireDefault(_AxisConfigModel);

__webpack_require__(172);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AxisView = function (_ChartView) {
  _inherits(AxisView, _ChartView);

  _createClass(AxisView, null, [{
    key: 'Config',
    get: function get() {
      return _AxisConfigModel2.default;
    }
  }]);

  function AxisView() {
    var _ref;

    _classCallCheck(this, AxisView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = AxisView.__proto__ || Object.getPrototypeOf(AxisView)).call.apply(_ref, [this].concat(args)));

    _this.render();
    return _this;
  }

  _createClass(AxisView, [{
    key: 'render',

    /**
     * Axis is rendered outside the container inner (width * height) area on margins
     */
    value: function render() {
      if (!this.config.scale) return;
      _get(AxisView.prototype.__proto__ || Object.getPrototypeOf(AxisView.prototype), 'render', this).call(this);

      var margin = this.config.get('margin');
      this.d3.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')').classed(this.config.name, true);

      var isHorizontal = this.config.direction === 'horizontal';
      this._plotLength = isHorizontal ? this.innerWidth : this.innerHeight;
      this._tickLength = isHorizontal ? this.innerHeight : this.innerWidth;

      this._d3Axis = d3Axis[_lodash2.default.camelCase('axis-' + this.config.position)](this.config.scale).ticks(this.config.get('ticks')).tickSize(this._tickLength * this.config.side).tickPadding(10);

      if (this.config.formatter) this._d3Axis.tickFormat(this.config.formatter);
      if (this.config.tickCoords) this._d3Axis.tickValues(this.config.tickValues);

      this.d3.transition().ease(d3Ease.easeLinear).duration(this.config.duration);
      this.d3.call(this._d3Axis);
      this._renderLabel();

      this._ticking = false;
    }
    /**
     * Labels are rendered at the center along axis
     * TODO not optimal label spacing
     * and in the first quater of the margin between container edge and tick
     */

  }, {
    key: '_renderLabel',
    value: function _renderLabel() {
      var _this2 = this;

      var offset = {
        along: this._plotLength / 2,
        across: this._tickLength * +(this.config.location === 'end') + this.config.margin[this.config.position] * this.config.side
      };

      var labels = this.d3.selectAll(this.selectors.label).data(this.config.labels);
      labels.enter().append('text').attr('class', this.selectorClass('label')).text(function (d) {
        return d;
      }).merge(labels).style('dominant-baseline', this.config.isHorizontal ? 'text-after-edge' : 'text-before-edge').attr('transform', function (d, i) {
        var across = offset.across + i * _this2.config.margin.label * -_this2.config.side;
        var position = _this2.config.isHorizontal ? [offset.along, across] : [across, offset.along];

        return 'translate(' + position[0] + ', ' + position[1] + ')\n          rotate(' + 90 * _this2.config.side * +!_this2.config.isHorizontal + ')';
      });

      labels.exit().remove();
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 0;
    }
    /**
     * follow same naming convention for all XY chart sub views
     */

  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(AxisView.prototype.__proto__ || Object.getPrototypeOf(AxisView.prototype), 'selectors', this), {
        node: '.axis',
        label: '.axis-label',
        tick: '.tick'
      });
    }
  }]);

  return AxisView;
}(_chartView2.default);

exports.default = AxisView;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Array = __webpack_require__(0);

var d3Array = _interopRequireWildcard(_d3Array);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _BucketConfigModel = __webpack_require__(57);

var _BucketConfigModel2 = _interopRequireDefault(_BucketConfigModel);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _ToggleVisibility = __webpack_require__(14);

var _ToggleVisibility2 = _interopRequireDefault(_ToggleVisibility);

var _Cluster = __webpack_require__(36);

var _Cluster2 = _interopRequireDefault(_Cluster);

var _Util = __webpack_require__(26);

var _Cluster3 = __webpack_require__(136);

var _Cluster4 = _interopRequireDefault(_Cluster3);

__webpack_require__(174);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BucketView = function (_ChartView) {
  _inherits(BucketView, _ChartView);

  function BucketView() {
    _classCallCheck(this, BucketView);

    return _possibleConstructorReturn(this, (BucketView.__proto__ || Object.getPrototypeOf(BucketView)).apply(this, arguments));
  }

  _createClass(BucketView, [{
    key: 'render',
    value: function render() {
      if (!this.el.parentElement) {
        _get(BucketView.prototype.__proto__ || Object.getPrototypeOf(BucketView.prototype), 'render', this).call(this);
        this.svg.delegate('click', 'svg', this._onBackgroundClick.bind(this));
        this.d3.attr('clip-path', 'url(#' + this.config.get('clip') + ')');
      }

      var data = this._cluster(this.model.data);

      var buckets = this.d3.selectAll(this.selectors.node).data(data, function (d) {
        return d.id;
      });

      var shape = this.config.get('shape');
      var color = this.config.get('color');
      var scale = this.config.scale;
      var groups = buckets.enter().append('g').classed(this.selectorClass('node'), true).classed(this.selectorClass('interactive'), true).attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
      groups.append('text').html(shape).attr('fill', color).style('font-size', function (d) {
        return Math.sqrt(scale(d.area));
      });

      groups.append('text').attr('class', this.selectorClass('label')).text(function (d) {
        return d.bucket.length;
      });
      // Update
      buckets.transition().ease(d3Ease.easeLinear).duration(this.config.duration).attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });

      buckets.exit().remove();

      this._ticking = false;
    }
  }, {
    key: '_cluster',
    value: function _cluster(data) {
      var _this2 = this;

      var cluster = new _Cluster4.default();
      cluster.x(function (d) {
        return d.x;
      }).y(function (d) {
        return d.y;
      }).data(data);
      var buckets = cluster.buckets();

      _lodash2.default.each(buckets, function (d) {
        d.id = _this2._getId(d);
        d.area = _this2._getSize(d);
      });
      this.config.scale.domain(d3Array.extent(buckets, function (d) {
        return d.area;
      }));

      _Actionman2.default.fire('Cluster', this.config.get('update'), cluster.overlapping());
      return buckets;
    }
  }, {
    key: '_getId',
    value: function _getId(bucket) {
      var summaryId = _lodash2.default.reduce(bucket.bucket, function (sum, datum) {
        sum += datum.id;
        return sum;
      }, '');
      return (0, _Util.hashCode)(summaryId);
    }
  }, {
    key: '_getSize',
    value: function _getSize(bucket) {
      return _lodash2.default.reduce(bucket.bucket, function (sum, datum) {
        sum += datum.area;
        return sum;
      }, 0);
    }

    // Event handlers

  }, {
    key: '_onMouseover',
    value: function _onMouseover(d, el, event) {
      var tooltip = this.config.get('tooltip');
      if (tooltip) {
        var _d3Selection$mouse = d3Selection.mouse(this._container),
            _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
            left = _d3Selection$mouse2[0],
            top = _d3Selection$mouse2[1];

        var config = { left: left, top: top, container: this._container };
        _Actionman2.default.fire('ToggleVisibility', tooltip, true, d.bucket, config);
      }
      el.classList.add(this.selectorClass('active'));
    }
  }, {
    key: '_onMouseout',
    value: function _onMouseout(d, el) {
      var tooltip = this.config.get('tooltip');
      if (tooltip) {
        _Actionman2.default.fire('ToggleVisibility', tooltip, false);
      }
      var els = el ? this.d3.select(function () {
        return el;
      }) : this.d3.selectAll(this.selectors.node);
      els.classed('active', false);
    }
  }, {
    key: '_onClickNode',
    value: function _onClickNode(d, el, e) {
      e.stopPropagation();
      this._onMouseout(d, el);
      var ranges = {};
      (0, _lodash2.default)(d.bucket).map('accessor.accessor').uniq().push(this.config.get('xAccessor')).each(function (accessor) {
        ranges[accessor] = d3Array.extent(_lodash2.default.map(d.bucket, 'data.' + accessor));
      });
      _Actionman2.default.fire('Zoom', this.config.get('update'), ranges);
    }
  }, {
    key: '_onBackgroundClick',
    value: function _onBackgroundClick() {
      _Actionman2.default.fire('Zoom', this.config.get('update'));
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 2;
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(BucketView.prototype.__proto__ || Object.getPrototypeOf(BucketView.prototype), 'selectors', this), {
        node: '.bucket',
        active: '.active',
        label: '.bucket-label'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return _lodash2.default.extend(_get(BucketView.prototype.__proto__ || Object.getPrototypeOf(BucketView.prototype), 'events', this), {
        'click node': '_onClickNode',
        'mouseover node': '_onMouseover',
        'mouseout node': '_onMouseout'
      });
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _BucketConfigModel2.default;
    }
  }, {
    key: 'isMaster',
    get: function get() {
      return false;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { ToggleVisibility: _ToggleVisibility2.default, ClusterAction: _Cluster2.default };
    }
  }]);

  return BucketView;
}(_chartView2.default);

exports.default = BucketView;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Quadtree = __webpack_require__(0);

var _d3Array = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Clusterize overlapping shapes
 * Works with 2D array
 * Shapes are considered rectangles
 * TODO operate on width and height instead of halves
 */
var Cluster = function () {
  function Cluster() {
    _classCallCheck(this, Cluster);
  }

  _createClass(Cluster, [{
    key: 'x',
    value: function x(getX) {
      this._getX = getX;
      return this;
    }
  }, {
    key: 'y',
    value: function y(getY) {
      this._getY = getY;
      return this;
    }
  }, {
    key: 'data',
    value: function data(_data) {
      this._overlapping = undefined;
      this._buckets = undefined;

      this._data = _data;
      this._quadtree = (0, _d3Quadtree.quadtree)().x(this._getX).y(this._getY).addAll(_data);
      this._maxW = (0, _d3Array.max)(_data, function (d) {
        return d.halfWidth;
      });
      this._maxH = (0, _d3Array.max)(_data, function (d) {
        return d.halfHeight;
      });

      return this;
    }
    /**
     * @return {Array} of points which overlaps with others
     */

  }, {
    key: 'overlapping',
    value: function overlapping() {
      var _this = this;

      if (this._overlapping) return this._overlapping;else this._overlapping = [];

      _lodash2.default.each(this._data, function (point) {
        // TODO add option to set modify or not original data array
        point.overlap = _this._collisionDetection(point);
      });
      _lodash2.default.each(this._data, function (d) {
        if (d.overlap) {
          _lodash2.default.each(d.overlap, function (d) {
            // TODO some overlapping nodes are not marked both
            if (d.overlap && !_this._overlapping.includes(d)) _this._overlapping.push(d);
          });
        }
      });
      return this._overlapping;
    }
    /** Aggregates points into bucket points
     * Minimize amount of bucketized nodes
     * @return {Array} bucket points
     */

  }, {
    key: 'buckets',
    value: function buckets() {
      if (this._buckets) return this._buckets;else this._buckets = [];
      if (_lodash2.default.isEmpty(this.overlapping())) return [];

      // Maximize the number of points in the bucket
      // this will make some points overlapping with multiple other nodes alone
      // as they will not be included to bigger buckets starting with the root node with which there is no overlap
      var toBuckets = _lodash2.default.sortBy(this.overlapping(), function (d) {
        return d.overlap.length;
      });
      do {
        var root = toBuckets.pop();

        // add to current bucket points which are not added to other buckets
        var bucket = _lodash2.default.filter(root.overlap, function (d) {
          var index = toBuckets.indexOf(d);
          if (index < 0) return;
          return toBuckets.splice(index, 1)[0];
        });
        if (!bucket.length) continue;
        this._buckets.push({
          // TODO position bucket point at the center of aggregated points
          x: root.x,
          y: root.y,
          // TODO calculate halfWidth and halfHeight based on aggregated points
          bucket: [root].concat(_toConsumableArray(bucket))
        });
      } while (toBuckets.length);
      return this._buckets;
    }
    /**
     * Find the nodes within the specified rectangle.
     * @param {Object} p point specified by two points
     */

  }, {
    key: '_collisionDetection',
    value: function _collisionDetection(p) {
      var _this2 = this;

      var x0 = p.x - p.halfWidth;
      var y0 = p.y - p.halfHeight;
      var x3 = p.x + p.halfWidth;
      var y3 = p.y + p.halfHeight;
      var collided = [];
      this._quadtree.visit(function (node, x1, y1, x2, y2) {
        if (!node.length) {
          do {
            var d = node.data;
            if (d.x + d.halfWidth >= x0 && d.x - d.halfWidth < x3 && d.y + d.halfHeight >= y0 && d.y - d.halfHeight < y3) {
              if (d !== p) collided.push(d);
            }
            node = node.next;
          } while (node);
        }
        return x1 - _this2._maxW >= x3 || y1 - _this2._maxH >= y3 || x2 + _this2._maxW < x0 || y2 + _this2._maxH < y0;
      });
      return collided.length ? collided : false;
    }
  }]);

  return Cluster;
}();

exports.default = Cluster;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _ColorPickerConfigModel = __webpack_require__(58);

var _ColorPickerConfigModel2 = _interopRequireDefault(_ColorPickerConfigModel);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _ToggleVisibility = __webpack_require__(14);

var _ToggleVisibility2 = _interopRequireDefault(_ToggleVisibility);

var _colorPicker = __webpack_require__(199);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

__webpack_require__(175);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ColorPickerView = function (_ChartView) {
  _inherits(ColorPickerView, _ChartView);

  function ColorPickerView() {
    _classCallCheck(this, ColorPickerView);

    return _possibleConstructorReturn(this, (ColorPickerView.__proto__ || Object.getPrototypeOf(ColorPickerView)).apply(this, arguments));
  }

  _createClass(ColorPickerView, [{
    key: 'render',
    value: function render() {
      var template = this.config.get('template') || _colorPicker2.default;
      var content = template(this.config.data);

      _get(ColorPickerView.prototype.__proto__ || Object.getPrototypeOf(ColorPickerView.prototype), 'render', this).call(this, content);
      this.d3.classed('hide', this.config.get('embedded') && !this._visible);
    }
  }, {
    key: 'open',
    value: function open(d, el) {
      var $elem = this.$(el);
      var label = $elem.find('.label').html();
      this._accessor = $elem.data('accessor');
      var paletteElement = this.$(this.selectors.palette);
      var elemOffset = $elem.position();
      elemOffset.left += $elem.outerWidth(true);
      paletteElement.css(elemOffset);
      paletteElement.find(this.selectors.title).html(label);
      paletteElement.removeClass('hide');
    }
  }, {
    key: 'close',
    value: function close() {
      this.d3.select(this.selectors.palette).classed('hide', true);
    }

    // Event handlers

  }, {
    key: '_onSelectColor',
    value: function _onSelectColor(d, el) {
      var color = el.style['background-color'];
      _Actionman2.default.fire('SelectColor', this._accessor, color);
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(ColorPickerView.prototype.__proto__ || Object.getPrototypeOf(ColorPickerView.prototype), 'selectors', this), {
        open: '.color-select',
        close: '.color-picker-palette-close',
        title: '.color-picker-palette-title',
        palette: '.color-picker-palette',
        colorSelector: '.color-picker-palette-color'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click open': 'open',
        'click close': 'close',
        'click colorSelector': '_onSelectColor'
      };
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _ColorPickerConfigModel2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { ToggleVisibility: _ToggleVisibility2.default };
    }
  }]);

  return ColorPickerView;
}(_chartView2.default);

exports.default = ColorPickerView;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }; /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */


var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _ControlPanelConfigModel = __webpack_require__(59);

var _ControlPanelConfigModel2 = _interopRequireDefault(_ControlPanelConfigModel);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _ToggleHalt = __webpack_require__(33);

var _ToggleHalt2 = _interopRequireDefault(_ToggleHalt);

var _controlPanel = __webpack_require__(201);

var _controlPanel2 = _interopRequireDefault(_controlPanel);

var _panel = __webpack_require__(202);

var _panel2 = _interopRequireDefault(_panel);

var _action = __webpack_require__(200);

var _action2 = _interopRequireDefault(_action);

__webpack_require__(176);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlPanelView = function (_ChartView) {
  _inherits(ControlPanelView, _ChartView);

  _createClass(ControlPanelView, null, [{
    key: 'Config',
    get: function get() {
      return _ControlPanelConfigModel2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { ToggleHalt: _ToggleHalt2.default };
    }
  }]);

  function ControlPanelView() {
    var _ref;

    _classCallCheck(this, ControlPanelView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ControlPanelView.__proto__ || Object.getPrototypeOf(ControlPanelView)).call.apply(_ref, [this].concat(args)));

    _get(ControlPanelView.prototype.__proto__ || Object.getPrototypeOf(ControlPanelView.prototype), 'render', _this).call(_this, (0, _controlPanel2.default)());
    _this._opened = false;
    _this.render();
    return _this;
  }

  _createClass(ControlPanelView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var configs = _lodash2.default.map(this.config.get('menu'), function (config) {
        return _lodash2.default.extend({}, _this2.config.menuItems[config.id], config);
      });
      var menuItemsDiv = this.d3.select(this.selectors.menuItems);

      var menuItems = menuItemsDiv.selectAll(this.selectors.menuItem).data(configs, function (config) {
        return config.id;
      }).classed('disabled', function (d) {
        return d.disabled;
      });

      menuItems.enter().append('div').classed(this.selectorClass('menuItem'), true).classed('disabled', function (d) {
        return d.disabled;
      }).html(function (d) {
        return (0, _action2.default)(d);
      });

      menuItems.exit().remove();
    }
  }, {
    key: 'setHalt',
    value: function setHalt(isHalted) {
      this.config.set('halted', isHalted);
    }
  }, {
    key: 'addMenuItem',
    value: function addMenuItem(config) {
      this.config.set(this.config.get('menu').push(config));
    }
  }, {
    key: 'removeMenuItem',
    value: function removeMenuItem(id) {
      this.el.querySelector('[data-id="' + id + '"]').remove();
    }
  }, {
    key: 'enableMenuItem',
    value: function enableMenuItem(id) {}
  }, {
    key: 'disableMenuItem',
    value: function disableMenuItem(id) {}
  }, {
    key: 'open',
    value: function open(config) {
      var panel = this.el.querySelector(this.selectors.panel);
      panel.innerHTML = (0, _panel2.default)(config);
      var container = panel.querySelector(this.selectors.container);
      panel.classList.toggle('hide');
      // TODO pass current selection if any instead of null
      _Actionman2.default.fire('ToggleVisibility', config.component, !this._opened, null, { container: container });
      this._opened = !this._opened;
    }

    // Event handlers

  }, {
    key: '_onMenuItemClick',
    value: function _onMenuItemClick(d, el) {
      d3Selection.event.stopPropagation();
      var actionId = void 0;
      if (d.component) this.open(d);else {
        actionId = d.action ? d.action : d.id;
        _Actionman2.default.fire(actionId, this.config.update, d.toggle, d.attribute);
      }
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend({}, _get(ControlPanelView.prototype.__proto__ || Object.getPrototypeOf(ControlPanelView.prototype), 'selectors', this), {
        panel: '.panel',
        menuItem: '.control-panel-item',
        menuItems: '.control-panel-items',
        container: '.control-panel-expanded-container'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click menuItem': '_onMenuItemClick'
      };
    }
  }]);

  return ControlPanelView;
}(_chartView2.default);

exports.default = ControlPanelView;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _CrosshairConfigModel = __webpack_require__(60);

var _CrosshairConfigModel2 = _interopRequireDefault(_CrosshairConfigModel);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _ToggleVisibility = __webpack_require__(14);

var _ToggleVisibility2 = _interopRequireDefault(_ToggleVisibility);

__webpack_require__(177);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CrosshairView = function (_ChartView) {
  _inherits(CrosshairView, _ChartView);

  function CrosshairView() {
    _classCallCheck(this, CrosshairView);

    return _possibleConstructorReturn(this, (CrosshairView.__proto__ || Object.getPrototypeOf(CrosshairView)).apply(this, arguments));
  }

  _createClass(CrosshairView, [{
    key: 'render',

    /**
     * @param {Array [x, y]} point mouse offset relative to svg container
     */
    value: function render() {
      var _this2 = this;

      _get(CrosshairView.prototype.__proto__ || Object.getPrototypeOf(CrosshairView.prototype), 'render', this).call(this);
      var data = this.model.data;
      // Draw crosshair line
      // TODO implement half lines
      if (this.config.get('lines') !== 'full') return;
      var lineCoords = _lodash2.default.map(data.labels, function (label) {
        return {
          id: label.position,
          x1: data.dataPoint[0],
          x2: data.dataPoint[0],
          y1: _this2.innerHeight,
          y2: 0,
          label: label.value
        };
      });
      // console.log(lineCoords);
      var margin = this.config.get('margin');
      var crosshairs = this.d3.selectAll(this.selectors.node).data(lineCoords);
      var crosshairEnter = crosshairs.enter().append('g').attr('class', this.selectorClass('node'));
      crosshairEnter.attr('transform', function (d) {
        return 'translate(' + d.x1 + ', ' + d.y2 + ')';
      }).merge(crosshairs).transition().ease(d3Ease.easeLinear).duration(this.config.get('duration')).attr('transform', function (d) {
        return 'translate(' + d.x1 + ', ' + d.y2 + ')';
      });
      crosshairEnter.append('line').attr('class', this.selectorClass('line')).attr('x1', 0).attr('x2', 0);
      crosshairEnter.append('text').attr('class', this.selectorClass('text'));
      var update = crosshairEnter.merge(crosshairs);
      update.select(this.selectors.line).attr('y1', function (d) {
        return d.y1;
      }).attr('y2', function (d) {
        return d.y2;
      });
      update.select(this.selectors.text).attr('y', function (d) {
        return d.y1 + margin.label / 2;
      }).text(function (d) {
        return d.label;
      });

      // Draw bubbles for all enabled y accessors.
      update.each(function (d, i, els) {
        var bubbles = d3Selection.select(els[i]).selectAll(_this2.selectors.bubble).data(data.points, function (d) {
          return d.id;
        });
        bubbles.enter().append('circle').classed(_this2.selectorClass('bubble'), true).attr('cx', 0).attr('cy', function (d) {
          return d.y;
        }).attr('fill', function (d) {
          return d.color;
        }).attr('r', 0).merge(bubbles).transition().ease(d3Ease.easeLinear).duration(_this2.config.get('duration')).attr('cy', function (d) {
          return d.y;
        }).attr('r', _this2.config.get('bubbleR'));
        bubbles.exit().remove();
      });

      // Show tooltip
      var tooltipConfig = {
        left: this.svgOffset.left + margin.left + data.dataPoint[0],
        top: this.svgOffset.top + margin.top + data.dataPoint[1],
        placement: 'horizontal'
      };
      _Actionman2.default.fire('ToggleVisibility', this.config.get('tooltip'), true, data.item, tooltipConfig);
    }
  }, {
    key: 'hide',
    value: function hide() {
      _get(CrosshairView.prototype.__proto__ || Object.getPrototypeOf(CrosshairView.prototype), 'hide', this).call(this);
      _Actionman2.default.fire('ToggleVisibility', this.config.get('tooltip'), false);
    }
    /**
     * Crosshair is hidden on resize as mouse position is changed relative to the chart
     * so there is not need in render
     * @override
     */

  }, {
    key: '_onResize',
    value: function _onResize() {}
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 9;
    }
    /**
     * follow same naming convention for all XY chart sub views
     */

  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(CrosshairView.prototype.__proto__ || Object.getPrototypeOf(CrosshairView.prototype), 'selectors', this), {
        node: '.crosshair-node',
        line: '.line',
        text: '.text',
        bubble: '.bubble'
      });
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _CrosshairConfigModel2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { ToggleVisibility: _ToggleVisibility2.default };
    }
  }, {
    key: 'isMaster',
    get: function get() {
      return false;
    }
  }]);

  return CrosshairView;
}(_chartView2.default);

exports.default = CrosshairView;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _configModel = __webpack_require__(3);

var _configModel2 = _interopRequireDefault(_configModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var FilterConfigModel = function (_ConfigModel) {
  _inherits(FilterConfigModel, _ConfigModel);

  function FilterConfigModel() {
    _classCallCheck(this, FilterConfigModel);

    return _possibleConstructorReturn(this, (FilterConfigModel.__proto__ || Object.getPrototypeOf(FilterConfigModel)).apply(this, arguments));
  }

  _createClass(FilterConfigModel, [{
    key: 'data',
    get: function get() {
      var _this2 = this;

      var accessors = this._parent.getAccessors();
      var data = _lodash2.default.map(accessors, function (accessor) {
        return {
          key: accessor.accessor,
          label: _this2.getLabel(undefined, accessor),
          enabled: accessor.enabled
        };
      });
      return data;
    }
  }]);

  return FilterConfigModel;
}(_configModel2.default);

exports.default = FilterConfigModel;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _filter = __webpack_require__(203);

var _filter2 = _interopRequireDefault(_filter);

__webpack_require__(178);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var FilterView = function (_ChartView) {
  _inherits(FilterView, _ChartView);

  function FilterView() {
    _classCallCheck(this, FilterView);

    return _possibleConstructorReturn(this, (FilterView.__proto__ || Object.getPrototypeOf(FilterView)).apply(this, arguments));
  }

  _createClass(FilterView, [{
    key: 'render',
    value: function render() {
      var template = this.config.get('template') || _filter2.default;
      var content = template(this.config.data);

      _get(FilterView.prototype.__proto__ || Object.getPrototypeOf(FilterView.prototype), 'render', this).call(this, content);
      this.d3.classed('hide', this.config.get('embedded') && !this._visible);
    }
  }, {
    key: '_onItemClick',
    value: function _onItemClick(d, el) {
      d3Selection.event.stopPropagation();
      var accessorName = el.value;
      var isChecked = el.checked;
      _Actionman2.default.fire('SelectKey', accessorName, isChecked);
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend({}, _get(FilterView.prototype.__proto__ || Object.getPrototypeOf(FilterView.prototype), 'selectors', this), {
        item: '.filter-item-input'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'change item': '_onItemClick'
      };
    }
  }], [{
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }]);

  return FilterView;
}(_chartView2.default);

exports.default = FilterView;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _d3Array = __webpack_require__(0);

var d3Array = _interopRequireWildcard(_d3Array);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _GroupedBarConfigModel = __webpack_require__(61);

var _GroupedBarConfigModel2 = _interopRequireDefault(_GroupedBarConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

__webpack_require__(179);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GroupedBarView = function (_ChartView) {
  _inherits(GroupedBarView, _ChartView);

  function GroupedBarView() {
    _classCallCheck(this, GroupedBarView);

    return _possibleConstructorReturn(this, (GroupedBarView.__proto__ || Object.getPrototypeOf(GroupedBarView)).apply(this, arguments));
  }

  _createClass(GroupedBarView, [{
    key: 'getScreenX',
    value: function getScreenX(datum, yAccessor) {
      var _this2 = this;

      var delta = 0;
      _lodash2.default.each(this.config.yAccessors, function (accessor, j) {
        if (accessor.accessor === yAccessor) {
          delta = _this2._innerBandScale(j) + _this2._innerBandScale.bandwidth() / 2;
        }
      });
      return this.config.xScale(_lodash2.default.get(datum, this.config.get('x.accessor'))) + delta;
    }
  }, {
    key: 'getScreenY',
    value: function getScreenY(datum, yAccessor) {
      return this.config.yScale(_lodash2.default.get(datum, yAccessor));
    }
  }, {
    key: 'calculateScales',
    value: function calculateScales() {
      this.config.set('x.range', [this.padding.left, this.innerWidth - this.padding.right], { silent: true });
      this.config.set('y.range', [this.innerHeight - this.padding.bottom, this.padding.top], { silent: true });
      this.config.calculateScales(this.model);
    }
  }, {
    key: 'render',
    value: function render() {
      _get(GroupedBarView.prototype.__proto__ || Object.getPrototypeOf(GroupedBarView.prototype), 'render', this).call(this);
      this._onMouseout();
      // frozen component is completely controlled from outside
      if (!this.config.get('frozen')) this.calculateScales();

      // Create a flat data structure
      var numOfAccessors = _lodash2.default.keys(this.config.yAccessors).length;
      var bandWidthHalf = this.bandWidth / 2;
      this._innerBandScale = d3Scale.scaleBand().domain(d3Array.range(numOfAccessors)).range([-bandWidthHalf, bandWidthHalf]).paddingInner(0.05).paddingOuter(0.05);
      // Render the flat data structure
      var svgBarGroups = this.d3.selectAll(this.selectors.node).data(this._prepareData(), function (d) {
        return d.id;
      });
      svgBarGroups.enter().append('rect').attr('class', function (d) {
        return 'bar';
      }).attr('x', function (d) {
        return d.x;
      }).attr('y', this.config.yScale.range()[0]).attr('height', 0).attr('width', function (d) {
        return d.w;
      }).merge(svgBarGroups).transition().ease(d3Ease.easeLinear).duration(this.config.get('duration')).attr('fill', function (d) {
        return d.color;
      }).attr('x', function (d) {
        return d.x;
      }).attr('y', function (d) {
        return d.y;
      }).attr('height', function (d) {
        return d.h;
      }).attr('width', function (d) {
        return d.w;
      });
      svgBarGroups.exit().remove();

      this._ticking = false;
    }
  }, {
    key: '_prepareData',
    value: function _prepareData() {
      var _this3 = this;

      var flatData = [];
      var start = this.config.yScale.domain()[0];
      var innerBandWidth = this._innerBandScale.bandwidth();
      _lodash2.default.each(this.model.data, function (d) {
        var x = _lodash2.default.get(d, _this3.config.get('x.accessor'));
        _lodash2.default.each(_this3.config.yAccessors, function (accessor, j) {
          var key = accessor.accessor;
          var obj = {
            id: x + '-' + key,
            x: _this3.config.xScale(x) + _this3._innerBandScale(j),
            // TODO in order to plot in forth quadrant use: y: this.config.yScale.range()[1]
            y: _this3.config.yScale(_lodash2.default.get(d, key)),
            h: _this3.config.yScale(start) - _this3.config.yScale(_lodash2.default.get(d, key)),
            w: innerBandWidth,
            color: _this3.config.getColor(accessor.accessor, d),
            accessor: accessor,
            data: d
          };
          flatData.push(obj);
        });
      });
      return flatData;
    }

    // Event handlers

  }, {
    key: '_onMousemove',
    value: function _onMousemove(d, el, event) {
      if (d.accessor.tooltip) {
        var _d3Selection$mouse = d3Selection.mouse(this._container),
            _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
            left = _d3Selection$mouse2[0],
            top = _d3Selection$mouse2[1];

        var tooltipConfig = { left: left, top: top, container: this._container };
        _Actionman2.default.fire('ToggleVisibility', d.accessor.tooltip, true, d.data, tooltipConfig);
      }
      el.classList.add(this.selectorClass('active'));
    }
  }, {
    key: '_onMouseout',
    value: function _onMouseout(d, el) {
      var tooltipId = d && d.accessor ? d.accessor.tooltip : _lodash2.default.map(this.config.yAccessors, function (a) {
        return a.tooltip;
      });
      if (!_lodash2.default.isEmpty(tooltipId)) {
        _Actionman2.default.fire('ToggleVisibility', tooltipId, false);
      }
      // TODO Here and in all similar components with _onMouseout global d3Selection is used instead of this.d3.select
      // because it replaces associated "el" bar data with this.d3.__data__
      var els = el ? d3Selection.select(el) : this.d3.selectAll(this.selectors.node);
      els.classed('active', false);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 1;
    }
    /**
     * follow same naming convention for all XY chart sub views
     */

  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(GroupedBarView.prototype.__proto__ || Object.getPrototypeOf(GroupedBarView.prototype), 'selectors', this), {
        node: '.bar'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'mousemove node': '_onMousemove',
        'mouseout node': '_onMouseout'
      };
    }
  }, {
    key: 'bandWidth',
    get: function get() {
      var data = this.model.data;
      if (_lodash2.default.isEmpty(data)) return 0;
      var paddedPart = 1 - this.config.get('barPadding') / 100;
      // TODO do not use model.data.length as there can be gaps
      // or fill the gaps in it beforehand
      return this.config.getOuterWidth(this.model, this.innerWidth) / data.length * paddedPart;
    }
  }, {
    key: 'padding',
    get: function get() {
      var horizontal = this.model.data.length < 2 ? 0 : this.bandWidth / 2;
      return _lodash2.default.defaultsDeep({ left: horizontal, right: horizontal }, this.config.padding);
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _GroupedBarConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }]);

  return GroupedBarView;
}(_chartView2.default);

exports.default = GroupedBarView;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(86);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Color = __webpack_require__(13);

var d3Color = _interopRequireWildcard(_d3Color);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _LegendPanelConfigModel = __webpack_require__(62);

var _LegendPanelConfigModel2 = _interopRequireDefault(_LegendPanelConfigModel);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _ToggleVisibility = __webpack_require__(14);

var _ToggleVisibility2 = _interopRequireDefault(_ToggleVisibility);

var _legend = __webpack_require__(204);

var _legend2 = _interopRequireDefault(_legend);

__webpack_require__(180);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _states = {
  DEFAULT: 'default',
  EDIT: 'edit'
};
var icons = {
  'GroupedBar': 'icon-charttype-bar',
  'StackedBar': 'icon-charttype-stacked',
  'Line': 'icon-charttype-line',
  'Area': 'icon-charttype-area',
  'Pie': 'icon-charttype-pie'
};

var LegendPanelView = function (_ChartView) {
  _inherits(LegendPanelView, _ChartView);

  _createClass(LegendPanelView, null, [{
    key: 'Config',
    get: function get() {
      return _LegendPanelConfigModel2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { ToggleVisibility: _ToggleVisibility2.default };
    }
  }, {
    key: 'isMaster',
    get: function get() {
      return false;
    }
  }]);

  function LegendPanelView(p) {
    _classCallCheck(this, LegendPanelView);

    var _this = _possibleConstructorReturn(this, (LegendPanelView.__proto__ || Object.getPrototypeOf(LegendPanelView)).call(this, p));

    _this._state = _states.DEFAULT;
    return _this;
  }

  _createClass(LegendPanelView, [{
    key: 'render',
    value: function render() {
      var template = this.config.get('template') || _legend2.default;
      var data = this._prepareData();
      var content = template(data);
      _get(LegendPanelView.prototype.__proto__ || Object.getPrototypeOf(LegendPanelView.prototype), 'render', this).call(this, content);

      if (!this.config.attributes.filter || data.keys.length === 1) {
        this.d3.selectAll(this.selectors.key).classed('disabled', true).select('input').property('disabled', true);
      }

      this.d3.classed('vertical', this.config.keys.placement === 'vertical');
      this.d3.selectAll(this.selectors.axis).classed('active', data.axesCount > 1);
      if (this._state === _states.EDIT) this._setEditState();
    }
    /**
     * Format data for template
     */

  }, {
    key: '_prepareData',
    value: function _prepareData() {
      var _this2 = this;

      var chartTypes = [];
      var axesQuantity = _lodash2.default.keys(_lodash2.default.groupBy(this.model.data, 'axis')).length;
      _lodash2.default.each(this.config.get('chartTypes'), function (configChartTypes, axisLabel) {
        chartTypes = chartTypes.concat(_lodash2.default.map(configChartTypes, function (chartType) {
          return {
            axisLabel: axisLabel,
            chartType: chartType,
            icon: icons[chartType]
          };
        }));
      });

      var data = {
        colors: this.config.get('colorScheme'),
        chartTypes: chartTypes,
        editable: this.config.get('editable.color') || this.config.get('editable.chart')
      };
      data.keys = _lodash2.default.map(this.model.data, function (item) {
        return _lodash2.default.extend(item, {
          axis: axesQuantity > 1 ? item.axis : undefined,
          icon: icons[item.chartType],
          checked: _this2.config.get('filter') && !item.disabled
        });
      });

      return data;
    }
  }, {
    key: '_toggleKey',
    value: function _toggleKey(d, el) {
      var key = (0, _jquery2.default)(el).parents('.key').data('key');
      var isSelected = el.querySelector('input').checked;
      _Actionman2.default.fire('SelectKey', key, isSelected);
    }
  }, {
    key: '_setEditState',
    value: function _setEditState() {
      var _this3 = this;

      this.$('.key').toggleClass('edit');
      this.d3.selectAll('.selector').classed('active', false);

      this.d3.select('switches-colors').classed('hide', !this.config.get('editable.color'));
      this.d3.select('switches-charts').classed('hide', !this.config.get('editable.chart'));

      _lodash2.default.each(this.el.querySelectorAll(this.selectors.key + ' > input'), function (el) {
        el.disabled = _this3._state !== _states.DEFAULT;
      });
    }
  }, {
    key: '_toggleEditMode',
    value: function _toggleEditMode(d, el) {
      this._state = this._state === _states.DEFAULT ? _states.EDIT : _states.DEFAULT;
      this.el.classList.toggle('edit-mode');
      this._setEditState();
    }
  }, {
    key: '_addChartTypes',
    value: function _addChartTypes(keyAxis) {
      this.d3.selectAll(this.selectors.chartTypeSwitch).classed('hide', true).filter(function (d, i, n) {
        return n[i].dataset.axis === keyAxis;
      }).classed('hide', false);
    }
  }, {
    key: '_toggleSelector',
    value: function _toggleSelector(d, el) {
      this._key = (0, _jquery2.default)(el).parents('.key').data('key');
      var currentSelector = el.classList.contains('select--chart') ? 'chart' : 'color';

      var selector = this.d3.select('.selector');
      selector.classed('active', !(selector.classed('active') && selector.classed('select--' + currentSelector))).classed('select--color', currentSelector === 'color').classed('select--chart', currentSelector === 'chart');
      selector.selectAll('.switch').classed('selected', false);

      if (currentSelector === 'color') {
        var currentColor = d3Color.color(el.dataset.color);
        selector.selectAll(this.selectors.colorSwitch).filter(function (d, i, n) {
          return d3Color.color(n[i].dataset.color).toString() === currentColor.toString();
        }).classed('selected', true);
      }
      if (currentSelector === 'chart') {
        var currentKey = _lodash2.default.find(this._prepareData().keys, { 'key': this._key });
        this._addChartTypes(currentKey.axis);

        var currentChart = el.dataset.chartType;
        selector.selectAll(this.selectors.chartTypeSwitch).filter(function (d, i, n) {
          return n[i].dataset.chartType === currentChart;
        }).classed('selected', true);
      }

      var elemOffset = (0, _jquery2.default)(el).position();
      elemOffset.top += (0, _jquery2.default)(el).outerHeight() + 1;
      selector.style('top', elemOffset.top + 'px').style('left', elemOffset.left + 'px');
    }
  }, {
    key: '_selectColor',
    value: function _selectColor(d, el) {
      var color = window.getComputedStyle(el).backgroundColor;
      _Actionman2.default.fire('SelectColor', this._key, color);
    }
  }, {
    key: '_selectChartType',
    value: function _selectChartType(d, el) {
      var chartType = el.dataset.chartType;
      _Actionman2.default.fire('SelectChartType', this._key, chartType);
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend({}, _get(LegendPanelView.prototype.__proto__ || Object.getPrototypeOf(LegendPanelView.prototype), 'selectors', this), {
        key: '.legend-key',
        mode: '.edit-legend',
        select: '.select',
        colorSwitch: '.switch--color',
        chartTypeSwitch: '.switch--chart',
        axis: '.axis'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'change key': '_toggleKey',
        'click mode': '_toggleEditMode',
        'click select': '_toggleSelector',
        'click colorSwitch': '_selectColor',
        'click chartTypeSwitch': '_selectChartType'
      };
    }
  }]);

  return LegendPanelView;
}(_chartView2.default);

exports.default = LegendPanelView;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _LegendConfigModel = __webpack_require__(63);

var _LegendConfigModel2 = _interopRequireDefault(_LegendConfigModel);

var _ToggleVisibility = __webpack_require__(14);

var _ToggleVisibility2 = _interopRequireDefault(_ToggleVisibility);

var _legend = __webpack_require__(205);

var _legend2 = _interopRequireDefault(_legend);

__webpack_require__(181);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var LegendView = function (_ChartView) {
  _inherits(LegendView, _ChartView);

  function LegendView() {
    _classCallCheck(this, LegendView);

    return _possibleConstructorReturn(this, (LegendView.__proto__ || Object.getPrototypeOf(LegendView)).apply(this, arguments));
  }

  _createClass(LegendView, [{
    key: 'render',
    value: function render() {
      var template = this.config.get('template') || _legend2.default;
      var content = template(this.model.data);
      _get(LegendView.prototype.__proto__ || Object.getPrototypeOf(LegendView.prototype), 'render', this).call(this, content);
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _LegendConfigModel2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { ToggleVisibility: _ToggleVisibility2.default };
    }
  }, {
    key: 'isMaster',
    get: function get() {
      return false;
    }
  }]);

  return LegendView;
}(_chartView2.default);

exports.default = LegendView;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Array = __webpack_require__(0);

var d3Array = _interopRequireWildcard(_d3Array);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

__webpack_require__(25);

var _d3Shape = __webpack_require__(0);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _d3InterpolatePath = __webpack_require__(83);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _LineConfigModel = __webpack_require__(64);

var _LineConfigModel2 = _interopRequireDefault(_LineConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

__webpack_require__(182);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var LineView = function (_ChartView) {
  _inherits(LineView, _ChartView);

  function LineView() {
    _classCallCheck(this, LineView);

    return _possibleConstructorReturn(this, (LineView.__proto__ || Object.getPrototypeOf(LineView)).apply(this, arguments));
  }

  _createClass(LineView, [{
    key: 'getScreenX',
    value: function getScreenX(datum) {
      return this.config.xScale(_lodash2.default.get(datum, this.config.get('x.accessor')));
    }
  }, {
    key: 'getScreenY',
    value: function getScreenY(datum, yAccessor) {
      return this.config.yScale(_lodash2.default.get(datum, yAccessor));
    }
  }, {
    key: 'calculateScales',
    value: function calculateScales() {
      this.config.set('x.range', [this.padding.left, this.plotWidth - this.padding.right], { silent: true });
      this.config.set('y.range', [this.plotHeight - this.padding.bottom, this.padding.top], { silent: true });
      this.config.calculateScales(this.model);
    }
    /**
     * Draw a line path
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      _get(LineView.prototype.__proto__ || Object.getPrototypeOf(LineView.prototype), 'render', this).call(this);
      // frozen component is completely controlled from outside
      if (!this.config.get('frozen')) this.calculateScales();
      var data = this.model.data;
      var xAccessor = this.config.get('x.accessor');
      var accessor = this.config.get('y');
      var key = accessor.accessor;

      this._line = d3Shape.line().x(function (d) {
        return _this2.config.xScale(_lodash2.default.get(d, xAccessor));
      }).y(function (d) {
        return _this2.config.yScale(_lodash2.default.get(d, key));
      }).curve(this.config.get('curve'));

      var linePath = this.d3.selectAll(this.selectors.node).data(_lodash2.default.isEmpty(data) ? [] : [accessor], function (d) {
        return d.accessor;
      });

      linePath.enter().append('path').attr('class', 'line line-' + key).attr('d', this._line(data[0] || 0)).transition().ease(d3Ease.easeLinear).duration(this.config.get('duration')).attrTween('d', this._interpolate.bind(this, data, key)).attr('stroke', this.config.getColor());

      linePath.transition().ease(d3Ease.easeLinear).duration(this.config.get('duration')).attrTween('d', function (d, i, els) {
        var previous = els[i].getAttribute('d');
        var current = _this2._line(data);
        return (0, _d3InterpolatePath.interpolatePath)(previous, current);
      }).attr('stroke', this.config.getColor());
      linePath.exit().remove();

      this._ticking = false;
    }
    /**
     * Draw line along the path
     */

  }, {
    key: '_interpolate',
    value: function _interpolate(data, key) {
      var _this3 = this;

      var interpolate = d3Scale.scaleQuantile().domain([0, 1]).range(d3Array.range(1, data.length + 1));

      return function (t) {
        var interpolatedLine = data.slice(0, interpolate(t));
        return _this3._line(interpolatedLine);
      };
    }

    // Event handlers

  }, {
    key: '_onMouseover',
    value: function _onMouseover(d, el) {
      if (d.tooltip) {
        var _d3Selection$mouse = d3Selection.mouse(this._container),
            _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
            left = _d3Selection$mouse2[0],
            top = _d3Selection$mouse2[1];

        var xAccessor = this.config.get('x.accessor');
        var xVal = this.config.xScale.invert(left);
        var dataItem = this.model.getNearest(xAccessor, xVal);
        var tooltipConfig = { left: left, top: top, container: this._container };
        _Actionman2.default.fire('ToggleVisibility', d.tooltip, true, dataItem, tooltipConfig);
      }
      el.classList.add(this.selectorClass('active'));
    }
  }, {
    key: '_onMouseout',
    value: function _onMouseout() {
      var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var el = arguments[1];

      var tooltipId = d.tooltip || this.config.get('y.tooltip');
      if (!_lodash2.default.isEmpty(tooltipId)) _Actionman2.default.fire('ToggleVisibility', tooltipId, false);

      var els = el ? d3Selection.select(el) : this.d3.selectAll(this.selectors.node);
      els.classed('active', false);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 3;
    }
    /**
     * follow same naming convention for all XY chart sub views
     */

  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(LineView.prototype.__proto__ || Object.getPrototypeOf(LineView.prototype), 'selectors', this), {
        node: '.line'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'mouseover node': '_onMouseover',
        'mouseout node': '_onMouseout'
      };
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _LineConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }]);

  return LineView;
}(_chartView2.default);

exports.default = LineView;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _SendMessage = __webpack_require__(148);

var _SendMessage2 = _interopRequireDefault(_SendMessage);

var _ClearMessage = __webpack_require__(147);

var _ClearMessage2 = _interopRequireDefault(_ClearMessage);

var _message = __webpack_require__(206);

var _message2 = _interopRequireDefault(_message);

__webpack_require__(184);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MessageView = function (_ChartView) {
  _inherits(MessageView, _ChartView);

  function MessageView() {
    _classCallCheck(this, MessageView);

    return _possibleConstructorReturn(this, (MessageView.__proto__ || Object.getPrototypeOf(MessageView)).apply(this, arguments));
  }

  _createClass(MessageView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      _get(MessageView.prototype.__proto__ || Object.getPrototypeOf(MessageView.prototype), 'render', this).call(this);
      var messages = this.model.data.messages || [];
      var config = _lodash2.default.assignIn({
        action: 'update' // 'new', 'once', 'update'. future: 'dismiss', 'block'
      }, this.model.data);
      var template = this.config.get('template') || _message2.default;

      _lodash2.default.forEach(messages, function (msg) {
        _lodash2.default.assignIn(msg, {
          action: config.action,
          level: msg.level || 'default',
          iconLevel: _this2.selectors.icon[msg.level || 'default'],
          msgLevel: _this2.selectors.message[msg.level || 'default']
        });
      });

      // only messages with 'update' action should be updated
      var update = this.d3.selectAll(this.selectors.node).filter(function (d) {
        return d.action === 'update';
      }).data(messages, function (d) {
        return d.text;
      });
      var enter = update.enter().append('div').html(function (d) {
        return template(d);
      }).attr('class', function (d) {
        return _this2.selectorClass('node') + ' ' + d.msgLevel;
      });
      if (config.action === 'once') {
        enter.transition().duration(5000).style('opacity', 1e-06).remove();
      }
      update.exit().remove();
    }
    /**
     * Should remain the same on resize
     * @override
     */

  }, {
    key: '_onResize',
    value: function _onResize() {}
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(MessageView.prototype.__proto__ || Object.getPrototypeOf(MessageView.prototype), 'selectors', this), {
        node: '.message-row',
        message: {
          default: 'msg-default',
          info: 'msg-info',
          error: 'msg-error',
          warn: 'msg-warn'
        },
        icon: {
          default: 'fa-comment-o',
          info: 'fa-info-circle',
          error: 'fa-times-circle',
          warn: 'fa-exclamation-triangle'
        }
      });
    }
  }], [{
    key: 'Actions',
    get: function get() {
      return { SendMessage: _SendMessage2.default, ClearMessage: _ClearMessage2.default };
    }
  }, {
    key: 'isMaster',
    get: function get() {
      return false;
    }
  }]);

  return MessageView;
}(_chartView2.default);

exports.default = MessageView;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClearMessage = function (_Action) {
  _inherits(ClearMessage, _Action);

  function ClearMessage(p) {
    _classCallCheck(this, ClearMessage);

    var _this = _possibleConstructorReturn(this, (ClearMessage.__proto__ || Object.getPrototypeOf(ClearMessage)).call(this, p));

    _this._deny = false;
    return _this;
  }

  _createClass(ClearMessage, [{
    key: '_execute',
    value: function _execute(msgObj) {
      this._registrar.clear(msgObj);
    }
  }]);

  return ClearMessage;
}(_Action3.default);

exports.default = ClearMessage;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SendMessage = function (_Action) {
  _inherits(SendMessage, _Action);

  function SendMessage(p) {
    _classCallCheck(this, SendMessage);

    var _this = _possibleConstructorReturn(this, (SendMessage.__proto__ || Object.getPrototypeOf(SendMessage)).call(this, p));

    _this._deny = false;
    return _this;
  }

  _createClass(SendMessage, [{
    key: '_execute',
    value: function _execute(msgObj) {
      this._registrar.show(msgObj);
    }
  }]);

  return SendMessage;
}(_Action3.default);

exports.default = SendMessage;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Shape = __webpack_require__(0);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _PieConfigModel = __webpack_require__(67);

var _PieConfigModel2 = _interopRequireDefault(_PieConfigModel);

var _Serie = __webpack_require__(24);

var _Serie2 = _interopRequireDefault(_Serie);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

__webpack_require__(185);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Juniper Networks, Inc. All rights reserved.

var PieView = function (_ChartView) {
  _inherits(PieView, _ChartView);

  function PieView() {
    _classCallCheck(this, PieView);

    return _possibleConstructorReturn(this, (PieView.__proto__ || Object.getPrototypeOf(PieView)).apply(this, arguments));
  }

  _createClass(PieView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      _get(PieView.prototype.__proto__ || Object.getPrototypeOf(PieView.prototype), 'render', this).call(this);
      this._onMouseout();
      var serieConfig = this.config.get('serie');
      var radius = this.config.get('radius');
      var data = this.model.data;

      var arc = d3Shape.arc().outerRadius(radius).innerRadius(this.config.innerRadius);

      var stakes = d3Shape.pie().sort(null).value(function (d) {
        return serieConfig.getValue(d);
      })(data);

      this.d3.attr('transform', 'translate(' + this.width / 2 + ', ' + this.height / 2 + ')');

      var sectors = this.d3.selectAll(this.selectors.node).data(stakes, function (d) {
        return d.value;
      });

      sectors.enter().append('path').classed(this.selectorClass('node'), true).style('fill', function (d) {
        return _this2.config.getColor(d.data);
      }).merge(sectors).classed(this.selectorClass('interactive'), this.config.hasAction('node')).attr('d', arc).transition().ease(d3Ease.easeLinear).duration(this.config.get('duration')).style('fill', function (d) {
        return _this2.config.getColor(d.data);
      });

      sectors.exit().remove();

      this._showLegend();
      this._ticking = false;
    }
    /**
     * Prepare data for legend component if any
     */

  }, {
    key: '_showLegend',
    value: function _showLegend() {
      var _this3 = this;

      var legendId = this.config.get('legend');
      if (!legendId) return;

      var serieConfig = this.config.get('serie');
      var data = _lodash2.default.map(this.model.data, function (serie) {
        return {
          label: _this3.config.getLabel(serie, serieConfig),
          color: _this3.config.getColor(serie)
        };
      });
      _Actionman2.default.fire('ToggleVisibility', legendId, true, data);
    }

    // Event handlers

  }, {
    key: '_onMouseover',
    value: function _onMouseover(d, el, event) {
      var radius = this.config.get('radius');
      var highlightArc = d3Shape.arc(d).innerRadius(radius).outerRadius(radius * 1.06).startAngle(d.startAngle).endAngle(d.endAngle);
      this.d3.append('path').classed('arc', true).classed(this.selectorClass('highlight'), true).attr('d', highlightArc).style('fill', this.config.getColor(d.data));
    }
  }, {
    key: '_onMousemove',
    value: function _onMousemove(d, el, event) {
      var tooltipId = this.config.get('tooltip');
      if (tooltipId) {
        var _d3Selection$mouse = d3Selection.mouse(this._container),
            _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
            left = _d3Selection$mouse2[0],
            top = _d3Selection$mouse2[1];

        var tooltipConfig = { left: left, top: top, container: this._container };
        _Actionman2.default.fire('ToggleVisibility', tooltipId, true, d.data, tooltipConfig);
      }
    }
  }, {
    key: '_onMouseout',
    value: function _onMouseout(d, el) {
      this.d3.selectAll(this.selectors.highlight).remove();
      _Actionman2.default.fire('ToggleVisibility', this.config.get('tooltip'), false);
    }
  }, {
    key: '_onClickNode',
    value: function _onClickNode(d, el, e) {
      this._onMouseout(d, el);
      _get(PieView.prototype.__proto__ || Object.getPrototypeOf(PieView.prototype), '_onEvent', this).call(this, d, el, e);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
    /**
     * follow same naming convention for all charts
     */

  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(PieView.prototype.__proto__ || Object.getPrototypeOf(PieView.prototype), 'selectors', this), {
        node: '.arc',
        highlight: '.highlight'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return _lodash2.default.extend(_get(PieView.prototype.__proto__ || Object.getPrototypeOf(PieView.prototype), 'events', this), {
        'click node': '_onClickNode',
        'mouseover node': '_onMouseover',
        'mousemove node': '_onMousemove',
        'mouseout node': '_onMouseout'
      });
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _PieConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _Serie2.default;
    }
  }]);

  return PieView;
}(_chartView2.default);

exports.default = PieView;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _d3Shape = __webpack_require__(0);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _RadialAxisConfigModel = __webpack_require__(68);

var _RadialAxisConfigModel2 = _interopRequireDefault(_RadialAxisConfigModel);

__webpack_require__(186);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadialAxisView = function (_ChartView) {
  _inherits(RadialAxisView, _ChartView);

  _createClass(RadialAxisView, null, [{
    key: 'Config',
    get: function get() {
      return _RadialAxisConfigModel2.default;
    }
  }]);

  function RadialAxisView() {
    var _ref;

    _classCallCheck(this, RadialAxisView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = RadialAxisView.__proto__ || Object.getPrototypeOf(RadialAxisView)).call.apply(_ref, [this].concat(args)));

    _this.render();
    return _this;
  }

  _createClass(RadialAxisView, [{
    key: 'render',


    /**
     * Axis is rendered outside the container inner (width * height) area on margins
     */
    value: function render() {
      var _this2 = this;

      var scale = this.config.scale;
      if (!scale) return;
      _get(RadialAxisView.prototype.__proto__ || Object.getPrototypeOf(RadialAxisView.prototype), 'render', this).call(this);

      this.d3.attr('transform', 'translate(' + this.radius + ', ' + this.radius + ')').classed(this.config.name, true);

      if (this.config.position === 'radial') {
        var radialTickValues = scale.ticks(this.config.get('ticks'));
        var radialAxisTicks = this.d3.selectAll('.tick').data(radialTickValues);
        var radialAxisTicksEnter = radialAxisTicks.enter().append('g').attr('class', 'tick');
        radialAxisTicksEnter.append('circle').attr('r', function (d) {
          return scale(d);
        });
        radialAxisTicksEnter.append('text').text(function (d) {
          return d;
        }).attr('dy', function (d) {
          return -scale(d);
        });
        var radialAxisTicksEdit = radialAxisTicks.transition().ease(d3Ease.easeLinear).duration(this.config.get('duration'));
        radialAxisTicksEdit.select('circle').attr('r', function (d) {
          return scale(d);
        });
        radialAxisTicksEdit.select('text').text(function (d) {
          return d;
        }).attr('dy', function (d) {
          return -scale(d);
        });
        radialAxisTicks.exit().remove();
      }
      if (this.config.position === 'angular') {
        var angularTickValues = scale.ticks(this.config.get('ticks'));
        var angularTickLines = [];
        _lodash2.default.each(angularTickValues, function (a) {
          _lodash2.default.each(_this2.config.get('otherAxisScales'), function (otherScale) {
            var line = {
              value: a,
              points: [{ angle: scale(a), r: otherScale.range()[0] }, { angle: scale(a), r: otherScale.range()[1] }]
            };
            angularTickLines.push(line);
          });
        });
        // Remove last angular tick as it is the same as first.
        if (this.config.get('removeLastAngularTick') && angularTickLines.length) {
          for (var i = 0; i < this.config.get('otherAxisScales').length; i++) {
            angularTickLines.pop();
          }
        }
        var radialAxisLine = d3Shape.radialLine().angle(function (p) {
          return p.angle;
        }).radius(function (p) {
          return p.r;
        }).curve(d3Shape.curveLinear);
        var radialAxisPath = this.d3.selectAll('.tick').data(angularTickLines);
        var radialAxisPathEnter = radialAxisPath.enter().append('g').attr('class', 'tick');
        radialAxisPathEnter.append('path').attr('d', function (d) {
          return radialAxisLine(d.points);
        });
        radialAxisPathEnter.append('text').attr('x', function (d) {
          return Math.cos(d.points[0].angle - Math.PI / 2) * (d.points[1].r + 10);
        }).attr('y', function (d) {
          return Math.sin(d.points[0].angle - Math.PI / 2) * (d.points[1].r + 10);
        }).text(function (d) {
          return d.value;
        });
        var radialAxisPathEdit = radialAxisPath.transition().ease(d3Ease.easeLinear).duration(this.config.get('duration'));
        radialAxisPathEdit.select('path').attr('d', function (d) {
          return radialAxisLine(d.points);
        });
        radialAxisPathEdit.select('text').attr('x', function (d) {
          return Math.cos(d.points[0].angle - Math.PI / 2) * (d.points[1].r + 10);
        }).attr('y', function (d) {
          return Math.sin(d.points[0].angle - Math.PI / 2) * (d.points[1].r + 10);
        }).text(function (d) {
          return d.value;
        });
        radialAxisPath.exit().remove();
      }
      // TODO this._renderLabel()
      this._ticking = false;
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 0;
    }

    /**
     * follow same naming convention for all XY chart sub views
     */

  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(RadialAxisView.prototype.__proto__ || Object.getPrototypeOf(RadialAxisView.prototype), 'selectors', this), {
        node: '.radial-axis',
        label: '.axis-label',
        tick: '.tick'
      });
    }
  }, {
    key: 'height',
    get: function get() {
      return this.config.get('height') || this.width;
    }
  }, {
    key: 'radius',
    get: function get() {
      return Math.min(this.innerWidth, this.innerHeight) / 2;
    }
  }]);

  return RadialAxisView;
}(_chartView2.default);

exports.default = RadialAxisView;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Array = __webpack_require__(0);

var d3Array = _interopRequireWildcard(_d3Array);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

__webpack_require__(25);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _RadialBarConfigModel = __webpack_require__(69);

var _RadialBarConfigModel2 = _interopRequireDefault(_RadialBarConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

__webpack_require__(187);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RadialBarView = function (_ChartView) {
  _inherits(RadialBarView, _ChartView);

  _createClass(RadialBarView, null, [{
    key: 'Config',
    get: function get() {
      return _RadialBarConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }]);

  function RadialBarView() {
    var _ref;

    _classCallCheck(this, RadialBarView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = RadialBarView.__proto__ || Object.getPrototypeOf(RadialBarView)).call.apply(_ref, [this].concat(args)));

    _this.listenTo(_this.model, 'change', _this.render);
    return _this;
  }

  _createClass(RadialBarView, [{
    key: 'render',


    /**
     * Draw radial bars
     */
    value: function render() {
      _get(RadialBarView.prototype.__proto__ || Object.getPrototypeOf(RadialBarView.prototype), 'render', this).call(this);
      this.config.calculateScales(this.model, this.innerWidth, this.innerHeight);

      this.d3.attr('transform', 'translate(' + this.radius + ', ' + this.radius + ')');

      // Create a flat data structure
      // TODO handle multiple accessors
      var numOfAccessors = 1;
      var bandWidthHalf = this.bandWidth / 2;
      this._innerBandScale = d3Scale.scaleBand().domain(d3Array.range(numOfAccessors)).range([-bandWidthHalf, bandWidthHalf]).paddingInner(0.05).paddingOuter(0.05);
      // Render the flat data structure
      var flatData = this._prepareData();
      var svgBarGroups = this.d3.selectAll(this.selectors.node).data(flatData, function (d) {
        return d.id;
      });
      svgBarGroups.enter().append('path').attr('class', 'bar').attr('d', this._createEnterRadialBarPath).merge(svgBarGroups).transition().ease(d3Ease.easeLinear).duration(this.config.get('duration')).attr('fill', function (d) {
        return d.color;
      }).attr('d', this._createRadialBarPath);
      svgBarGroups.exit().remove();

      this._ticking = false;
    }
  }, {
    key: '_createRadialBarPath',
    value: function _createRadialBarPath(d) {
      var halfPI = Math.PI / 2;
      var x1 = Math.cos(d.angle - halfPI) * d.rStart;
      var y1 = Math.sin(d.angle - halfPI) * d.rStart;
      var x2 = Math.cos(d.angle - halfPI) * d.rEnd;
      var y2 = Math.sin(d.angle - halfPI) * d.rEnd;
      var x3 = Math.cos(d.angle + d.bandAngle - halfPI) * d.rEnd;
      var y3 = Math.sin(d.angle + d.bandAngle - halfPI) * d.rEnd;
      var x4 = Math.cos(d.angle + d.bandAngle - halfPI) * d.rStart;
      var y4 = Math.sin(d.angle + d.bandAngle - halfPI) * d.rStart;
      return 'M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2 + 'L' + x3 + ',' + y3 + 'L' + x4 + ',' + y4 + 'Z';
    }
  }, {
    key: '_createEnterRadialBarPath',
    value: function _createEnterRadialBarPath(d) {
      var halfPI = Math.PI / 2;
      var x1 = Math.cos(d.angle - halfPI) * d.rStart;
      var y1 = Math.sin(d.angle - halfPI) * d.rStart;
      var x4 = Math.cos(d.angle + d.bandAngle - halfPI) * d.rStart;
      var y4 = Math.sin(d.angle + d.bandAngle - halfPI) * d.rStart;
      return 'M' + x1 + ',' + y1 + 'L' + x1 + ',' + y1 + 'L' + x4 + ',' + y4 + 'L' + x4 + ',' + y4 + 'Z';
    }
  }, {
    key: '_prepareData',
    value: function _prepareData() {
      var _this2 = this;

      var flatData = [];
      var innerBandWidth = this._innerBandScale.bandwidth();
      var radialAccessors = this.config.radialAccessors;
      _lodash2.default.each(this.model.data, function (d) {
        var angularAccessor = _lodash2.default.get(d, _this2.config.get('angular.accessor'));
        _lodash2.default.each(radialAccessors, function (radialAccessor, j) {
          var key = radialAccessor.accessor;
          var obj = {
            id: angularAccessor + '-' + key,
            angle: _this2.config.angularScale(angularAccessor) + _this2._innerBandScale(j),
            bandAngle: innerBandWidth,
            rStart: _this2.config.radialScale.range()[0],
            rEnd: _this2.config.radialScale(_lodash2.default.get(d, key)),
            color: _this2.config.getColor(radialAccessor, d),
            data: d
          };
          flatData.push(obj);
        });
      });
      return flatData;
    }

    // Event handlers

  }, {
    key: '_onMouseover',
    value: function _onMouseover(d, el) {
      if (d.tooltip) {
        var _d3Selection$mouse = d3Selection.mouse(this._container),
            _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
            left = _d3Selection$mouse2[0],
            top = _d3Selection$mouse2[1];

        var angularAccessor = this.config.get('angular.accessor');
        var angularVal = this.config.angularScale.invert(left);
        var dataItem = this.model.getNearest(angularAccessor, angularVal);
        _Actionman2.default.fire('ToggleVisibility', d.tooltip, true, { left: left, top: top }, dataItem);
      }
      el.classList.add(this.selectorClass('active'));
    }
  }, {
    key: '_onMouseout',
    value: function _onMouseout() {
      var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var el = arguments[1];

      var tooltipId = d.tooltip || this.config.get('radial.tooltip');
      if (!_lodash2.default.isEmpty(tooltipId)) _Actionman2.default.fire('ToggleVisibility', tooltipId, false);

      var els = el ? d3Selection.select(el) : this.d3.selectAll(this.selectors.node);
      els.classed('active', false);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 3;
    }
    /**
     * follow same naming convention for all XY chart sub views
     */

  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(RadialBarView.prototype.__proto__ || Object.getPrototypeOf(RadialBarView.prototype), 'selectors', this), {
        node: '.bar'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'mouseover node': '_onMouseover',
        'mouseout node': '_onMouseout'
      };
    }
  }, {
    key: 'height',
    get: function get() {
      return this.config.get('height') || this.width;
    }
  }, {
    key: 'radius',
    get: function get() {
      return Math.min(this.innerWidth, this.innerHeight) / 2;
    }
  }, {
    key: 'bandWidth',
    get: function get() {
      var data = this.model.data;
      if (_lodash2.default.isEmpty(data)) return 0;
      var paddedPart = 1 - this.config.get('barPadding') / 100;
      // TODO do not use model.data.length as there can be gaps
      // or fill the gaps in it beforehand
      var angularScale = this.config.angularScale;
      return (angularScale.range()[1] - angularScale.range()[0]) / data.length * paddedPart;
    }
  }]);

  return RadialBarView;
}(_chartView2.default);

exports.default = RadialBarView;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Array = __webpack_require__(0);

var d3Array = _interopRequireWildcard(_d3Array);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

__webpack_require__(25);

var _d3Shape = __webpack_require__(0);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _d3InterpolatePath = __webpack_require__(83);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _RadialLineConfigModel = __webpack_require__(70);

var _RadialLineConfigModel2 = _interopRequireDefault(_RadialLineConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

__webpack_require__(188);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RadialLineView = function (_ChartView) {
  _inherits(RadialLineView, _ChartView);

  _createClass(RadialLineView, null, [{
    key: 'Config',
    get: function get() {
      return _RadialLineConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }]);

  function RadialLineView() {
    var _ref;

    _classCallCheck(this, RadialLineView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = RadialLineView.__proto__ || Object.getPrototypeOf(RadialLineView)).call.apply(_ref, [this].concat(args)));

    _this.listenTo(_this.model, 'change', _this.render);
    return _this;
  }

  _createClass(RadialLineView, [{
    key: 'render',


    /**
     * Draw a line path
     */
    value: function render() {
      var _this2 = this;

      _get(RadialLineView.prototype.__proto__ || Object.getPrototypeOf(RadialLineView.prototype), 'render', this).call(this);
      var data = this.model.data;
      var angularAccessor = this.config.get('angular.accessor');
      var accessor = this.config.get('radial');
      var key = accessor.accessor;
      this.config.calculateScales(this.model, this.innerWidth, this.innerHeight);

      this._line = d3Shape.radialLine().angle(function (d) {
        return _this2.config.angularScale(_lodash2.default.get(d, angularAccessor));
      }).radius(function (d) {
        return _this2.config.radialScale(_lodash2.default.get(d, key));
      }).curve(this.config.get('curve'));

      var linePath = this.d3.selectAll(this.selectors.node).data(_lodash2.default.isEmpty(data) ? [] : [accessor], function (d) {
        return d.accessor;
      });

      this.d3.attr('transform', 'translate(' + this.radius + ', ' + this.radius + ')');

      linePath.enter().append('path').attr('class', 'line line-' + key).attr('d', this._line(data[0] || 0)).transition().ease(d3Ease.easeLinear).duration(this.config.get('duration')).attrTween('d', this._interpolate.bind(this, data, key)).attr('stroke', this.config.getColor());

      linePath.transition().ease(d3Ease.easeLinear).duration(this.config.get('duration')).attrTween('d', function (d, i, els) {
        var previous = els[i].getAttribute('d');
        var current = _this2._line(data);
        return (0, _d3InterpolatePath.interpolatePath)(previous, current);
      }).attr('stroke', this.config.getColor());
      linePath.exit().remove();

      this._ticking = false;
    }
    /**
     * Draw line along the path
     */

  }, {
    key: '_interpolate',
    value: function _interpolate(data, key) {
      var _this3 = this;

      var interpolate = d3Scale.scaleQuantile().domain([0, 1]).range(d3Array.range(1, data.length + 1));

      return function (t) {
        var interpolatedLine = data.slice(0, interpolate(t));
        return _this3._line(interpolatedLine);
      };
    }

    // Event handlers

  }, {
    key: '_onMouseover',
    value: function _onMouseover(d, el) {
      if (d.tooltip) {
        var _d3Selection$mouse = d3Selection.mouse(this._container),
            _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
            left = _d3Selection$mouse2[0],
            top = _d3Selection$mouse2[1];

        var angularAccessor = this.config.get('angular.accessor');
        var angularVal = this.config.angularScale.invert(left);
        var dataItem = this.model.getNearest(angularAccessor, angularVal);
        _Actionman2.default.fire('ToggleVisibility', d.tooltip, true, { left: left, top: top }, dataItem);
      }
      el.classList.add(this.selectorClass('active'));
    }
  }, {
    key: '_onMouseout',
    value: function _onMouseout() {
      var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var el = arguments[1];

      var tooltipId = d.tooltip || this.config.get('radial.tooltip');
      if (!_lodash2.default.isEmpty(tooltipId)) _Actionman2.default.fire('ToggleVisibility', tooltipId, false);

      var els = el ? d3Selection.select(el) : this.d3.selectAll(this.selectors.node);
      els.classed('active', false);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 3;
    }
    /**
     * follow same naming convention for all XY chart sub views
     */

  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(RadialLineView.prototype.__proto__ || Object.getPrototypeOf(RadialLineView.prototype), 'selectors', this), {
        node: '.line'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'mouseover node': '_onMouseover',
        'mouseout node': '_onMouseout'
      };
    }
  }, {
    key: 'height',
    get: function get() {
      return this.config.get('height') || this.width;
    }
  }, {
    key: 'radius',
    get: function get() {
      return Math.min(this.innerWidth, this.innerHeight) / 2;
    }
  }]);

  return RadialLineView;
}(_chartView2.default);

exports.default = RadialLineView;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Hierarchy = __webpack_require__(0);

var d3Hierarchy = _interopRequireWildcard(_d3Hierarchy);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Shape = __webpack_require__(0);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _RadialDendrogramConfigModel = __webpack_require__(71);

var _RadialDendrogramConfigModel2 = _interopRequireDefault(_RadialDendrogramConfigModel);

var _Serie = __webpack_require__(24);

var _Serie2 = _interopRequireDefault(_Serie);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _SelectColor = __webpack_require__(15);

var _SelectColor2 = _interopRequireDefault(_SelectColor);

var _SelectKey = __webpack_require__(16);

var _SelectKey2 = _interopRequireDefault(_SelectKey);

__webpack_require__(189);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016 Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RadialDendrogramView = function (_ChartView) {
  _inherits(RadialDendrogramView, _ChartView);

  function RadialDendrogramView() {
    _classCallCheck(this, RadialDendrogramView);

    return _possibleConstructorReturn(this, (RadialDendrogramView.__proto__ || Object.getPrototypeOf(RadialDendrogramView)).apply(this, arguments));
  }

  _createClass(RadialDendrogramView, [{
    key: 'render',
    value: function render() {
      this._calculateDimensions();
      this._prepareHierarchy();
      _get(RadialDendrogramView.prototype.__proto__ || Object.getPrototypeOf(RadialDendrogramView.prototype), 'render', this).call(this);
      this._render();
      this._showLegend();
      this._ticking = false;
    }
  }, {
    key: '_calculateDimensions',
    value: function _calculateDimensions() {
      if (!this.config.get('innerRadius')) {
        this.config.set({ 'innerRadius': Math.min(this.innerWidth, this.innerHeight) / 2 }, { silent: true });
      }
    }

    /**
    * Build the root node tree structure that will be the input for the d3.hierarchy() layout.
    * We build one more level than configured in order to allow branching of the last configured level.
    */

  }, {
    key: '_prepareRootNode',
    value: function _prepareRootNode() {
      var _this2 = this;

      var data = this.model.data;
      var hierarchyConfig = this.config.get('hierarchyConfig');
      var leafNodes = [];
      this._maxDepth = 0;
      // The root node of the hierarchy (tree) we are building.
      this._rootNode = {
        name: 'root',
        children: []
      };
      this._valueSum = 0;
      _lodash2.default.each(data, function (d, index) {
        // Parsing a data element should return a 2 element array: [source, destination]
        var leafs = hierarchyConfig.parse(d);
        if (leafs[0].value <= 0 || leafs[1].value <= 0) {
          return;
        }
        // Check if we havent already created a node pair (link) with the same id.
        var foundLeafNode = _lodash2.default.find(leafNodes, function (leafNode) {
          var found = false;
          if (leafNode.id === leafs[0].id) {
            if (leafNode.otherNode.id === leafs[1].id) {
              found = true;
            }
          }
          if (leafNode.id === leafs[1].id) {
            if (leafNode.otherNode.id === leafs[0].id) {
              found = true;
            }
          }
          return found;
        });
        if (foundLeafNode) {
          foundLeafNode.value += foundLeafNode.id === leafs[0].id ? leafs[0].value : leafs[1].value;
          foundLeafNode.otherNode.value += foundLeafNode.otherNode.id === leafs[0].id ? leafs[0].value : leafs[1].value;
          _this2._valueSum += leafs[0].value + leafs[1].value;
        } else {
          _lodash2.default.each(leafs, function (leaf, i) {
            // leaf node contains an array of 'names' (ie. the path from root to leaf) and a 'value'
            var children = _this2._rootNode.children;
            var node = null;
            var namePath = [];
            _lodash2.default.each(leaf.names, function (name, depth) {
              _this2._maxDepth = Math.max(_this2._maxDepth, depth + 1);
              if (depth >= _this2.config.get('drillDownLevel')) {
                return;
              }
              namePath.push(name);
              node = _lodash2.default.find(children, function (child) {
                return child.name === name;
              });
              if (!node) {
                node = {
                  name: name,
                  namePath: namePath.slice(0),
                  children: [],
                  level: depth + 1
                };
                children.push(node);
              }
              children = node.children;
            });
            // Now 'node' is one before leaf
            var leafNode = {
              id: leaf.id,
              otherNode: i === 0 ? leafs[1] : leafs[0],
              value: leaf.value,
              type: i === 0 ? 'src' : 'dst',
              linkId: leafs[0].id + '-' + leafs[1].id
            };
            node.children.push(leafNode);
            _this2._valueSum += leafNode.value;
            leafNodes.push(leafNode);
          });
        }
      });
    }
  }, {
    key: '_prepareHierarchyRootNode',
    value: function _prepareHierarchyRootNode() {
      var valueScale = this.config.get('valueScale').domain([0.01, this._valueSum]).range([0, 360]);
      this._hierarchyRootNode = d3Hierarchy.hierarchy(this._rootNode).sum(function (d) {
        return valueScale(d.value);
      }).sort(function (a, b) {
        return b.value - a.value;
      });
    }
  }, {
    key: '_prepareLinks',
    value: function _prepareLinks() {
      var _this3 = this;

      this._links = [];
      var i = 0;
      var leaves = this._hierarchyRootNode.leaves();
      _lodash2.default.each(leaves, function (leaf, leafIndex) {
        for (i = leafIndex + 1; i < leaves.length; i++) {
          if (leaf.data.linkId === leaves[i].data.linkId) {
            _this3._links.push(leaf.path(leaves[i]));
          }
        }
      });
    }
  }, {
    key: '_prepareCluster',
    value: function _prepareCluster() {
      var _this4 = this;

      var extraPaddingPerDepth = _lodash2.default.fill(_lodash2.default.range(this.config.get('drillDownLevel') + 1), 0);
      // Create the cluster layout.
      var cluster = d3Hierarchy.cluster().size([360, this.config.get('innerRadius')]).separation(function (a, b) {
        var distance = (a.value + b.value) / 2;
        if (a.parent !== b.parent) {
          // Count how many ancestors differ the two nodes.
          var aAncestors = a.ancestors();
          var bAncestors = b.ancestors();
          var differences = Math.max(0, _lodash2.default.difference(aAncestors, bAncestors).length - _this4.config.get('parentSeparationDepthThreshold'));
          var extraPadding = _this4.config.get('parentSeparation') * differences * _this4._hierarchyRootNode.value / 360;
          distance += extraPadding;
          extraPaddingPerDepth[a.depth] += extraPadding;
        }
        return distance;
      });
      cluster(this._hierarchyRootNode);
    }
  }, {
    key: '_prepareCircles',
    value: function _prepareCircles() {
      var _this5 = this;

      this._circles = [];
      var radiusScale = d3Scale.scaleLinear().domain([0, this.config.get('drillDownLevel')]).range([0, this.config.get('innerRadius')]).clamp(true);
      this._hierarchyRootNode.each(function (n) {
        if (!n.parent || !n.children) {
          return;
        }
        n.y = radiusScale(n.depth);
        if (_this5._circles.length === n.depth) {
          _this5._circles[n.depth] = { r: n.y };
        }
      });
    }

    /**
    * Positions the arcs.
    */

  }, {
    key: '_prepareAngleRanges',
    value: function _prepareAngleRanges() {
      var _this6 = this;

      var depthValueOffset = [0];
      this._hierarchyRootNode.angleRange = [0, 360];
      this._hierarchyRootNode.valueRange = [0, this._hierarchyRootNode.value];
      this._hierarchyRootNode.angleScale = d3Scale.scaleLinear().domain(this._hierarchyRootNode.valueRange).range(this._hierarchyRootNode.angleRange);
      this._hierarchyRootNode.each(function (n) {
        if (!n.parent) {
          return;
        }
        if (depthValueOffset.length <= n.depth) {
          depthValueOffset.push(0);
        }
        var minValue = depthValueOffset[n.depth];
        var maxValue = minValue + n.value;
        depthValueOffset[n.depth] = maxValue;
        n.valueRange = [minValue, maxValue];
        var minAngle = n.parent.angleScale(minValue);
        var maxAngle = n.parent.angleScale(maxValue);
        // Shrink the angle range in order to create padding between nodes.
        n.separationValue = 0;
        if (n.depth < _this6.config.get('parentSeparationDepthThreshold')) {
          n.separationValue = _this6.config.get('parentSeparationShrinkFactor') * (maxAngle - minAngle) / 2;
        }
        minAngle += n.separationValue;
        maxAngle -= n.separationValue;
        n.angleRange = [minAngle, maxAngle];
        n.angleScale = d3Scale.scaleLinear().domain(n.valueRange).range(n.angleRange);
      });
      // Now shrink the parent nodes by the amount of sepration added to children.
      this._hierarchyRootNode.each(function (n) {
        if (!n.parent) {
          return;
        }
        var separationValueOfChildren = 0;
        _lodash2.default.each(n.descendants(), function (child) {
          separationValueOfChildren += child.separationValue;
        });
        n.angleRange[0] += separationValueOfChildren;
        n.angleRange[1] -= separationValueOfChildren;
        n.angleScale = d3Scale.scaleLinear().domain(n.valueRange).range(n.angleRange);
      });
    }

    /**
    * Prepares the connections. A connection consists of a path:
    * - starting from the leaf of the outer edge of the ribbon
    * - moving to just before the root
    * - leaf of the outer edge of the target arc
    * - inner edge to just before the root
    * - inner edge of the source leaf arc.
    */

  }, {
    key: '_prepareRibbons',
    value: function _prepareRibbons() {
      var _this7 = this;

      this._ribbons = [];
      _lodash2.default.each(this._links, function (link) {
        var src = link[0];
        var dst = link[link.length - 1];
        var srcAncestors = src.ancestors();
        var dstAncestors = dst.ancestors();
        var outerPoints = [];
        // Outer edge from source leaf to root.
        _lodash2.default.each(srcAncestors, function (n, i) {
          if (n.parent && n.children) {
            var valueStart = n.valueRange[0];
            if (n.children) {
              var found = false;
              var leaves = n.leaves();
              _lodash2.default.each(leaves, function (child) {
                if (child === src) {
                  found = true;
                }
                if (!found) {
                  valueStart += child.valueRange[1] - child.valueRange[0];
                }
              });
              if (!found) {
                console.error('Ribbon connection (outer edge from source leaf to root) never found.');
              }
            }
            outerPoints.push([n.angleScale(valueStart), n.y]);
          }
        });
        // Outer edge from root to target leaf.
        var i = 0;
        for (i = dstAncestors.length - 1; i >= 0; i--) {
          var n = dstAncestors[i];
          if (n.parent && n.children) {
            var valueStart = n.valueRange[1];
            if (n.children) {
              var found = false;
              var ci = 0;
              var leaves = n.leaves();
              for (ci = leaves.length - 1; ci >= 0; ci--) {
                var child = leaves[ci];
                if (child === dst) {
                  found = true;
                }
                if (!found) {
                  valueStart -= child.valueRange[1] - child.valueRange[0];
                }
              }
              if (!found) {
                console.error('Ribbon connection (outer edge from root to target leaf) never found.');
              }
            }
            outerPoints.push([n.angleScale(valueStart), n.y]);
          }
        }
        // Inner edge from target leaf to root.
        var innerPoints = [];
        _lodash2.default.each(dstAncestors, function (n, i) {
          if (n.parent && n.children) {
            var _valueStart = n.valueRange[0];
            if (n.children) {
              var _found = false;
              var _leaves = n.leaves();
              _lodash2.default.each(_leaves, function (child) {
                if (child === dst) {
                  _found = true;
                }
                if (!_found) {
                  _valueStart += child.valueRange[1] - child.valueRange[0];
                }
              });
              if (!_found) {
                console.error('Ribbon connection (inner edge from target leaf to root) never found.');
              }
            }
            innerPoints.push([n.angleScale(_valueStart), n.y]);
          }
        });
        // Inner edge from root to source leaf.
        for (i = srcAncestors.length - 1; i >= 0; i--) {
          var _n = srcAncestors[i];
          if (_n.parent && _n.children) {
            var _valueStart2 = _n.valueRange[1];
            if (_n.children) {
              var _found2 = false;
              var _ci = 0;
              var _leaves2 = _n.leaves();
              for (_ci = _leaves2.length - 1; _ci >= 0; _ci--) {
                var _child = _leaves2[_ci];
                if (_child === src) {
                  _found2 = true;
                }
                if (!_found2) {
                  _valueStart2 -= _child.valueRange[1] - _child.valueRange[0];
                }
              }
              if (!_found2) {
                console.error('Ribbon connection (inner edge from root to source leaf) never found.');
              }
            }
            innerPoints.push([_n.angleScale(_valueStart2), _n.y]);
          }
        }
        _this7._ribbons.push({
          outerPoints: outerPoints,
          innerPoints: innerPoints,
          id: src.data.linkId
        });
      });
    }
  }, {
    key: '_prepareArcs',
    value: function _prepareArcs() {
      var _this8 = this;

      this._arcs = [];
      this._hierarchyRootNode.each(function (n) {
        if (!n.parent || !n.children) {
          return;
        }
        // Estimate arc length and wheather the label will fit (default letter width is assumed to be 5px).
        n.arcLength = 6 * (n.y - _this8.config.get('arcLabelYOffset')) * (n.angleRange[1] - n.angleRange[0]) / 360;
        n.label = '' + n.data.namePath[n.data.namePath.length - 1];
        n.labelFits = _this8.config.get('arcLabelLetterWidth') * n.label.length < n.arcLength;
        if (_this8.config.get('labelFlow') === 'perpendicular') {
          n.labelFits = n.arcLength > 9 && _this8.config.get('innerRadius') / _this8.config.get('drillDownLevel') - _this8.config.get('arcLabelYOffset') > _this8.config.get('arcLabelLetterWidth') * n.label.length;
        }
        _this8._arcs.push(n);
      });
    }
  }, {
    key: '_prepareHierarchy',
    value: function _prepareHierarchy() {
      this._prepareRootNode();
      this._prepareHierarchyRootNode();
      this._prepareLinks();
      this._prepareCluster();
      this._prepareCircles();
      this._prepareAngleRanges();
      this._prepareRibbons();
      this._prepareArcs();
    }
  }, {
    key: '_render',
    value: function _render() {
      var _this9 = this;

      this.d3.attr('transform', 'translate(' + this.width / 2 + ', ' + this.height / 2 + ')');
      // Circles
      var svgCircles = this.d3.selectAll('.circle').data(this._circles);
      svgCircles.enter().append('circle').attr('class', 'circle').attr('r', 0).merge(svgCircles).attr('r', function (d) {
        return d.r + 1;
      });
      svgCircles.exit().remove();

      if (this.config.get('drawLinks')) {
        // Links
        var radialLine = d3Shape.radialLine().angle(function (d) {
          return d.x / 180 * Math.PI;
        }).radius(function (d) {
          return d.y;
        }).curve(this.config.get('curve'));
        var svgLinks = this.d3.selectAll(this.selectors.link).data(this._links);
        svgLinks.enter().append('path').attr('class', function (d) {
          return 'link ' + d[0].data.id;
        }).classed(this.selectorClass('interactive'), this.config.hasAction('node')).style('stroke-width', 0).attr('d', function (d) {
          return radialLine(d[0]);
        }).merge(svgLinks).style('stroke-width', function (d) {
          return d[0].y * Math.sin((d[0].angleRange[1] - d[0].angleRange[0]) * Math.PI / 180) + 'px';
        }).attr('d', radialLine);
      }
      if (this.config.get('drawRibbons')) {
        // Ribbons
        var _radialLine = d3Shape.radialLine().angle(function (d) {
          return d[0] / 180 * Math.PI;
        }).radius(function (d) {
          return d[1];
        }).curve(this.config.get('curve'));
        var _svgLinks = this.d3.selectAll(this.selectors.ribbon).data(this._ribbons, function (d) {
          return d.id;
        });
        _svgLinks.enter().append('path').attr('class', function (d) {
          return 'ribbon' + (d.active ? ' active' : '');
        }).merge(_svgLinks).attr('class', function (d) {
          return 'ribbon' + (d.active ? ' active' : '');
        }).classed(this.selectorClass('interactive'), this.config.hasAction('link')).attr('d', function (d) {
          var outerPath = _radialLine(d.outerPoints);
          var innerPath = _radialLine(d.innerPoints);
          var innerStitch = 'A' + d.outerPoints[0][1] + ' ' + d.outerPoints[0][1] + ' 0 0 0 ';
          var endingStitch = 'A' + d.outerPoints[0][1] + ' ' + d.outerPoints[0][1] + ' 0 0 0 ' + _radialLine([d.outerPoints[0]]).substr(1);
          return outerPath + innerStitch + innerPath.substr(1) + endingStitch;
        });
        _svgLinks.exit().remove();

        // Arc labels
        var arcLabelsAlongArcData = this.config.get('labelFlow') === 'along-arc' ? this._arcs : [];
        var arcLabelsPerpendicularData = this.config.get('labelFlow') === 'perpendicular' ? this._arcs : [];
        // Along Arc
        var svgArcLabels = this.d3.selectAll('.arc-label.along-arc').data(arcLabelsAlongArcData);
        var svgArcLabelsEnter = svgArcLabels.enter().append('text').attr('class', 'arc-label along-arc').attr('x', this.config.get('arcLabelXOffset')).attr('dy', this.config.get('arcLabelYOffset'));
        svgArcLabelsEnter.append('textPath').attr('xlink:href', function (d) {
          return '#' + d.data.namePath.join('-');
        });
        var svgArcLabelsEdit = svgArcLabelsEnter.merge(svgArcLabels).transition().ease(this.config.get('ease')).duration(this.config.get('duration')).attr('x', this.config.get('arcLabelXOffset')).attr('dy', this.config.get('arcLabelYOffset'));
        svgArcLabelsEdit.select('textPath').text(function (d) {
          return _this9.config.get('showArcLabels') && d.labelFits ? d.label : '';
        });
        svgArcLabels.exit().remove();
        // Perpendicular
        svgArcLabels = this.d3.selectAll('.arc-label.perpendicular').data(arcLabelsPerpendicularData);
        svgArcLabelsEnter = svgArcLabels.enter().append('text').attr('class', 'arc-label perpendicular').merge(svgArcLabels).attr('transform', function (d) {
          var alpha = (d.angleRange[1] + d.angleRange[0]) / 2 + 90;
          if ((d.angleRange[1] + d.angleRange[0]) / 2 < 180) {
            alpha -= 180;
          }
          var x = (d.y + _this9.config.get('arcLabelYOffset')) * Math.cos((d.angleRange[1] + d.angleRange[0] - 180) * Math.PI / 360) + _this9.config.get('arcLabelXOffset');
          var y = (d.y + _this9.config.get('arcLabelYOffset')) * Math.sin((d.angleRange[1] + d.angleRange[0] - 180) * Math.PI / 360);
          return 'translate(' + x + ', ' + y + ') rotate(' + alpha + ')';
        }).style('text-anchor', function (d) {
          return (d.angleRange[1] + d.angleRange[0]) / 2 < 180 ? 'start' : 'end';
        }).text(function (d) {
          return _this9.config.get('showArcLabels') && d.labelFits ? d.label : '';
        });
        svgArcLabels.exit().remove();

        // Arcs for parent nodes.
        var arcEnter = d3Shape.arc().innerRadius(function (n) {
          return n.y;
        }).outerRadius(function (n) {
          return n.y + 1;
        }).startAngle(function (n) {
          return Math.PI * n.angleRange[0] / 180;
        }).endAngle(function (n) {
          return Math.PI * n.angleRange[1] / 180;
        });
        var arc = d3Shape.arc().innerRadius(function (n) {
          return n.y;
        }).outerRadius(function (n) {
          return n.y + _this9.config.get('arcWidth');
        }).startAngle(function (n) {
          return Math.PI * n.angleRange[0] / 180;
        }).endAngle(function (n) {
          return Math.PI * n.angleRange[1] / 180;
        });
        var svgArcs = this.d3.selectAll(this.selectors.node).data(this._arcs, function (d) {
          return d.data.namePath.join('-');
        });
        svgArcs.enter().append('path').attr('id', function (d) {
          return d.data.namePath.join('-');
        }).attr('class', function (d) {
          return 'arc arc-' + d.depth;
        }).attr('d', arcEnter).merge(svgArcs).transition().ease(this.config.get('ease')).duration(this.config.get('duration')).style('fill', function (d) {
          return _this9.config.getColor(d.depth - 1);
        }).attr('d', arc);
        svgArcs.exit().transition().ease(this.config.get('ease')).duration(this.config.get('duration')).attr('d', arcEnter).remove();
      }
    }
  }, {
    key: '_showLegend',
    value: function _showLegend() {
      var legendId = this.config.get('legend');
      if (!legendId) return;
      _Actionman2.default.fire('ToggleVisibility', legendId, true, this.config.legendData, this.config.legendConfig);
    }

    // Event handlers

  }, {
    key: '_onConfigModelChange',
    value: function _onConfigModelChange() {
      this.render();
    }
  }, {
    key: '_onMousemove',
    value: function _onMousemove(d, el) {
      var leaves = d.leaves();
      _lodash2.default.each(this._ribbons, function (ribbon) {
        ribbon.active = Boolean(_lodash2.default.find(leaves, function (leaf) {
          return leaf.data.linkId === ribbon.id;
        }));
      });
      this._render();

      var _d3Selection$mouse = d3Selection.mouse(this._container),
          _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
          left = _d3Selection$mouse2[0],
          top = _d3Selection$mouse2[1];

      var tooltipConfig = { left: left, top: top, container: this._container };
      _Actionman2.default.fire('ToggleVisibility', this.config.get('tooltip'), true, d.data, tooltipConfig);
    }
  }, {
    key: '_onMouseout',
    value: function _onMouseout(d, el) {
      _lodash2.default.each(this._ribbons, function (ribbon) {
        ribbon.active = false;
      });
      this._render();
      _Actionman2.default.fire('ToggleVisibility', this.config.get('tooltip'), false);
    }
  }, {
    key: '_onClickNode',
    value: function _onClickNode(d, el, e) {
      if (d.depth < this._maxDepth && d.depth === this.config.get('drillDownLevel')) {
        // Expand
        this.config.set('drillDownLevel', this.config.get('drillDownLevel') + 1);
      } else if (d.depth < this.config.get('drillDownLevel')) {
        // Collapse
        this.config.set('drillDownLevel', this.config.get('drillDownLevel') - 1);
      }
      el.classList.remove(this.selectorClass('active'));
      _get(RadialDendrogramView.prototype.__proto__ || Object.getPrototypeOf(RadialDendrogramView.prototype), '_onEvent', this).call(this, d, el, e);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(RadialDendrogramView.prototype.__proto__ || Object.getPrototypeOf(RadialDendrogramView.prototype), 'selectors', this), {
        node: '.arc',
        link: '.link',
        ribbon: '.ribbon',
        active: '.active'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return _lodash2.default.extend(_get(RadialDendrogramView.prototype.__proto__ || Object.getPrototypeOf(RadialDendrogramView.prototype), 'events', this), {
        'click node': '_onClickNode',
        'click ribbon': '_onEvent',
        'dblclick node': '_onEvent',
        'dblclick ribbon': '_onEvent',
        'mousemove node': '_onMousemove',
        'mouseout node': '_onMouseout'
      });
    }
  }, {
    key: 'height',
    get: function get() {
      return this.config.get('height') || this.width;
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _RadialDendrogramConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _Serie2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { SelectColor: _SelectColor2.default, SelectKey: _SelectKey2.default };
    }
  }]);

  return RadialDendrogramView;
}(_chartView2.default);

exports.default = RadialDendrogramView;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Sankey = __webpack_require__(170);

var d3Sankey = _interopRequireWildcard(_d3Sankey);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _SankeyConfigModel = __webpack_require__(72);

var _SankeyConfigModel2 = _interopRequireDefault(_SankeyConfigModel);

var _Serie = __webpack_require__(24);

var _Serie2 = _interopRequireDefault(_Serie);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

__webpack_require__(190);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016 Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SankeyView = function (_ChartView) {
  _inherits(SankeyView, _ChartView);

  function SankeyView() {
    _classCallCheck(this, SankeyView);

    return _possibleConstructorReturn(this, (SankeyView.__proto__ || Object.getPrototypeOf(SankeyView)).apply(this, arguments));
  }

  _createClass(SankeyView, [{
    key: 'render',
    value: function render() {
      _get(SankeyView.prototype.__proto__ || Object.getPrototypeOf(SankeyView.prototype), 'render', this).call(this);
      this._prepareLayout();
      this._render();
      this._ticking = false;
    }
  }, {
    key: 'remove',
    value: function remove() {
      _get(SankeyView.prototype.__proto__ || Object.getPrototypeOf(SankeyView.prototype), 'remove', this).call(this);
      window.removeEventListener('resize', this._onResize);
    }
  }, {
    key: '_prepareLayout',
    value: function _prepareLayout() {
      var _this2 = this;

      var data = this.model.data;
      var nodeNameMap = {};
      var parseConfig = this.config.get('parseConfig');
      this._nodes = [];
      this._links = [];
      _lodash2.default.each(data, function (d) {
        // Parsing a data element should return an array of links: { source: 'sourceNodeName', target: 'targetNodeName', value: value }
        var parsedLinks = parseConfig.parse(d);
        _lodash2.default.each(parsedLinks, function (link, i) {
          if (!link.value || link.value <= 0) {
            return;
          }
          if (!nodeNameMap[link.source]) {
            var node = { name: link.source, label: link.sourceNode.label, level: link.sourceNode.level, index: _this2._nodes.length };
            nodeNameMap[link.source] = node;
            _this2._nodes.push(node);
          }
          if (!nodeNameMap[link.target]) {
            var _node = { name: link.target, label: link.targetNode.label, level: link.targetNode.level, index: _this2._nodes.length };
            nodeNameMap[link.target] = _node;
            _this2._nodes.push(_node);
          }
          var sourceIndex = nodeNameMap[link.source].index;
          var targetIndex = nodeNameMap[link.target].index;
          var foundLink = null;
          // Check if this link already exists.
          _lodash2.default.each(_this2._links, function (uniqueLink) {
            if (uniqueLink.source === sourceIndex && uniqueLink.target === targetIndex || uniqueLink.source === targetIndex && uniqueLink.target === sourceIndex) {
              foundLink = uniqueLink;
            }
          });
          if (foundLink) {
            foundLink.value += link.value;
          } else {
            _this2._links.push({ source: sourceIndex, target: targetIndex, value: link.value, data: link });
          }
        });
      });
      this._sankey = d3Sankey.sankey().nodeWidth(this.config.get('nodeWidth')).nodePadding(this.config.get('nodePadding')).size([this.innerWidth, this.innerHeight]);
      this._sankey.nodes(this._nodes).links(this._links).layout(32);
      // Fix node dimmensions if they are too small.
      _lodash2.default.each(this._nodes, function (node) {
        if (node.dy < 1) {
          node.dy = 1;
        }
      });
      // Fix link coordinates if they are too small.
      _lodash2.default.each(this._links, function (link) {
        if (link.dy < 1) {
          link.dy = 0;
        }
        if (link.ty < 1) {
          link.ty = 0;
        }
        if (link.sy < 1) {
          link.sy = 0;
        }
      });
    }
  }, {
    key: '_render',
    value: function _render() {
      var _this3 = this;

      this.d3.attr('transform', 'translate(' + this.config.get('margin.left') + ', ' + this.config.get('margin.top') + ')');
      // Links
      var path = this._sankey.link();
      var svgLinks = this.d3.selectAll(this.selectors.link).data(this._links);
      svgLinks.enter().append('path').attr('class', 'link').attr('d', path).style('stroke-width', function (d) {
        return Math.max(1, d.dy);
      }).merge(svgLinks).attr('d', path).style('stroke-width', function (d) {
        return Math.max(1, d.dy);
      });
      svgLinks.exit().remove();
      // Nodes
      var svgNodes = this.d3.selectAll(this.selectors.node).data(this._nodes);
      var svgNodesEnter = svgNodes.enter().append('g').attr('class', 'node').attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
      svgNodesEnter.append('rect').attr('width', this._sankey.nodeWidth()).attr('height', function (d) {
        return d.dy;
      });
      svgNodesEnter.append('text').attr('x', -5).attr('y', function (d) {
        return d.dy / 2;
      }).attr('text-anchor', 'end').text(function (d) {
        return d.dy > 10 ? d.label : '';
      }).filter(function (d) {
        return d.x > _this3.width / 2;
      }).attr('x', 5 + this._sankey.nodeWidth()).attr('text-anchor', 'start');
      var svgNodesEdit = svgNodesEnter.merge(svgNodes).transition().ease(this.config.get('ease')).duration(this.config.get('duration')).attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
      svgNodesEdit.select('rect').style('fill', function (d) {
        return _this3.config.getColor([], _this3.config.get('levels')[d.level]);
      }).attr('width', this._sankey.nodeWidth()).attr('height', function (d) {
        return d.dy;
      });
      svgNodesEdit.select('text').attr('x', -5).attr('y', function (d) {
        return d.dy / 2;
      }).attr('text-anchor', 'end').text(function (d) {
        return d.dy > 10 ? d.label : '';
      }).filter(function (d) {
        return d.x > _this3.width / 2;
      }).attr('x', 5 + this._sankey.nodeWidth()).attr('text-anchor', 'start');
    }

    // Event handlers

  }, {
    key: '_onMouseoverLink',
    value: function _onMouseoverLink(d, el) {
      var _d3Selection$mouse = d3Selection.mouse(this._container),
          _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
          left = _d3Selection$mouse2[0],
          top = _d3Selection$mouse2[1];

      var tooltipConfig = { left: left, top: top, container: this._container };
      _Actionman2.default.fire('ToggleVisibility', this.config.get('tooltip'), true, d, tooltipConfig);
    }
  }, {
    key: '_onMouseoutLink',
    value: function _onMouseoutLink(d, el) {
      _Actionman2.default.fire('ToggleVisibility', this.config.get('tooltip'), false);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'mouseover link': '_onMouseoverLink',
        'mouseout link': '_onMouseoutLink',
        'click node': '_onClickNode'
      };
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(SankeyView.prototype.__proto__ || Object.getPrototypeOf(SankeyView.prototype), 'selectors', this), {
        link: '.link',
        node: '.node'
      });
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _SankeyConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _Serie2.default;
    }
  }]);

  return SankeyView;
}(_chartView2.default);

exports.default = SankeyView;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(25);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _ScatterPlotConfigModel = __webpack_require__(73);

var _ScatterPlotConfigModel2 = _interopRequireDefault(_ScatterPlotConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _Cluster = __webpack_require__(36);

var _Cluster2 = _interopRequireDefault(_Cluster);

var _Zoom = __webpack_require__(17);

var _Zoom2 = _interopRequireDefault(_Zoom);

__webpack_require__(191);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ScatterPlotView = function (_ChartView) {
  _inherits(ScatterPlotView, _ChartView);

  function ScatterPlotView() {
    _classCallCheck(this, ScatterPlotView);

    return _possibleConstructorReturn(this, (ScatterPlotView.__proto__ || Object.getPrototypeOf(ScatterPlotView)).apply(this, arguments));
  }

  _createClass(ScatterPlotView, [{
    key: 'calculateScales',
    value: function calculateScales() {
      this.config.set('x.range', [this.padding.left, this.innerWidth - this.padding.right], { silent: true });
      this.config.set('y.range', [this.innerHeight - this.padding.bottom, this.padding.top], { silent: true });
      this.config.calculateScales(this.model);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      _get(ScatterPlotView.prototype.__proto__ || Object.getPrototypeOf(ScatterPlotView.prototype), 'render', this).call(this);
      // just render points if was waiting on cluster result
      if (!this._waiting) {
        // frozen component is completely controlled from outside
        if (!this.config.get('frozen')) this.calculateScales();
        this._data = _lodash2.default.filter(this.prepareData(), function (d) {
          return !_lodash2.default.find(_this2._overlapping, { id: d.id });
        });

        // do not render points before it is known what of them to skip due to bucketization
        if (this._cluster()) return;
      }
      var points = this.d3.selectAll(this.selectors.node).data(this._data, function (d) {
        return d.id;
      });

      var pointsEnter = points.enter().append('g').classed(this.selectorClass('node'), true).attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
      pointsEnter.append('circle');
      pointsEnter.append('text');

      var update = pointsEnter.merge(points);
      update.select('circle').attr('r', function (d) {
        return Math.sqrt(d.area) / 2;
      }).attr('fill', function (d) {
        return d.color;
      });
      update.select('text').attr('fill', function (d) {
        return d.color;
      }).html(function (d) {
        return d.accessor.shape;
      }).style('font-size', function (d) {
        return Math.sqrt(d.area / 4);
      });

      // Update
      points.transition().ease(d3Ease.easeLinear).duration(this.config.get('duration')).attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });

      points.exit().remove();

      this._ticking = false;
    }
  }, {
    key: 'cluster',
    value: function cluster(overlapping) {
      this._overlapping = overlapping;
      this.render();
      this._waiting = false;
    }
  }, {
    key: 'zoom',
    value: function zoom(ranges) {
      var _ranges,
          _this3 = this;

      // TODO return if ranges didn't change
      ranges || (ranges = (_ranges = {}, _defineProperty(_ranges, this.config.get('x.accessor'), []), _defineProperty(_ranges, this.config.get('y.accessor'), []), _ranges));
      _lodash2.default.each(ranges, function (range, accessor) {
        var key = _this3.config.get('x.accessor') === accessor ? 'x' : 'y';
        _this3.config.set(key + '.domain', range, { silent: true });
      });

      this.render();
    }
    /**
     * Create a flat data structure
     */

  }, {
    key: 'prepareData',
    value: function prepareData() {
      var _this4 = this;

      var xAccessor = this.config.get('x.accessor');
      var accessor = this.config.get('y');
      var key = accessor.accessor;
      var sizeKey = this.config.get('size.accessor');
      var points = [];

      _lodash2.default.map(this.model.data, function (d) {
        var x = _lodash2.default.get(d, xAccessor);
        if (!_lodash2.default.isNil(_lodash2.default.get(d, key))) {
          // key may not exist in all the data set.
          var obj = {
            id: x + '-' + key,
            x: _this4.config.xScale(x),
            y: _this4.config.yScale(_lodash2.default.get(d, key)),
            area: _this4.config.sizeScale(_lodash2.default.get(d, sizeKey)),
            color: _this4.config.getColor(accessor.accessor, d),
            accessor: accessor,
            data: d,
            halfWidth: Math.sqrt(_this4.config.sizeScale(_lodash2.default.get(d, sizeKey))) / 2,
            halfHeight: Math.sqrt(_this4.config.sizeScale(_lodash2.default.get(d, sizeKey))) / 2
          };
          points.push(obj);
        }
      });
      return points;
    }
  }, {
    key: '_cluster',
    value: function _cluster() {
      var bucketId = this.config.get('bucket');
      if (!bucketId) return false;
      this._waiting = true;

      var config = {
        update: this.id,
        xAccessor: this.config.get('x.accessor')
      };
      return _Actionman2.default.fire('ToggleVisibility', bucketId, true, this._data, config);
    }

    // Event handlers

  }, {
    key: '_onMouseover',
    value: function _onMouseover(d, el, event) {
      var tooltipId = this.config.get('tooltip');
      if (tooltipId) {
        var _d3Selection$mouse = d3Selection.mouse(this._container),
            _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
            left = _d3Selection$mouse2[0],
            top = _d3Selection$mouse2[1];

        var tooltipConfig = { left: left, top: top, container: this._container };
        _Actionman2.default.fire('ToggleVisibility', tooltipId, true, d.data, tooltipConfig);
      }
      el.classList.add(this.selectorClass('active'));
    }
  }, {
    key: '_onMouseout',
    value: function _onMouseout(d, el) {
      var tooltipId = this.config.get('tooltip');
      if (tooltipId) _Actionman2.default.fire('ToggleVisibility', tooltipId, false);
      var els = el ? d3Selection.select(el) : this.d3.selectAll(this.selectors.node);
      els.classed('active', false);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 1;
    }
    /**
     * follow same naming convention for all XY chart sub views
     */

  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(ScatterPlotView.prototype.__proto__ || Object.getPrototypeOf(ScatterPlotView.prototype), 'selectors', this), {
        node: '.point'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'mouseover node': '_onMouseover',
        'mouseout node': '_onMouseout'
      };
    }
  }, {
    key: 'isWaiting',
    get: function get() {
      return this._waiting;
    }
    // assume max shape extension out of scale range as of circle's radius

  }, {
    key: 'padding',
    get: function get() {
      var maxR = Math.sqrt(this.config.get('size.range')[1]);
      return { left: maxR, top: maxR, right: maxR, bottom: maxR };
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _ScatterPlotConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { ClusterAction: _Cluster2.default, Zoom: _Zoom2.default };
    }
  }]);

  return ScatterPlotView;
}(_chartView2.default);

exports.default = ScatterPlotView;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _StackedBarConfigModel = __webpack_require__(74);

var _StackedBarConfigModel2 = _interopRequireDefault(_StackedBarConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _SelectColor = __webpack_require__(15);

var _SelectColor2 = _interopRequireDefault(_SelectColor);

var _SelectKey = __webpack_require__(16);

var _SelectKey2 = _interopRequireDefault(_SelectKey);

__webpack_require__(192);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StackedBarView = function (_ChartView) {
  _inherits(StackedBarView, _ChartView);

  function StackedBarView() {
    _classCallCheck(this, StackedBarView);

    return _possibleConstructorReturn(this, (StackedBarView.__proto__ || Object.getPrototypeOf(StackedBarView)).apply(this, arguments));
  }

  _createClass(StackedBarView, [{
    key: 'getScreenX',
    value: function getScreenX(datum) {
      return this.config.xScale(_lodash2.default.get(datum, this.config.get('x.accessor')));
    }
    /**
    * Y coordinate calculation considers position is being stacked
    */

  }, {
    key: 'getScreenY',
    value: function getScreenY(datum, yAccessor) {
      if (_lodash2.default.isNil(_lodash2.default.get(datum, yAccessor))) return undefined;
      var stackedValue = 0;
      _lodash2.default.takeWhile(this.config.yAccessors, function (accessorConfig) {
        stackedValue += _lodash2.default.get(datum, accessorConfig.accessor) || 0;
        return accessorConfig.accessor !== yAccessor;
      });
      return this.config.yScale(stackedValue);
    }
  }, {
    key: 'calculateScales',
    value: function calculateScales() {
      this.config.set('x.range', [this.padding.left, this.innerWidth - this.padding.right], { silent: true });
      this.config.set('y.range', [this.innerHeight - this.padding.bottom, this.padding.top], { silent: true });
      this.config.calculateScales(this.model);
    }
  }, {
    key: 'render',
    value: function render() {
      _get(StackedBarView.prototype.__proto__ || Object.getPrototypeOf(StackedBarView.prototype), 'render', this).call(this);
      this._onMouseout();
      // frozen component is completely controlled from outside
      if (!this.config.get('frozen')) this.calculateScales();

      var start = this.config.yScale.range()[0];
      var barGroups = this.d3.selectAll(this.selectors.node).data(this._prepareData(), function (d) {
        return d.id;
      });
      barGroups.enter().append('rect').attr('class', function (d) {
        return 'bar';
      }).attr('x', function (d) {
        return d.x;
      }).attr('y', start).attr('height', 0).attr('width', function (d) {
        return d.w;
      }).merge(barGroups).transition().ease(d3Ease.easeLinear).duration(this.config.get('duration')).attr('fill', function (d) {
        return d.color;
      }).attr('x', function (d) {
        return d.x;
      }).attr('y', function (d) {
        return d.y;
      }).attr('height', function (d) {
        return d.h;
      }).attr('width', function (d) {
        return d.w;
      });
      barGroups.exit().remove();

      this._ticking = false;
    }
  }, {
    key: '_prepareData',
    value: function _prepareData() {
      var _this2 = this;

      var data = this.model.data;
      var start = this.config.yScale.domain()[0];
      var flatData = [];
      var bandWidthHalf = this.bandWidth / 2;
      _lodash2.default.each(data, function (d) {
        var x = _lodash2.default.get(d, _this2.config.get('x.accessor'));
        var stackedValue = start;
        // y coordinate to stack next bar to
        _lodash2.default.each(_this2.config.yAccessors, function (accessorConfig) {
          var key = accessorConfig.accessor;
          var value = _lodash2.default.get(d, key) || 0;
          var obj = {
            id: x + '-' + key,
            x: _this2.config.xScale(x) - bandWidthHalf,
            y: _this2.config.yScale(value - start + stackedValue),
            h: _this2.config.yScale(start) - _this2.config.yScale(value + (stackedValue === start ? 0 : start)),
            w: _this2.bandWidth,
            color: _this2.config.getColor(accessorConfig.accessor, d),
            accessor: accessorConfig,
            data: d
          };
          stackedValue += value;
          flatData.push(obj);
        });
      });
      return flatData;
    }

    // Event handlers

  }, {
    key: '_onMousemove',
    value: function _onMousemove(d, el, event) {
      if (d.accessor.tooltip) {
        var _d3Selection$mouse = d3Selection.mouse(this._container),
            _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
            left = _d3Selection$mouse2[0],
            top = _d3Selection$mouse2[1];

        var tooltipConfig = { left: left, top: top, container: this._container };
        _Actionman2.default.fire('ToggleVisibility', d.accessor.tooltip, true, d.data, tooltipConfig);
      }
      el.classList.add(this.selectorClass('active'));
    }
  }, {
    key: '_onMouseout',
    value: function _onMouseout(d, el) {
      var tooltipId = d && d.accessor ? d.accessor.tooltip : _lodash2.default.map(this.config.yAccessors, function (a) {
        return a.tooltip;
      });
      if (!_lodash2.default.isEmpty(tooltipId)) {
        _Actionman2.default.fire('ToggleVisibility', tooltipId, false);
      }
      var els = el ? d3Selection.select(el) : this.d3.selectAll(this.selectors.node);
      els.classed('active', false);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return 1;
    }
    /**
     * follow same naming convention for all XY chart sub views
     */

  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(StackedBarView.prototype.__proto__ || Object.getPrototypeOf(StackedBarView.prototype), 'selectors', this), {
        node: '.bar'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'mousemove node': '_onMousemove',
        'mouseout node': '_onMouseout'
      };
    }
    // TODO use memoize function

  }, {
    key: 'bandWidth',
    get: function get() {
      if (_lodash2.default.isEmpty(this.model.data)) return 0;
      var paddedPart = 1 - this.config.get('barPadding') / 100;
      // TODO do not use model.data.length as there can be gaps
      // or fill the gaps in it beforehand
      return this.config.getOuterWidth(this.model, this.innerWidth) / this.model.data.length * paddedPart;
    }
  }, {
    key: 'padding',
    get: function get() {
      var horizontal = this.model.data.length < 2 ? 0 : this.bandWidth / 2;
      return _lodash2.default.defaultsDeep({ left: horizontal, right: horizontal }, this.config.padding);
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _StackedBarConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { SelectColor: _SelectColor2.default, SelectKey: _SelectKey2.default };
    }
  }]);

  return StackedBarView;
}(_chartView2.default);

exports.default = StackedBarView;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _StandaloneConfigModel = __webpack_require__(75);

var _StandaloneConfigModel2 = _interopRequireDefault(_StandaloneConfigModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StandaloneView = function (_ChartView) {
  _inherits(StandaloneView, _ChartView);

  _createClass(StandaloneView, null, [{
    key: 'Config',
    get: function get() {
      return _StandaloneConfigModel2.default;
    }
  }]);

  function StandaloneView(p) {
    _classCallCheck(this, StandaloneView);

    var _this = _possibleConstructorReturn(this, (StandaloneView.__proto__ || Object.getPrototypeOf(StandaloneView)).call(this, p));

    _this.render();
    return _this;
  }

  _createClass(StandaloneView, [{
    key: 'render',
    value: function render() {
      _get(StandaloneView.prototype.__proto__ || Object.getPrototypeOf(StandaloneView.prototype), 'render', this).call(this);
      this.d3.append('text').text('standalone component');
      this.svg.classed('standalone-is-here', true);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }]);

  return StandaloneView;
}(_chartView2.default);

exports.default = StandaloneView;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Ease = __webpack_require__(0);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _TimelineConfigModel = __webpack_require__(76);

var _TimelineConfigModel2 = _interopRequireDefault(_TimelineConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _Zoom = __webpack_require__(17);

var _Zoom2 = _interopRequireDefault(_Zoom);

var _BrushView = __webpack_require__(35);

var _BrushView2 = _interopRequireDefault(_BrushView);

__webpack_require__(193);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TimelineView = function (_ChartView) {
  _inherits(TimelineView, _ChartView);

  _createClass(TimelineView, null, [{
    key: 'Config',
    get: function get() {
      return _TimelineConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { Zoom: _Zoom2.default };
    }
  }]);

  function TimelineView() {
    var _ref;

    _classCallCheck(this, TimelineView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = TimelineView.__proto__ || Object.getPrototypeOf(TimelineView)).call.apply(_ref, [this].concat(args)));

    _this._brush = new _BrushView2.default({
      container: _this._container,
      config: { isSharedContainer: true }
    });

    _this.listenTo(_this._brush, 'selection', _lodash2.default.throttle(_this._onSelection));
    _this._debouncedEnable = _lodash2.default.debounce(function () {
      _this._disabled = false;
    }, _this.config.get('duration'));
    return _this;
  }

  _createClass(TimelineView, [{
    key: 'render',
    value: function render() {
      var rect = this._container.getBoundingClientRect();
      _get(TimelineView.prototype.__proto__ || Object.getPrototypeOf(TimelineView.prototype), 'render', this).call(this);

      var xAccessor = this.config.get('accessor');
      var xRange = [0, this.config.get('width') || rect.width];
      var yRange = [this.config.get('height'), 0];
      var xScale = d3Scale.scaleLinear().range(xRange).domain(this.model.getRangeFor(xAccessor));
      this.config.set({ xRange: xRange, yRange: yRange, xScale: xScale }, { silent: true });

      var barHeight = 10;
      this._bar = this.d3.selectAll(this.selectors.bar).data([{ barHeight: barHeight }]);
      this._bar.enter().append('rect').attr('class', this.selectorClass('bar')).attr('x', xRange[0]).attr('y', yRange[0] / 2 - barHeight / 2).attr('height', barHeight).attr('width', xRange[1] - xRange[0]).merge(this._bar).transition().ease(d3Ease.easeLinear).duration(this.config.get('duration')).attr('y', yRange[0] / 2 - barHeight / 2).attr('width', xRange[1] - xRange[0]);
      this._bar.exit().remove();

      this._brush.config.set({
        selection: this.config.selectionRange,
        xRange: xRange,
        yRange: yRange
      }, { silent: true });
      this._brush.render();

      this._ticking = false;
    }
  }, {
    key: 'zoom',
    value: function zoom(ranges) {
      var sScale = this.config.get('selectionScale');
      var xScale = this.config.get('xScale');
      var visualMin = xScale(ranges.x[0]);
      var visualMax = xScale(ranges.x[1]);

      // round zoom range to integers in percents including the original exact float values
      var selection = [_lodash2.default.floor(sScale.invert(visualMin)), _lodash2.default.ceil(sScale.invert(visualMax))];

      if (_lodash2.default.isEqual(this.config.get('selection'), selection)) return;
      this.config.set('selection', selection, { silent: true });
      this._update();
    }

    // Event handlers

  }, {
    key: '_onSelection',
    value: function _onSelection(range) {
      if (this._disabled) return;
      var xAccessor = this.config.get('accessor');
      var xScale = this.config.get('xScale');
      var xMin = xScale.invert(range[0]);
      var xMax = xScale.invert(range[1]);
      var sScale = this.config.get('selectionScale');
      var selection = [_lodash2.default.floor(sScale.invert(range[0])), _lodash2.default.ceil(sScale.invert(range[1]))];
      this.config.set('selection', selection, { silent: true });

      var data = _defineProperty({}, xAccessor, [xMin, xMax]);
      _Actionman2.default.fire('Zoom', this.config.get('update'), data);
    }
    /**
     * Turn off selection for the animation period on resize
     */

  }, {
    key: '_onResize',
    value: function _onResize() {
      this._disabled = true;
      this._debouncedEnable();
      if (!this._ticking) {
        window.requestAnimationFrame(this.render.bind(this));
        this._ticking = true;
      }
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(TimelineView.prototype.__proto__ || Object.getPrototypeOf(TimelineView.prototype), 'selectors', this), {
        bar: '.timeline-bar'
      });
    }
  }, {
    key: 'width',
    get: function get() {
      return this.config.get('width') || this._container.getBoundingClientRect().width;
    }
  }]);

  return TimelineView;
}(_chartView2.default);

exports.default = TimelineView;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _TooltipConfigModel = __webpack_require__(77);

var _TooltipConfigModel2 = _interopRequireDefault(_TooltipConfigModel);

var _ToggleVisibility = __webpack_require__(14);

var _ToggleVisibility2 = _interopRequireDefault(_ToggleVisibility);

var _TitleView = __webpack_require__(37);

var _TitleView2 = _interopRequireDefault(_TitleView);

var _tooltip = __webpack_require__(207);

var _tooltip2 = _interopRequireDefault(_tooltip);

__webpack_require__(194);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Juniper Networks, Inc. All rights reserved.

var TooltipView = function (_ChartView) {
  _inherits(TooltipView, _ChartView);

  function TooltipView() {
    _classCallCheck(this, TooltipView);

    return _possibleConstructorReturn(this, (TooltipView.__proto__ || Object.getPrototypeOf(TooltipView)).apply(this, arguments));
  }

  _createClass(TooltipView, [{
    key: 'render',
    value: function render() {
      if (!this._visible) return;
      _get(TooltipView.prototype.__proto__ || Object.getPrototypeOf(TooltipView.prototype), 'render', this).call(this);
      var _config$position = this.config.position,
          left = _config$position.left,
          top = _config$position.top;

      this._loadTemplate(this.model.data);
      this.d3.classed('active', true);

      if (this.config.get('sticky')) {
        // TODO do not make assumptions on source component internal structure
        var sourceRect = this.svg.node().querySelector('#' + this.config.clip).getBoundingClientRect();
        var containerRect = this._container.getBoundingClientRect();
        left = sourceRect.left - containerRect.left;
        if (this.config.position.left > containerRect.width / 2) {
          left += this.config.stickyMargin.left;
        } else {
          left += sourceRect.width - this.config.stickyMargin.right - this.width;
        }
        top = sourceRect.top - containerRect.top + (sourceRect.height / 2 - this.height / 2);
      }
      this.place({ left: left, top: top }, this.config.get('placement'));
      this.el.style.height = this.config.height + 'px';
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.d3.classed('active', false);
    }
    /**
     * Position tooltip box relative to the passed center point (usually cursor)
     * vertical and horizontal placement tries to keep the box within container
     */

  }, {
    key: 'place',
    value: function place(point, placement) {
      var left = point.left,
          top = point.top;

      var margin = 10;
      var containerWidth = this._container.offsetWidth;
      var containerHeight = this._container.offsetHeight;

      switch (placement) {
        case 'vertical':
          if (top - this.height - margin > 0) return this.place(point, 'top');else if (top + this.height + margin < containerHeight) return this.place(point, 'bottom');
          return this.place(point, 'center');
        case 'horizontal':
          if (left + this.width + margin < containerWidth) return this.place(point, 'right');else if (left - this.width - margin > 0) return this.place(point, 'left');
          return this.place(point, 'center');
        case 'top':
          left = left - this.width / 2;
          top = top - this.height - margin;
          break;
        case 'bottom':
          left = left - this.width / 2;
          top = top + margin;
          break;
        case 'left':
          left = left - this.width - margin;
          top = top - this.height / 2;
          break;
        case 'right':
          left = left + margin;
          top = top - this.height / 2;
          break;
        case 'center':
          left = left - this.width / 2;
          top = top - this.height / 2;
      }
      this.el.style.left = left + 'px';
      this.el.style.top = top + 'px';
    }
  }, {
    key: '_loadTemplate',
    value: function _loadTemplate(data) {
      var template = this.config.get('template') || _tooltip2.default;
      var tooltipContent = this.config.get('formatter').bind(this.config)(data);
      _get(TooltipView.prototype.__proto__ || Object.getPrototypeOf(TooltipView.prototype), 'render', this).call(this, template(tooltipContent));
      // TODO Discuss if title needs to be handled via TitleView or using the tooltip template itself.
      if (!_lodash2.default.isNil(tooltipContent.title)) {
        (0, _TitleView2.default)(this.d3.select('.tooltip-content').node(), tooltipContent.title);
      }
    }
  }, {
    key: 'width',
    get: function get() {
      return this.el.offsetWidth;
    }
  }, {
    key: 'height',
    get: function get() {
      return this.el.offsetHeight;
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _TooltipConfigModel2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { ToggleVisibility: _ToggleVisibility2.default };
    }
  }, {
    key: 'isMaster',
    get: function get() {
      return false;
    }
  }]);

  return TooltipView;
}(_chartView2.default);

exports.default = TooltipView;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Scale = __webpack_require__(0);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _TrafficMapConfigModel = __webpack_require__(78);

var _TrafficMapConfigModel2 = _interopRequireDefault(_TrafficMapConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _SelectColor = __webpack_require__(15);

var _SelectColor2 = _interopRequireDefault(_SelectColor);

var _SelectKey = __webpack_require__(16);

var _SelectKey2 = _interopRequireDefault(_SelectKey);

var _Zoom = __webpack_require__(17);

var _Zoom2 = _interopRequireDefault(_Zoom);

var _MapView2 = __webpack_require__(66);

var _MapView3 = _interopRequireDefault(_MapView2);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

__webpack_require__(195);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016 Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TrafficMapView = function (_MapView) {
  _inherits(TrafficMapView, _MapView);

  function TrafficMapView() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TrafficMapView);

    // The bubbles animated on links indicating the direction of traffic.
    var _this = _possibleConstructorReturn(this, (TrafficMapView.__proto__ || Object.getPrototypeOf(TrafficMapView)).call(this, p));

    _this._markers = [];
    return _this;
  }

  _createClass(TrafficMapView, [{
    key: 'zoom',


    /**
    * The time series slider was moved.
    */
    value: function zoom(ranges) {
      var _this2 = this;

      var accessorName = _lodash2.default.keys(ranges)[0];
      var range = ranges[accessorName];
      var locations = this.config.get('map.locations');
      var accessors = this.config.get('accessors');
      var minR = 1000000000000;
      var maxR = 0;
      var links = [];
      _lodash2.default.each(this.model.data, function (d) {
        _lodash2.default.each(d.connections, function (connection) {
          if (range[0] <= connection[accessorName] && connection[accessorName] <= range[1]) {
            var id = connection[accessors.id];
            var link = _lodash2.default.find(_this2._linksData, { id: id });
            if (!link) {
              link = {
                id: id,
                bytes: connection[accessors.width],
                source: _lodash2.default.find(locations, { id: connection[accessors.from] }),
                target: _lodash2.default.find(locations, { id: connection[accessors.to] }),
                trafficType: connection.trafficType
              };
            }
            links.push(link);
          }
          if (connection[accessors.width] < minR) {
            minR = connection[accessors.width];
          }
          if (connection[accessors.width] > maxR) {
            maxR = connection[accessors.width];
          }
        });
      });
      this._linksData = links;
      // Set the width of all links.
      var linkWidthScale = d3Scale.scaleLinear().domain([minR, maxR]).range([1, 10]);
      _lodash2.default.each(this._linksData, function (link) {
        link.width = linkWidthScale(link[accessors.width]);
      });
      this._renderData();
    }

    /**
    * Overrides Map._renderData.
    * Renders the links on the map.
    */

  }, {
    key: '_renderData',
    value: function _renderData() {
      var _this3 = this;

      if (!this._linksData || _lodash2.default.isEmpty(this._linksData)) {
        return;
      }
      var linksGroupSvg = this.d3.select('.links');
      if (linksGroupSvg.empty()) {
        this.d3.append('g').attr('class', 'markers');
        this.d3.append('g').attr('class', 'links');
        linksGroupSvg = this.d3.select('.links');
      }
      // Create a path for each source/target pair.
      var linksSvg = linksGroupSvg.selectAll(this.selectors.link).data(this._linksData);
      linksSvg.enter().append('path').attr('class', this.selectorClass('link')).merge(linksSvg).attr('d', function (link) {
        var source = _this3.config.project(link.source);
        var target = _this3.config.project(link.target);
        return _this3._arc(source, target);
      }).attr('id', function (link) {
        return 'c' + link.id;
      }).style('stroke-width', function (link) {
        return link.width;
      }).style('stroke', function (link) {
        return _this3.config.getColor(link.trafficType);
      });
      linksSvg.exit().remove();
      // Animate over links.
      this._initAnimationOverLinks();
    }
  }, {
    key: '_initAnimationOverLinks',
    value: function _initAnimationOverLinks() {
      var _this4 = this;

      var markerSpacing = this.config.get('markerSpacing');
      var markerSpeed = this.config.get('markerSpeed');
      var markerEndAnimationSteps = this.config.get('markerEndAnimationSteps');
      var markerEndRadiusFactor = this.config.get('markerEndRadiusFactor');
      this._markerFinishedRadiusScale = d3Scale.scaleLinear().domain([0, markerEndAnimationSteps]).range([1, markerEndRadiusFactor]);
      this._markerFinishedOpacityScale = d3Scale.scaleLinear().domain([0, markerEndAnimationSteps]).range([1, 0]);
      _lodash2.default.each(this._linksData, function (link) {
        var pathNode = _this4.d3.select('#c' + link.id).node();
        link.len = pathNode.getTotalLength();
        link.markers = 0;
        link.pathNode = pathNode;
        link.stepsBetweenMarkerRelease = markerSpacing / markerSpeed;
        if (!_lodash2.default.has(link, 'steps')) {
          link.steps = link.stepsBetweenMarkerRelease;
        }
      });
      // Merge markers data
      _lodash2.default.each(this._markers, function (marker) {
        var foundLink = _lodash2.default.find(_this4._linksData, { id: marker.link.id });
        if (!foundLink) {
          // Link for this marker was not found in current data. Flag the marker for removing.
          marker.finished = markerEndAnimationSteps;
        }
      });
      if (!this._animationStarted) {
        window.requestAnimationFrame(this._animateMarkers.bind(this));
      }
      this._animationStarted = true;
    }
  }, {
    key: '_animateMarkers',
    value: function _animateMarkers() {
      var _this5 = this;

      if (!this._animationStarted) {
        return;
      }
      var markerEndAnimationSteps = this.config.get('markerEndAnimationSteps');
      var markerSpeed = this.config.get('markerSpeed');
      // Move existing markers
      _lodash2.default.each(this._markers, function (marker) {
        marker.offset += markerSpeed;
        if (marker.offset > marker.link.len) {
          marker.offset = marker.link.len;
          marker.finished++;
        }
        if (marker.offset < marker.link.len && marker.finished) {
          // This marker was already flaged for delete when the link changed length due to an onZoom event.
          // End the process of removing this marker.
          marker.finished = markerEndAnimationSteps;
        }
        marker.point = marker.link.pathNode.getPointAtLength(marker.offset);
      });
      // Remove markers
      this._markers = _lodash2.default.filter(this._markers, function (marker) {
        return marker.finished < markerEndAnimationSteps;
      });
      // Add new markers
      _lodash2.default.each(this._linksData, function (link) {
        link.steps++;
        if (link.steps > link.stepsBetweenMarkerRelease) {
          // Release a new marker.
          link.steps = 0;
          link.markers++;
          var point = link.pathNode.getPointAtLength(0);
          var marker = { id: link.id + '-' + link.markers, point: point, r: link.width / 2, link: link, offset: 0, finished: 0 };
          _this5._markers.push(marker);
        }
      });
      // Render markers
      this._renderMarkers();
      window.requestAnimationFrame(this._animateMarkers.bind(this));
    }
  }, {
    key: '_renderMarkers',
    value: function _renderMarkers() {
      var _this6 = this;

      var markersGroupSvg = this.d3.select('.markers');
      var markersSvg = markersGroupSvg.selectAll(this.selectors.marker).data(this._markers);
      markersSvg.enter().append('circle').attr('class', this.selectorClass('marker')).merge(markersSvg).attr('cx', function (marker) {
        return marker.point.x;
      }).attr('cy', function (marker) {
        return marker.point.y;
      }).attr('r', function (marker) {
        return marker.r * _this6._markerFinishedRadiusScale(marker.finished);
      }).style('opacity', function (marker) {
        return _this6._markerFinishedOpacityScale(marker.finished);
      }).style('fill', function (marker) {
        return _this6.config.getColor(marker.link.trafficType);
      }).attr('id', function (marker) {
        return marker.id;
      });
      markersSvg.exit().remove();
    }
  }, {
    key: 'remove',
    value: function remove() {
      _get(TrafficMapView.prototype.__proto__ || Object.getPrototypeOf(TrafficMapView.prototype), 'remove', this).call(this);
      this._animationStarted = false;
    }

    // Event handlers

  }, {
    key: '_onMousemoveLink',
    value: function _onMousemoveLink(d, el) {
      var _d3Selection$mouse = d3Selection.mouse(this._container),
          _d3Selection$mouse2 = _slicedToArray(_d3Selection$mouse, 2),
          left = _d3Selection$mouse2[0],
          top = _d3Selection$mouse2[1];

      _Actionman2.default.fire('ToggleVisibility', this.config.get('tooltip'), true, d, { left: left, top: top });
    }
  }, {
    key: '_onMouseoutLink',
    value: function _onMouseoutLink(d, el) {
      _Actionman2.default.fire('ToggleVisibility', this.config.get('tooltip'), false);
    }
  }, {
    key: '_onClickNode',
    value: function _onClickNode(d, el, e) {}
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(TrafficMapView.prototype.__proto__ || Object.getPrototypeOf(TrafficMapView.prototype), 'selectors', this), {
        node: '.node',
        link: '.link',
        marker: '.marker',
        active: '.active',
        graticule: '.graticule',
        feature: '.feature',
        boundary: '.boundary'
      });
    }
  }, {
    key: 'events',
    get: function get() {
      return _lodash2.default.extend(_get(TrafficMapView.prototype.__proto__ || Object.getPrototypeOf(TrafficMapView.prototype), 'events', this), {
        'click node': '_onClickNode',
        'mousemove link': '_onMousemoveLink',
        'mouseout link': '_onMouseoutLink'
      });
    }
  }], [{
    key: 'Config',
    get: function get() {
      return _TrafficMapConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { SelectColor: _SelectColor2.default, SelectKey: _SelectKey2.default, Zoom: _Zoom2.default };
    }
  }]);

  return TrafficMapView;
}(_MapView3.default);

exports.default = TrafficMapView;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _CompositeChart = __webpack_require__(23);

var _CompositeChart2 = _interopRequireDefault(_CompositeChart);

var _models = __webpack_require__(43);

var Models = _interopRequireWildcard(_models);

var _TitleView = __webpack_require__(37);

var _TitleView2 = _interopRequireDefault(_TitleView);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * This view enables creation of composited visualization out of multiple components
 */
var CompositeView = function (_ChartView) {
  _inherits(CompositeView, _ChartView);

  function CompositeView() {
    _classCallCheck(this, CompositeView);

    return _possibleConstructorReturn(this, (CompositeView.__proto__ || Object.getPrototypeOf(CompositeView)).apply(this, arguments));
  }

  _createClass(CompositeView, [{
    key: 'setData',
    value: function setData(data) {
      this.composite.setData(data);
    }
    /**
     * As CompositeView doesn't render anything itself its id is used as container HTML element id
     * while for all other components id of component is used as its element id due to Backbone.View
     */

  }, {
    key: 'setConfig',
    value: function setConfig(config) {
      var _this2 = this;

      if (!this.composite) this.composite = new _CompositeChart2.default();

      // if config specified create common model for all components to prepare (format) data just once
      if (config.model && config.model.type) {
        var Model = Models[config.model.type];
        if (Model) this._model = new Model(config.model.config);
      }

      // TODO any component should not access global DOM scope via document
      this._container = config.container || document.querySelector('#' + config.id);
      // Apply template
      if (config.template) {
        var template = document.createElement('template');
        template.innerHTML = config.template();
        // some components require container to have id
        _lodash2.default.each(template.content.querySelectorAll('[component]'), function (el) {
          el.setAttribute('id', 'cc-' + el.getAttribute('component'));
        });
        this._container.append(document.importNode(template.content, true));
      }

      if (config.title) (0, _TitleView2.default)(this._container, config.title);

      // TODO add ability to update / remove components in composition

      _lodash2.default.each(config.components, function (component, index) {
        component.config.id = component.id;
        component.model = component.model || _this2._model;
        // component id is used to find its container in template
        component.container = _this2._container.querySelector('[component="' + component.id + '"]') || _this2._container;
        component.config.order = index;
      });

      _lodash2.default.each(config.components, function (component) {
        _this2.composite.add(component);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      _lodash2.default.each(this.composite.components, function (component) {
        return component.render();
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.composite.remove();
    }
    /**
     * Each descendant of ChartView reacts to resize event by its own
     * @override
     */

  }, {
    key: '_onResize',
    value: function _onResize() {}
  }]);

  return CompositeView;
}(_chartView2.default);

exports.default = CompositeView;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _NavigationConfigModel = __webpack_require__(79);

var _NavigationConfigModel2 = _interopRequireDefault(_NavigationConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _Zoom = __webpack_require__(17);

var _Zoom2 = _interopRequireDefault(_Zoom);

var _Browse = __webpack_require__(54);

var _Browse2 = _interopRequireDefault(_Browse);

var _ToggleHalt = __webpack_require__(33);

var _ToggleHalt2 = _interopRequireDefault(_ToggleHalt);

var _CompositeYView = __webpack_require__(82);

var _CompositeYView2 = _interopRequireDefault(_CompositeYView);

var _BrushView = __webpack_require__(35);

var _BrushView2 = _interopRequireDefault(_BrushView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NavigationView = function (_ChartView) {
  _inherits(NavigationView, _ChartView);

  _createClass(NavigationView, null, [{
    key: 'Config',
    get: function get() {
      return _NavigationConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { Zoom: _Zoom2.default, Browse: _Browse2.default, ToggleHalt: _ToggleHalt2.default };
    }
  }]);

  function NavigationView() {
    var _ref;

    _classCallCheck(this, NavigationView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // needs more time to not encounter onSelection event after zoom
    var _this = _possibleConstructorReturn(this, (_ref = NavigationView.__proto__ || Object.getPrototypeOf(NavigationView)).call.apply(_ref, [this].concat(args)));

    _this._debouncedEnable = _lodash2.default.debounce(function () {
      _this._disabled = false;
    }, _this.config.get('duration') * 2);
    return _this;
  }

  _createClass(NavigationView, [{
    key: 'render',
    value: function render() {
      _get(NavigationView.prototype.__proto__ || Object.getPrototypeOf(NavigationView.prototype), 'render', this).call(this);
      if (!this._yChart) {
        this._yChart = new _CompositeYView2.default({
          config: {
            frozen: true,
            height: this.config.get('height'),
            margin: this.config.get('margin'),
            duration: this.config.get('duration'),
            axes: this.config.get('axes'),
            plot: this.config.get('plot')
          },
          container: this.el,
          model: this.model
        });
        this._yChart.render();
      }
      if (!this._brush) {
        this._brush = new _BrushView2.default({
          container: this.el,
          config: {
            isSharedContainer: true,
            margin: this._yChart.config.margin,
            height: this.height
          }
        });
        this.listenTo(this._brush, 'selection', _lodash2.default.throttle(this._onSelection));
      }
      this._update();
    }
  }, {
    key: 'remove',
    value: function remove() {
      _get(NavigationView.prototype.__proto__ || Object.getPrototypeOf(NavigationView.prototype), 'remove', this).call(this);
      this._components = [];
      this.stopListening(this._brush, 'selection');
    }
    /**
     * is limited to x scale
     */

  }, {
    key: 'zoom',
    value: function zoom(ranges) {
      var selection = void 0;
      if (ranges) {
        var range = ranges[this.config.get('plot.x.accessor')];
        if (!range || range[0] === range[1]) return;
        var sScale = this.config.get('selectionScale');
        var visualMin = this._yChart.config.xScale(range[0]);
        var visualMax = this._yChart.config.xScale(range[1]);

        // round zoom range to integers in percents including the original exact float values
        selection = [_lodash2.default.floor(sScale.invert(visualMin)), _lodash2.default.ceil(sScale.invert(visualMax))];
      }

      if (_lodash2.default.isEqual(this.config.get('selection'), selection)) return;
      this.config.set('selection', selection, { silent: true });
      this._disabled = true;
      this._update();
      this._debouncedEnable();
    }
  }, {
    key: 'browse',
    value: function browse(attribute) {
      var selection = this._brush.config.get('selection').slice();
      var xScale = this._yChart.config.get('axes.x.scale');
      selection[0] = xScale.invert(selection[0]);
      selection[1] = xScale.invert(selection[1]);
      var browseMoveBy = this.config.get('browseMoveBy');
      if (attribute === 'back') {
        browseMoveBy = -browseMoveBy;
      }
      selection[0] += browseMoveBy;
      selection[1] += browseMoveBy;
      selection[0] = xScale(selection[0]);
      selection[1] = xScale(selection[1]);
      if (selection[0] < xScale.range()[0] || selection[1] > xScale.range()[1]) {
        return;
      }
      this._brush.move(selection);
    }
  }, {
    key: 'setHalt',
    value: function setHalt(toggle) {
      if (!toggle) {
        // Start to play.
        var selection = this._brush.config.get('selection').slice();
        var xScale = this._yChart.config.get('axes.x.scale');
        var delta = selection[1] - selection[0];
        selection[0] = xScale.range()[0];
        selection[1] = selection[0] + delta;
        this._brush.move(selection);
        this._timer = window.setTimeout(this._animateBrush.bind(this), 1000);
      } else {
        // Halt.
        window.clearTimeout(this._timer);
      }
    }
  }, {
    key: '_animateBrush',
    value: function _animateBrush() {
      // Keep moving the selection forward once every second.
      this.browse('forward');
      this._timer = window.setTimeout(this._animateBrush.bind(this), 1000);
    }

    // Event handlers

  }, {
    key: '_onSelection',
    value: function _onSelection(range) {
      if (this._disabled) return;
      var xAccessor = this.config.get('plot.x.accessor');
      var xScale = this._yChart.config.get('axes.x.scale');
      var xMin = xScale.invert(range[0]);
      var xMax = xScale.invert(range[1]);
      var sScale = this.config.get('selectionScale');
      var selection = [_lodash2.default.floor(sScale.invert(range[0])), _lodash2.default.ceil(sScale.invert(range[1]))];
      this.config.set('selection', selection, { silent: true });

      var data = _defineProperty({}, xAccessor, [xMin, xMax]);
      _Actionman2.default.fire('Zoom', this.config.get('update'), data);
    }
    /**
     * Turn off selection for the animation period on resize
     */

  }, {
    key: '_onResize',
    value: function _onResize() {
      this._disabled = true;
      this._debouncedEnable();
      if (!this._ticking) {
        window.requestAnimationFrame(this._update.bind(this));
        this._ticking = true;
      }
    }
    /**
     * Composite Y component is updated on resize on its own
     */

  }, {
    key: '_update',
    value: function _update() {
      this._yChart.render();
      var xRange = this._yChart.config.get('axes.x.scale').range();
      var yRange = this._yChart.config.get('axes.y.scale').range();
      this._brush.config.set({
        selection: this.config.getSelectionRange(xRange),
        xRange: xRange,
        yRange: yRange
      }, { silent: true });
      this._brush.render();
      this._ticking = false;
    }
  }]);

  return NavigationView;
}(_chartView2.default);

exports.default = NavigationView;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _d3Array = __webpack_require__(0);

var d3Array = _interopRequireWildcard(_d3Array);

var _chartView = __webpack_require__(2);

var _chartView2 = _interopRequireDefault(_chartView);

var _CompositeRadialConfigModel = __webpack_require__(80);

var _CompositeRadialConfigModel2 = _interopRequireDefault(_CompositeRadialConfigModel);

var _DataFrame = __webpack_require__(5);

var _DataFrame2 = _interopRequireDefault(_DataFrame);

var _CompositeChart = __webpack_require__(23);

var _CompositeChart2 = _interopRequireDefault(_CompositeChart);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

var _SelectColor = __webpack_require__(15);

var _SelectColor2 = _interopRequireDefault(_SelectColor);

var _SelectKey = __webpack_require__(16);

var _SelectKey2 = _interopRequireDefault(_SelectKey);

__webpack_require__(196);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Creates composited chart with X and Y axes and compatible components like: Line, Area, StackedBar, etc
 */
var CompositeRadialView = function (_ChartView) {
  _inherits(CompositeRadialView, _ChartView);

  _createClass(CompositeRadialView, null, [{
    key: 'Config',
    get: function get() {
      return _CompositeRadialConfigModel2.default;
    }
  }, {
    key: 'Model',
    get: function get() {
      return _DataFrame2.default;
    }
  }, {
    key: 'Actions',
    get: function get() {
      return { SelectColor: _SelectColor2.default, SelectKey: _SelectKey2.default };
    }
  }]);

  function CompositeRadialView() {
    var _ref;

    _classCallCheck(this, CompositeRadialView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = CompositeRadialView.__proto__ || Object.getPrototypeOf(CompositeRadialView)).call.apply(_ref, [this].concat(args)));

    _this._composite = new _CompositeChart2.default();
    return _this;
  }

  _createClass(CompositeRadialView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      _get(CompositeRadialView.prototype.__proto__ || Object.getPrototypeOf(CompositeRadialView.prototype), 'render', this).call(this);
      this._updateComponents();
      this.config.calculateScales(this.model, this.innerWidth, this.innerHeight);
      this._renderAxes();

      // force composite scale for children components
      // and inform them that it is a provided scale so they will not overwrite.
      var components = this._composite.getByType((0, _lodash2.default)(this.config.activeAccessors).map('chart').uniq().value());
      _lodash2.default.each(components, function (component) {
        var componentAngularAxisName = _this2.config.getAngularAxisName(component.config.get('angular'));
        component.config.set('angular.scale', _this2.config.get('axes.' + componentAngularAxisName + '.scale'), { silent: true });
        component.config.set('angular.providedScale', true, { silent: true });
        var componentRadialAxisName = _this2.config.getRadialAxisName(component.config.get('radial'));
        component.config.set('radial.scale', _this2.config.get('axes.' + componentRadialAxisName + '.scale'), { silent: true });
        component.config.set('radial.providedScale', true, { silent: true });
        component.render();
      });
      this._showLegend();

      this._ticking = false;
    }
  }, {
    key: 'remove',
    value: function remove() {
      this._composite.remove();
      _get(CompositeRadialView.prototype.__proto__ || Object.getPrototypeOf(CompositeRadialView.prototype), 'remove', this).call(this);
    }

    /**
     * Render axes and calculate inner margins for charts
     */

  }, {
    key: '_renderAxes',
    value: function _renderAxes() {
      var _this3 = this;

      var allAxes = _lodash2.default.concat(this.config.activeAngularAxes, this.config.activeRadialAxes);
      var elements = this.svg.selectAll(this.selectors.axis).data(allAxes, function (d) {
        return d.name;
      });

      elements.enter().each(function (axis) {
        var component = _this3._composite.add({
          type: 'RadialAxis',
          config: _this3.config.getAxisConfig(axis.name),
          container: _this3._container
        });
        component.el.__data__ = axis;
      });

      elements.each(function (axis) {
        var component = _this3._composite.get(axis.id);
        // if only a scale is changed Backbone doesn't trigger "change" event and no render will happen
        component.config.set(_this3.config.getAxisConfig(axis.name), { silent: true });
        component.render();
      });

      elements.exit().each(function (axis) {
        _this3._composite.remove(axis.id);
      });
    }

    /**
     * Child components are initialized on the first call
     * Individual component scales are calculated and stored in this.config
     * No rendering here
     */

  }, {
    key: '_updateComponents',
    value: function _updateComponents(p) {
      var _this4 = this;

      var config = {
        // all sub charts should not react on model change as some preparation for them is done here
        frozen: true,
        // TODO add axes space to the chart margins
        margin: this.config.margin,
        width: this.width,
        height: this.height

        // reset calculated values from previous render
      };_lodash2.default.each(this.config.accessors, function (accessor) {
        var angularAxisName = _this4.config.getAngularAxisName(accessor);
        _this4.config.set('axes.' + angularAxisName + '.calculatedDomain', undefined, { silent: true });
        var radialAxisName = _this4.config.getRadialAxisName(accessor);
        _this4.config.set('axes.' + radialAxisName + '.calculatedDomain', undefined, { silent: true });
      });

      var children = this.svg.selectAll(this.selectors.node).data(this.config.children, function (d) {
        return d.key;
      });

      children.enter().merge(children).each(function (child) {
        var type = _this4.config.getComponentType(child.accessor);
        config.id = _this4.id + '-' + child.key;
        config.angular = _lodash2.default.merge({}, child.accessor);
        config.radial = _lodash2.default.merge({}, child.accessor);
        config.angular.accessor = child.accessor.angular;
        config.angular.axis = child.accessor.angularAxis;
        config.radial.accessor = child.accessor.radial;
        config.radial.axis = child.accessor.radialAxis;
        config.tooltip = child.accessor.tooltip;
        config.barPadding = child.accessor.barPadding;

        var component = _this4._composite.get(_this4.id + '-' + child.key);
        if (component) component.config.set(config, { silent: true });else {
          component = _this4._composite.add({
            type: type,
            config: config,
            model: _this4.model,
            container: _this4._container
          });
          component.d3.classed(_this4.selectorClass('node'), true);
          // TODO clipping .attr('clip-path', `url(#${this.id}-${this.selectors.clip})`)
          component.el.__data__ = { key: child.key };
        }

        component.config.calculateScales(_this4.model, _this4.innerWidth, _this4.innerHeight);
        var angularAxisName = _this4.config.getAngularAxisName(child.accessor);
        var calculatedDomain = _this4.config.get('axes.' + angularAxisName + '.calculatedDomain') || [];
        calculatedDomain = d3Array.extent(calculatedDomain.concat(component.config.get('angular.calculatedDomain')));
        _this4.config.set('axes.' + angularAxisName + '.calculatedDomain', calculatedDomain, { silent: true });
        var radialAxisName = _this4.config.getRadialAxisName(child.accessor);
        calculatedDomain = _this4.config.get('axes.' + radialAxisName + '.calculatedDomain') || [];
        calculatedDomain = d3Array.extent(calculatedDomain.concat(component.config.get('radial.calculatedDomain')));
        _this4.config.set('axes.' + radialAxisName + '.calculatedDomain', calculatedDomain, { silent: true });
      });

      children.exit().each(function (child) {
        _this4._composite.remove(_this4.id + '-' + child.key);
      });
    }
  }, {
    key: '_showLegend',
    value: function _showLegend() {
      var _this5 = this;

      var legendId = this.config.get('legend');
      if (!legendId) return;

      var config = {
        colorScheme: this.config.get('colorScheme')
        //chartTypes: this.config.get('chartTypes'),
      };
      var data = _lodash2.default.map(this.config.accessors, function (accessor) {
        return {
          key: accessor.angular + '-' + accessor.radial,
          disabled: accessor.disabled,
          label: _this5.config.getLabel(undefined, accessor),
          color: _this5.config.getColor(accessor),
          chartType: config.chartTypes ? accessor.chart : undefined,
          axis: accessor.axis,
          shape: accessor.shape
        };
      });
      _Actionman2.default.fire('ToggleVisibility', legendId, true, data, config);
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'g';
    }
  }, {
    key: 'selectors',
    get: function get() {
      return _lodash2.default.extend(_get(CompositeRadialView.prototype.__proto__ || Object.getPrototypeOf(CompositeRadialView.prototype), 'selectors', this), {
        node: '.child',
        axis: '.radial-axis',
        clip: 'clipPath'
      });
    }
  }, {
    key: 'height',
    get: function get() {
      return this.config.get('height') || this.width;
    }
  }]);

  return CompositeRadialView;
}(_chartView2.default);

exports.default = CompositeRadialView;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Action2 = __webpack_require__(7);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SelectChartType = function (_Action) {
  _inherits(SelectChartType, _Action);

  function SelectChartType(p) {
    _classCallCheck(this, SelectChartType);

    var _this = _possibleConstructorReturn(this, (SelectChartType.__proto__ || Object.getPrototypeOf(SelectChartType)).call(this, p));

    _this._deny = false;
    return _this;
  }

  _createClass(SelectChartType, [{
    key: '_execute',
    value: function _execute() {
      var _registrar$config;

      (_registrar$config = this._registrar.config).setChartType.apply(_registrar$config, arguments);
    }
  }]);

  return SelectChartType;
}(_Action3.default);

exports.default = SelectChartType;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Util = exports.actions = exports.models = exports.helpers = exports.components = exports.composites = undefined;

var _helpers = __webpack_require__(88);

var helpers = _interopRequireWildcard(_helpers);

var _models = __webpack_require__(43);

var models = _interopRequireWildcard(_models);

var _components = __webpack_require__(41);

var components = _interopRequireWildcard(_components);

var _composites = __webpack_require__(42);

var composites = _interopRequireWildcard(_composites);

var _actions = __webpack_require__(87);

var actions = _interopRequireWildcard(_actions);

var _Util = __webpack_require__(26);

var Util = _interopRequireWildcard(_Util);

__webpack_require__(89);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.composites = composites;
exports.components = components;
exports.helpers = helpers;
exports.models = models;
exports.actions = actions;
exports.Util = Util; /*
                      * Copyright (c) Juniper Networks, Inc. All rights reserved.
                      */

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _backbone = __webpack_require__(40);

var _backbone2 = _interopRequireDefault(_backbone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ContrailModel = function (_Backbone$Model) {
  _inherits(ContrailModel, _Backbone$Model);

  function ContrailModel() {
    var _ref;

    _classCallCheck(this, ContrailModel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ContrailModel.__proto__ || Object.getPrototypeOf(ContrailModel)).call.apply(_ref, [this].concat(args)));

    _this.attributes = _lodash2.default.defaultsDeep(_this.attributes, _this.defaults);
    return _this;
  }

  _createClass(ContrailModel, [{
    key: 'get',
    value: function get(attr) {
      return _lodash2.default.get(this.attributes, attr);
    }
  }, {
    key: 'set',
    value: function set(key, value, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs = void 0;
      if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
        attrs = key;
        options = value;
      } else {
        (attrs = {})[key] = value;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset = options.unset;
      var silent = options.silent;

      // array of attribute names (keys)
      var changes = [];
      var isChanging = this._isChanging;
      this._isChanging = true;

      if (!isChanging) {
        this._previousAttributes = _lodash2.default.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev = this._previousAttributes;

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        value = _lodash2.default.get(attrs, attr);
        var currentValue = _lodash2.default.get(current, attr);
        if (!_lodash2.default.isEqual(currentValue, value)) changes.push(attr);
        if (!_lodash2.default.isEqual(_lodash2.default.get(prev, attr), value)) {
          _lodash2.default.set(changed, attr, value);
        } else {
          this.changed = _lodash2.default.omit(changed, attr);
        }
        if (unset) {
          this.attributes = _lodash2.default.omit(current, attr);
        } else {
          var newValue = _lodash2.default.isPlainObject(currentValue) ? _lodash2.default.extend(currentValue, value) : value;
          _lodash2.default.set(current, attr, newValue);
        }
      }

      // Update the `id`.
      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (isChanging) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._isChanging = false;
      return this;
    }

    // TODO override changedAttributes to support nested objects

  }]);

  return ContrailModel;
}(_backbone2.default.Model);

exports.default = ContrailModel;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _backbone = __webpack_require__(40);

var _backbone2 = _interopRequireDefault(_backbone);

var _jquery = __webpack_require__(86);

var _jquery2 = _interopRequireDefault(_jquery);

var _d3Selection = __webpack_require__(0);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _Actionman = __webpack_require__(4);

var _Actionman2 = _interopRequireDefault(_Actionman);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) Juniper Networks, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


d3Selection.selection.prototype.delegate = function (eventName, targetSelector, handler) {
  function delegated() {
    // TODO use jquery.closest d3 alternative here
    // as native closest is not supported in IE15
    var eventTarget = (0, _jquery2.default)(d3Selection.event.target).closest(targetSelector)[0];
    if (eventTarget) handler.call(eventTarget, eventTarget.__data__, eventTarget, d3Selection.event);
  }
  return this.on(eventName, delegated);
};
/**
 * Extending Backbone View
 */

var ContrailView = function (_Backbone$View) {
  _inherits(ContrailView, _Backbone$View);

  function ContrailView(p) {
    _classCallCheck(this, ContrailView);

    var _this = _possibleConstructorReturn(this, (ContrailView.__proto__ || Object.getPrototypeOf(ContrailView)).call(this, p));

    _this.actionman = _Actionman2.default;
    return _this;
  }
  /**
   * @return {String} this class name without 'View'
   */


  _createClass(ContrailView, [{
    key: 'selectorClass',

    /**
     * Convenience method to get class name of selector
     * Just remove leading dot
     */
    value: function selectorClass(selectorName) {
      return this.selectors[selectorName].substr(1);
    }

    // TODO move this function to Utils?
    // instanceof SVGElement works for existing element

  }, {
    key: 'isTagNameSvg',
    value: function isTagNameSvg(tagName) {
      return _lodash2.default.includes(['g'], tagName);
    }
  }, {
    key: 'delegateEvents',
    value: function delegateEvents(events) {
      events || (events = _lodash2.default.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_lodash2.default.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(this.delegateEventSplitter);
        this.delegate(match[1], match[2], method.bind(this), events[key]);
      }
      return this;
    }
    /**
     * Replace jquery with d3
     * d3 doesn't support multiple listeners on the same event and element,
     * so add listener name to create event namespace
     */

  }, {
    key: 'delegate',
    value: function delegate(eventName, selectorName, listener, listenerName) {
      // code minification drops original listener name
      // const listenerName = listener.name.split(' ')[1]
      var uniqEventName = eventName + '.' + selectorName + '.' + listenerName + '.delegateEvents' + this.cid;
      this.d3.delegate(uniqEventName, this.selectors[selectorName], listener);
      return this;
    }
    // d3 doesn't support two levels of event namespace
    // TODO undelegate one by one

  }, {
    key: 'undelegateEvents',
    value: function undelegateEvents() {
      // if (this.d3) this.d3.on('.delegateEvents' + this.cid, null)
      return this;
    }
  }, {
    key: 'undelegate',
    value: function undelegate(eventName, selectorName, listener) {
      var listenerName = listener.name.split(' ')[1];
      this.d3.on(eventName + '.' + selectorName + '.' + listenerName + '.delegateEvents' + this.cid, null);
      return this;
    }
    /**
     * svg elements are xml and require namespace to be specified
     */

  }, {
    key: '_createElement',
    value: function _createElement(tagName) {
      if (this.isTagNameSvg(tagName)) {
        return document.createElementNS('http://www.w3.org/2000/svg', tagName);
      } else return _get(ContrailView.prototype.__proto__ || Object.getPrototypeOf(ContrailView.prototype), '_createElement', this).call(this, tagName);
    }
    /**
     * d3 selection shortcut for view element
     */

  }, {
    key: '_setElement',
    value: function _setElement(el) {
      _get(ContrailView.prototype.__proto__ || Object.getPrototypeOf(ContrailView.prototype), '_setElement', this).call(this, el);
      this.d3 = d3Selection.select(el);
    }
  }, {
    key: 'type',
    get: function get() {
      return this.constructor.name.slice(0, -4);
    }
    /**
     * @return {String} this class name in dashed case without 'View'
     */

  }, {
    key: 'className',
    get: function get() {
      return this.constructor.name.slice(0, -4).replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
  }, {
    key: 'delegateEventSplitter',
    get: function get() {
      return (/^(\S+)\s*(.*)$/
      );
    }
  }]);

  return ContrailView;
}(_backbone2.default.View);

exports.default = ContrailView;

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_nest__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_nest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_nest__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return __WEBPACK_IMPORTED_MODULE_0__src_nest___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_set__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_set__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "set", function() { return __WEBPACK_IMPORTED_MODULE_1__src_set___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_map__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_2__src_map___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_keys__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_keys__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_3__src_keys___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_values__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_values__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "values", function() { return __WEBPACK_IMPORTED_MODULE_4__src_values___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_entries__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__src_entries__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return __WEBPACK_IMPORTED_MODULE_5__src_entries___default.a; });








/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dispatch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dispatch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_dispatch__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dispatch___default.a; });



/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_sankey__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_sankey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_sankey__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "sankey", function() { return __WEBPACK_IMPORTED_MODULE_0__src_sankey___default.a; });



/***/ }),
/* 171 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 172 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 173 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 174 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 175 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 176 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 177 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 178 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 179 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 180 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 181 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 184 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 185 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 186 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 187 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 188 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 189 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 190 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 191 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 192 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 193 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 194 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 195 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 196 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 197 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 198 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(11);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"color-select\" data-accessor=\""
    + alias4(((helper = (helper = helpers.accessor || (depth0 != null ? depth0.accessor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accessor","hash":{},"data":data}) : helper)))
    + "\">\n  <span class=\"color-badge\" style=\"background-color: "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\"></span>\n  <span class=\"label\">"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <span class=\"color-picker-palette-color\" style=\"background-color: "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\">&nbsp;</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.series : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"color-picker-palette hide\">\n  <div class=\"color-picker-palette-header\">\n    <span class=\"color-picker-palette-title\"></span>\n  </div>\n  <div class=\"color-picker-palette-body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(11);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"opener\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<button title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n  <i class=\""
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i>\n</button>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.component : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(11);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"control-panel-items\"></div> \n<div class=\"panel hide\"></div>\n";
},"useData":true});

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(11);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"head\">\n  <span class=\"head-icon\"><i class=\""
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i></span>\n  <span class=\"title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n  <span class=\"close\"></span>\n</div>\n<div class=\"body\">\n  <div class=\"control-panel-expanded-container\"></div> \n</div>\n";
},"useData":true});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(11);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"filter-item\"> \n    <input id=\"filter-item-input-"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"filter-item-input\" type=\"checkbox\" name=\"filter\" class=\"accessor-data-checkbox\" value=\""
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enabled : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "> \n    <label for=\"filter-item-input-"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"accessor-data-checkbox-label\">"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</label> \n  </div> \n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"filter-items\"> \n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div> \n";
},"useData":true});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(11);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"edit-legend\"><i class=\"icon-edit\" aria-hidden=\"true\"></i></div>";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"key "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checked : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-key=\""
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">\n  		<div class=\"edit-key\">\n  			<div class=\"select select--color\" style=\"background-color: "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "; border-color: "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\" data-color=\""
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\"><div class=\"triangle\"></div></div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].chartTypes : depths[1]),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  		</div>\n  		<label class=\"legend-key checkbox\">\n  			<input type=\"checkbox\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checked : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.shape : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.axis : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        "
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\n  		</label>\n  	</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "selected";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  			<div class=\"select select--chart fa "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\" data-chart-type=\""
    + alias4(((helper = (helper = helpers.chartType || (depth0 != null ? depth0.chartType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chartType","hash":{},"data":data}) : helper)))
    + "\"><div class=\"triangle\"></div></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "        <div class=\"indicator fa\" style=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checked : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.shape || (depth0 != null ? depth0.shape : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"shape","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return " color: "
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"color","hash":{},"data":data}) : helper)))
    + " ";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "        <div class=\"color-indicator\" style=\"border-color: "
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "; "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checked : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"></div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return " background-color: "
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"color","hash":{},"data":data}) : helper)))
    + " ";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <span class=\"associate-axis\">"
    + container.escapeExpression(((helper = (helper = helpers.axis || (depth0 != null ? depth0.axis : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"axis","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "      <div class=\"switch switch--color\" style=\"background-color: "
    + alias2(alias1(depth0, depth0))
    + "; border-color: "
    + alias2(alias1(depth0, depth0))
    + "\" data-color=\""
    + alias2(alias1(depth0, depth0))
    + "\"></div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"switch switch--chart fa "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\" data-chart-type=\""
    + alias4(((helper = (helper = helpers.chartType || (depth0 != null ? depth0.chartType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chartType","hash":{},"data":data}) : helper)))
    + "\" data-axis=\""
    + alias4(((helper = (helper = helpers.axisLabel || (depth0 != null ? depth0.axisLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"axisLabel","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"legend-inner-container\">\n  "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.editable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <div class=\"keys\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.keys : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <div class=\"selector\">\n    <div class=\"switches switches--colors\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"switches switches--charts\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.chartTypes : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</div>\n";
},"useData":true,"useDepths":true});

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(11);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"legend-group\">\n  <span class=\"color-indicator\" style=\"background-color: "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">&nbsp;</span>\n  <span class=\"legend-label\">"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(11);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression;

  return "<div class=\"message-heading\">\n  <i class=\"fa "
    + alias1(((helper = (helper = helpers.iconLevel || (depth0 != null ? depth0.iconLevel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"iconLevel","hash":{},"data":data}) : helper)))
    + "\" aria-hidden=\"true\"></i>\n  <span class=\"message-title\">\n      "
    + alias1(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\n  </span>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"message-body\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.text : depth0), depth0))
    + "</div>\n";
},"useData":true});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(11);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"tooltip-item\">\n      "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n      <span class=\"tooltip-item-label\">"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n      <span class=\"tooltip-item-value\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"tooltip-item-color\" style=\"background-color: "
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"color","hash":{},"data":data}) : helper)))
    + "\" ></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"tooltip-content\" style=\"color: "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "; background-color: "
    + alias4(((helper = (helper = helpers.backgroundColor || (depth0 != null ? depth0.backgroundColor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backgroundColor","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"tooltip-items\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(85);

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(222);

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(20);

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(10);

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(221);

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(220);

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(210);

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(10);

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(212);

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(213);

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(214);

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(215);

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(216);

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(217);

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(218);

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(10);

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0QsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(10);

var _exception = __webpack_require__(20);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErRSxVQUFVOzt5QkFDbkUsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQTtRQUNKLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixpQkFBVyxHQUFHLHlCQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pGOztBQUVELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRW5CLFlBQUksV0FBVyxFQUFFO0FBQ2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO09BQ0Y7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDL0UsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dFBhdGg7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJpb3JLZXk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(20);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(10);

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(10);

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUErRSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6IndpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(10);

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* global window */


exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(224)))

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(10);

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(20);

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(85);

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0]) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      var data = options.data;
      while (data['partial-block'] === noop) {
        data = data._parent;
      }
      partial = data['partial-block'];
      data['partial-block'] = noop;
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    options.data = _base.createFrame(options.data);
    partialBlock = options.data['partial-block'] = options.fn;

    if (partialBlock.partials) {
      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
    }
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFNUMsV0FBUyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN2RCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsVUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7T0FDdkI7S0FDRjs7QUFFRCxXQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RFLFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFeEUsUUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDakMsYUFBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6RixZQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0QsUUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ2xCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixZQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM1QixrQkFBTTtXQUNQOztBQUVELGVBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztBQUNELGNBQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzNCO0FBQ0QsYUFBTyxNQUFNLENBQUM7S0FDZixNQUFNO0FBQ0wsWUFBTSwyQkFBYyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRywwREFBMEQsQ0FBQyxDQUFDO0tBQ2pIO0dBQ0Y7OztBQUdELE1BQUksU0FBUyxHQUFHO0FBQ2QsVUFBTSxFQUFFLGdCQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDMUIsVUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUEsQUFBQyxFQUFFO0FBQ2xCLGNBQU0sMkJBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsQ0FBQztPQUM3RDtBQUNELGFBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0FBQ0QsVUFBTSxFQUFFLGdCQUFTLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDN0IsVUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMxQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFlBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDeEMsaUJBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO09BQ0Y7S0FDRjtBQUNELFVBQU0sRUFBRSxnQkFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ2pDLGFBQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ3hFOztBQUVELG9CQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7QUFDeEMsaUJBQWEsRUFBRSxvQkFBb0I7O0FBRW5DLE1BQUUsRUFBRSxZQUFTLENBQUMsRUFBRTtBQUNkLFVBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixTQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdkMsYUFBTyxHQUFHLENBQUM7S0FDWjs7QUFFRCxZQUFRLEVBQUUsRUFBRTtBQUNaLFdBQU8sRUFBRSxpQkFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbkUsVUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDakMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsVUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxtQkFBbUIsRUFBRTtBQUN4RCxzQkFBYyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQzNGLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUMxQixzQkFBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDOUQ7QUFDRCxhQUFPLGNBQWMsQ0FBQztLQUN2Qjs7QUFFRCxRQUFJLEVBQUUsY0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzNCLGFBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ3ZCLGFBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO09BQ3ZCO0FBQ0QsYUFBTyxLQUFLLENBQUM7S0FDZDtBQUNELFNBQUssRUFBRSxlQUFTLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDN0IsVUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQzs7QUFFMUIsVUFBSSxLQUFLLElBQUksTUFBTSxJQUFLLEtBQUssS0FBSyxNQUFNLEFBQUMsRUFBRTtBQUN6QyxXQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ3ZDOztBQUVELGFBQU8sR0FBRyxDQUFDO0tBQ1o7O0FBRUQsUUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSTtBQUNqQixnQkFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRO0dBQ3BDLENBQUM7O0FBRUYsV0FBUyxHQUFHLENBQUMsT0FBTyxFQUFnQjtRQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDaEMsUUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzs7QUFFeEIsT0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQixRQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQzVDLFVBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2hDO0FBQ0QsUUFBSSxNQUFNLFlBQUE7UUFDTixXQUFXLEdBQUcsWUFBWSxDQUFDLGNBQWMsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO0FBQy9ELFFBQUksWUFBWSxDQUFDLFNBQVMsRUFBRTtBQUMxQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDbEIsY0FBTSxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO09BQzNGLE1BQU07QUFDTCxjQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUNwQjtLQUNGOztBQUVELGFBQVMsSUFBSSxDQUFDLE9BQU8sZ0JBQWU7QUFDbEMsYUFBTyxFQUFFLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3JIO0FBQ0QsUUFBSSxHQUFHLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDdEcsV0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQy9CO0FBQ0QsS0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBRWpCLEtBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBUyxPQUFPLEVBQUU7QUFDN0IsUUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDcEIsZUFBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVsRSxVQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUU7QUFDM0IsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUN0RTtBQUNELFVBQUksWUFBWSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsYUFBYSxFQUFFO0FBQ3pELGlCQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7T0FDNUU7S0FDRixNQUFNO0FBQ0wsZUFBUyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3BDLGVBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUN0QyxlQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7S0FDM0M7R0FDRixDQUFDOztBQUVGLEtBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbEQsUUFBSSxZQUFZLENBQUMsY0FBYyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQy9DLFlBQU0sMkJBQWMsd0JBQXdCLENBQUMsQ0FBQztLQUMvQztBQUNELFFBQUksWUFBWSxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNyQyxZQUFNLDJCQUFjLHlCQUF5QixDQUFDLENBQUM7S0FDaEQ7O0FBRUQsV0FBTyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDakYsQ0FBQztBQUNGLFNBQU8sR0FBRyxDQUFDO0NBQ1o7O0FBRU0sU0FBUyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDNUYsV0FBUyxJQUFJLENBQUMsT0FBTyxFQUFnQjtRQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDakMsUUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDO0FBQzNCLFFBQUksTUFBTSxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDbEMsbUJBQWEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxQzs7QUFFRCxXQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQ2YsT0FBTyxFQUNQLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFDckMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQ3BCLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQ3hELGFBQWEsQ0FBQyxDQUFDO0dBQ3BCOztBQUVELE1BQUksR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOztBQUV6RSxNQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNqQixNQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN4QyxNQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFtQixJQUFJLENBQUMsQ0FBQztBQUM1QyxTQUFPLElBQUksQ0FBQztDQUNiOztBQUVNLFNBQVMsY0FBYyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3hELE1BQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixRQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7QUFDckMsVUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztBQUN4QixhQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDckMsWUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7T0FDckI7QUFDRCxhQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2hDLFVBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDOUIsTUFBTTtBQUNMLGFBQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQztHQUNGLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFOztBQUV6QyxXQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUN2QixXQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUNyQztBQUNELFNBQU8sT0FBTyxDQUFDO0NBQ2hCOztBQUVNLFNBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZELFNBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLE1BQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLFdBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7R0FDdkU7O0FBRUQsTUFBSSxZQUFZLFlBQUEsQ0FBQztBQUNqQixNQUFJLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7QUFDckMsV0FBTyxDQUFDLElBQUksR0FBRyxrQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsZ0JBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7O0FBRTFELFFBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtBQUN6QixhQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzlFO0dBQ0Y7O0FBRUQsTUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLFlBQVksRUFBRTtBQUN6QyxXQUFPLEdBQUcsWUFBWSxDQUFDO0dBQ3hCOztBQUVELE1BQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtBQUN6QixVQUFNLDJCQUFjLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDLENBQUM7R0FDNUUsTUFBTSxJQUFJLE9BQU8sWUFBWSxRQUFRLEVBQUU7QUFDdEMsV0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQ2xDO0NBQ0Y7O0FBRU0sU0FBUyxJQUFJLEdBQUc7QUFBRSxTQUFPLEVBQUUsQ0FBQztDQUFFOztBQUVyQyxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQy9CLE1BQUksQ0FBQyxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksSUFBSSxDQUFBLEFBQUMsRUFBRTtBQUM5QixRQUFJLEdBQUcsSUFBSSxHQUFHLGtCQUFZLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNyQyxRQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztHQUNyQjtBQUNELFNBQU8sSUFBSSxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUN6RSxNQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUU7QUFDaEIsUUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVGLFNBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYiIsImZpbGUiOiJydW50aW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vZXhjZXB0aW9uJztcbmltcG9ydCB7IENPTVBJTEVSX1JFVklTSU9OLCBSRVZJU0lPTl9DSEFOR0VTLCBjcmVhdGVGcmFtZSB9IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICBjb25zdCBjb21waWxlclJldmlzaW9uID0gY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSB8fCAxLFxuICAgICAgICBjdXJyZW50UmV2aXNpb24gPSBDT01QSUxFUl9SRVZJU0lPTjtcblxuICBpZiAoY29tcGlsZXJSZXZpc2lvbiAhPT0gY3VycmVudFJldmlzaW9uKSB7XG4gICAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBjdXJyZW50UmV2aXNpb24pIHtcbiAgICAgIGNvbnN0IHJ1bnRpbWVWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgPSBSRVZJU0lPTl9DSEFOR0VTW2NvbXBpbGVyUmV2aXNpb25dO1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIHJ1bnRpbWVWZXJzaW9ucyArICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVyVmVyc2lvbnMgKyAnKS4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAgICAgJ1BsZWFzZSB1cGRhdGUgeW91ciBydW50aW1lIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVySW5mb1sxXSArICcpLicpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHN1ZWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJ0aWFsID0gZW52LlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG4gICAgbGV0IHJlc3VsdCA9IGVudi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKHBhcnRpYWwsIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsIGVudik7XG4gICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuaW5kZW50KSB7XG4gICAgICAgIGxldCBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBvcHRpb25zLmluZGVudCArIGxpbmVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIGxldCBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbihvYmosIG5hbWUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gb2JqKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdcIicgKyBuYW1lICsgJ1wiIG5vdCBkZWZpbmVkIGluICcgKyBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9ialtuYW1lXTtcbiAgICB9LFxuICAgIGxvb2t1cDogZnVuY3Rpb24oZGVwdGhzLCBuYW1lKSB7XG4gICAgICBjb25zdCBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZGVwdGhzW2ldICYmIGRlcHRoc1tpXVtuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbihjdXJyZW50LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuICAgIH0sXG5cbiAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG4gICAgZm46IGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG4gICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHByb2dyYW1zOiBbXSxcbiAgICBwcm9ncmFtOiBmdW5jdGlvbihpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICBsZXQgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbih2YWx1ZSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlICh2YWx1ZSAmJiBkZXB0aC0tKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIG1lcmdlOiBmdW5jdGlvbihwYXJhbSwgY29tbW9uKSB7XG4gICAgICBsZXQgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG4gICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIChwYXJhbSAhPT0gY29tbW9uKSkge1xuICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICBub29wOiBlbnYuVk0ubm9vcCxcbiAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuICB9O1xuXG4gIGZ1bmN0aW9uIHJldChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgbGV0IGRlcHRocyxcbiAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT0gb3B0aW9ucy5kZXB0aHNbMF0gPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IG9wdGlvbnMuZGVwdGhzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwdGhzID0gW2NvbnRleHRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1haW4oY29udGV4dC8qLCBvcHRpb25zKi8pIHtcbiAgICAgIHJldHVybiAnJyArIHRlbXBsYXRlU3BlYy5tYWluKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgfVxuICAgIG1haW4gPSBleGVjdXRlRGVjb3JhdG9ycyh0ZW1wbGF0ZVNwZWMubWFpbiwgbWFpbiwgY29udGFpbmVyLCBvcHRpb25zLmRlcHRocyB8fCBbXSwgZGF0YSwgYmxvY2tQYXJhbXMpO1xuICAgIHJldHVybiBtYWluKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG4gIHJldC5pc1RvcCA9IHRydWU7XG5cbiAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5oZWxwZXJzLCBlbnYuaGVscGVycyk7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCB8fCB0ZW1wbGF0ZVNwZWMudXNlRGVjb3JhdG9ycykge1xuICAgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmRlY29yYXRvcnMsIGVudi5kZWNvcmF0b3JzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBvcHRpb25zLmhlbHBlcnM7XG4gICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcHRpb25zLnBhcnRpYWxzO1xuICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBvcHRpb25zLmRlY29yYXRvcnM7XG4gICAgfVxuICB9O1xuXG4gIHJldC5fY2hpbGQgPSBmdW5jdGlvbihpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCB0ZW1wbGF0ZVNwZWNbaV0sIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICB9O1xuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICBmdW5jdGlvbiBwcm9nKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBjdXJyZW50RGVwdGhzID0gZGVwdGhzO1xuICAgIGlmIChkZXB0aHMgJiYgY29udGV4dCAhPSBkZXB0aHNbMF0pIHtcbiAgICAgIGN1cnJlbnREZXB0aHMgPSBbY29udGV4dF0uY29uY2F0KGRlcHRocyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuKGNvbnRhaW5lcixcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscyxcbiAgICAgICAgb3B0aW9ucy5kYXRhIHx8IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLFxuICAgICAgICBjdXJyZW50RGVwdGhzKTtcbiAgfVxuXG4gIHByb2cgPSBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKTtcblxuICBwcm9nLnByb2dyYW0gPSBpO1xuICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG4gIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG4gIHJldHVybiBwcm9nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICBpZiAoIXBhcnRpYWwpIHtcbiAgICBpZiAob3B0aW9ucy5uYW1lID09PSAnQHBhcnRpYWwtYmxvY2snKSB7XG4gICAgICBsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgIHdoaWxlIChkYXRhWydwYXJ0aWFsLWJsb2NrJ10gPT09IG5vb3ApIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHBhcnRpYWwgPSBkYXRhWydwYXJ0aWFsLWJsb2NrJ107XG4gICAgICBkYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBub29wO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMucGFydGlhbCA9IHRydWU7XG4gIGlmIChvcHRpb25zLmlkcykge1xuICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCA9IG9wdGlvbnMuaWRzWzBdIHx8IG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aDtcbiAgfVxuXG4gIGxldCBwYXJ0aWFsQmxvY2s7XG4gIGlmIChvcHRpb25zLmZuICYmIG9wdGlvbnMuZm4gIT09IG5vb3ApIHtcbiAgICBvcHRpb25zLmRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIHBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChwYXJ0aWFsQmxvY2sucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIHBhcnRpYWxCbG9jay5wYXJ0aWFscyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcbiAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuICB9IGVsc2UgaWYgKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyByZXR1cm4gJyc7IH1cblxuZnVuY3Rpb24gaW5pdERhdGEoY29udGV4dCwgZGF0YSkge1xuICBpZiAoIWRhdGEgfHwgISgncm9vdCcgaW4gZGF0YSkpIHtcbiAgICBkYXRhID0gZGF0YSA/IGNyZWF0ZUZyYW1lKGRhdGEpIDoge307XG4gICAgZGF0YS5yb290ID0gY29udGV4dDtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcykge1xuICBpZiAoZm4uZGVjb3JhdG9yKSB7XG4gICAgbGV0IHByb3BzID0ge307XG4gICAgcHJvZyA9IGZuLmRlY29yYXRvcihwcm9nLCBwcm9wcywgY29udGFpbmVyLCBkZXB0aHMgJiYgZGVwdGhzWzBdLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICBVdGlscy5leHRlbmQocHJvZywgcHJvcHMpO1xuICB9XG4gIHJldHVybiBwcm9nO1xufVxuIl19


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/topojson/topojson Version 2.2.0. Copyright 2016 Mike Bostock.
(function (global, factory) {
   true ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.topojson = global.topojson || {})));
}(this, (function (exports) { 'use strict';

// Computes the bounding box of the specified hash of GeoJSON objects.
var bounds = function(objects) {
  var x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  function boundGeometry(geometry) {
    if (geometry && boundGeometryType.hasOwnProperty(geometry.type)) boundGeometryType[geometry.type](geometry);
  }

  var boundGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(boundGeometry); },
    Point: function(o) { boundPoint(o.coordinates); },
    MultiPoint: function(o) { o.coordinates.forEach(boundPoint); },
    LineString: function(o) { boundLine(o.coordinates); },
    MultiLineString: function(o) { o.coordinates.forEach(boundLine); },
    Polygon: function(o) { o.coordinates.forEach(boundLine); },
    MultiPolygon: function(o) { o.coordinates.forEach(boundMultiLine); }
  };

  function boundPoint(coordinates) {
    var x = coordinates[0],
        y = coordinates[1];
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  function boundLine(coordinates) {
    coordinates.forEach(boundPoint);
  }

  function boundMultiLine(coordinates) {
    coordinates.forEach(boundLine);
  }

  for (var key in objects) {
    boundGeometry(objects[key]);
  }

  return x1 >= x0 && y1 >= y0 ? [x0, y0, x1, y1] : undefined;
};

var hashset = function(size, hash, equal, type, empty) {
  if (arguments.length === 3) {
    type = Array;
    empty = null;
  }

  var store = new type(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
      mask = size - 1;

  for (var i = 0; i < size; ++i) {
    store[i] = empty;
  }

  function add(value) {
    var index = hash(value) & mask,
        match = store[index],
        collisions = 0;
    while (match != empty) {
      if (equal(match, value)) return true;
      if (++collisions >= size) throw new Error("full hashset");
      match = store[index = (index + 1) & mask];
    }
    store[index] = value;
    return true;
  }

  function has(value) {
    var index = hash(value) & mask,
        match = store[index],
        collisions = 0;
    while (match != empty) {
      if (equal(match, value)) return true;
      if (++collisions >= size) break;
      match = store[index = (index + 1) & mask];
    }
    return false;
  }

  function values() {
    var values = [];
    for (var i = 0, n = store.length; i < n; ++i) {
      var match = store[i];
      if (match != empty) values.push(match);
    }
    return values;
  }

  return {
    add: add,
    has: has,
    values: values
  };
};

var hashmap = function(size, hash, equal, keyType, keyEmpty, valueType) {
  if (arguments.length === 3) {
    keyType = valueType = Array;
    keyEmpty = null;
  }

  var keystore = new keyType(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
      valstore = new valueType(size),
      mask = size - 1;

  for (var i = 0; i < size; ++i) {
    keystore[i] = keyEmpty;
  }

  function set(key, value) {
    var index = hash(key) & mask,
        matchKey = keystore[index],
        collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key)) return valstore[index] = value;
      if (++collisions >= size) throw new Error("full hashmap");
      matchKey = keystore[index = (index + 1) & mask];
    }
    keystore[index] = key;
    valstore[index] = value;
    return value;
  }

  function maybeSet(key, value) {
    var index = hash(key) & mask,
        matchKey = keystore[index],
        collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key)) return valstore[index];
      if (++collisions >= size) throw new Error("full hashmap");
      matchKey = keystore[index = (index + 1) & mask];
    }
    keystore[index] = key;
    valstore[index] = value;
    return value;
  }

  function get(key, missingValue) {
    var index = hash(key) & mask,
        matchKey = keystore[index],
        collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key)) return valstore[index];
      if (++collisions >= size) break;
      matchKey = keystore[index = (index + 1) & mask];
    }
    return missingValue;
  }

  function keys() {
    var keys = [];
    for (var i = 0, n = keystore.length; i < n; ++i) {
      var matchKey = keystore[i];
      if (matchKey != keyEmpty) keys.push(matchKey);
    }
    return keys;
  }

  return {
    set: set,
    maybeSet: maybeSet, // set if unset
    get: get,
    keys: keys
  };
};

var equalPoint = function(pointA, pointB) {
  return pointA[0] === pointB[0] && pointA[1] === pointB[1];
};

// TODO if quantized, use simpler Int32 hashing?

var buffer = new ArrayBuffer(16);
var floats = new Float64Array(buffer);
var uints = new Uint32Array(buffer);

var hashPoint = function(point) {
  floats[0] = point[0];
  floats[1] = point[1];
  var hash = uints[0] ^ uints[1];
  hash = hash << 5 ^ hash >> 7 ^ uints[2] ^ uints[3];
  return hash & 0x7fffffff;
};

// Given an extracted (pre-)topology, identifies all of the junctions. These are
// the points at which arcs (lines or rings) will need to be cut so that each
// arc is represented uniquely.
//
// A junction is a point where at least one arc deviates from another arc going
// through the same point. For example, consider the point B. If there is a arc
// through ABC and another arc through CBA, then B is not a junction because in
// both cases the adjacent point pairs are {A,C}. However, if there is an
// additional arc ABD, then {A,D} != {A,C}, and thus B becomes a junction.
//
// For a closed ring ABCA, the first point A’s adjacent points are the second
// and last point {B,C}. For a line, the first and last point are always
// considered junctions, even if the line is closed; this ensures that a closed
// line is never rotated.
var join = function(topology) {
  var coordinates = topology.coordinates,
      lines = topology.lines,
      rings = topology.rings,
      indexes = index(),
      visitedByIndex = new Int32Array(coordinates.length),
      leftByIndex = new Int32Array(coordinates.length),
      rightByIndex = new Int32Array(coordinates.length),
      junctionByIndex = new Int8Array(coordinates.length),
      junctionCount = 0, // upper bound on number of junctions
      i, n,
      previousIndex,
      currentIndex,
      nextIndex;

  for (i = 0, n = coordinates.length; i < n; ++i) {
    visitedByIndex[i] = leftByIndex[i] = rightByIndex[i] = -1;
  }

  for (i = 0, n = lines.length; i < n; ++i) {
    var line = lines[i],
        lineStart = line[0],
        lineEnd = line[1];
    currentIndex = indexes[lineStart];
    nextIndex = indexes[++lineStart];
    ++junctionCount, junctionByIndex[currentIndex] = 1; // start
    while (++lineStart <= lineEnd) {
      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[lineStart]);
    }
    ++junctionCount, junctionByIndex[nextIndex] = 1; // end
  }

  for (i = 0, n = coordinates.length; i < n; ++i) {
    visitedByIndex[i] = -1;
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    var ring = rings[i],
        ringStart = ring[0] + 1,
        ringEnd = ring[1];
    previousIndex = indexes[ringEnd - 1];
    currentIndex = indexes[ringStart - 1];
    nextIndex = indexes[ringStart];
    sequence(i, previousIndex, currentIndex, nextIndex);
    while (++ringStart <= ringEnd) {
      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[ringStart]);
    }
  }

  function sequence(i, previousIndex, currentIndex, nextIndex) {
    if (visitedByIndex[currentIndex] === i) return; // ignore self-intersection
    visitedByIndex[currentIndex] = i;
    var leftIndex = leftByIndex[currentIndex];
    if (leftIndex >= 0) {
      var rightIndex = rightByIndex[currentIndex];
      if ((leftIndex !== previousIndex || rightIndex !== nextIndex)
        && (leftIndex !== nextIndex || rightIndex !== previousIndex)) {
        ++junctionCount, junctionByIndex[currentIndex] = 1;
      }
    } else {
      leftByIndex[currentIndex] = previousIndex;
      rightByIndex[currentIndex] = nextIndex;
    }
  }

  function index() {
    var indexByPoint = hashmap(coordinates.length * 1.4, hashIndex, equalIndex, Int32Array, -1, Int32Array),
        indexes = new Int32Array(coordinates.length);

    for (var i = 0, n = coordinates.length; i < n; ++i) {
      indexes[i] = indexByPoint.maybeSet(i, i);
    }

    return indexes;
  }

  function hashIndex(i) {
    return hashPoint(coordinates[i]);
  }

  function equalIndex(i, j) {
    return equalPoint(coordinates[i], coordinates[j]);
  }

  visitedByIndex = leftByIndex = rightByIndex = null;

  var junctionByPoint = hashset(junctionCount * 1.4, hashPoint, equalPoint), j;

  // Convert back to a standard hashset by point for caller convenience.
  for (i = 0, n = coordinates.length; i < n; ++i) {
    if (junctionByIndex[j = indexes[i]]) {
      junctionByPoint.add(coordinates[j]);
    }
  }

  return junctionByPoint;
};

// Given an extracted (pre-)topology, cuts (or rotates) arcs so that all shared
// point sequences are identified. The topology can then be subsequently deduped
// to remove exact duplicate arcs.
var cut = function(topology) {
  var junctions = join(topology),
      coordinates = topology.coordinates,
      lines = topology.lines,
      rings = topology.rings,
      next,
      i, n;

  for (i = 0, n = lines.length; i < n; ++i) {
    var line = lines[i],
        lineMid = line[0],
        lineEnd = line[1];
    while (++lineMid < lineEnd) {
      if (junctions.has(coordinates[lineMid])) {
        next = {0: lineMid, 1: line[1]};
        line[1] = lineMid;
        line = line.next = next;
      }
    }
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    var ring = rings[i],
        ringStart = ring[0],
        ringMid = ringStart,
        ringEnd = ring[1],
        ringFixed = junctions.has(coordinates[ringStart]);
    while (++ringMid < ringEnd) {
      if (junctions.has(coordinates[ringMid])) {
        if (ringFixed) {
          next = {0: ringMid, 1: ring[1]};
          ring[1] = ringMid;
          ring = ring.next = next;
        } else { // For the first junction, we can rotate rather than cut.
          rotateArray(coordinates, ringStart, ringEnd, ringEnd - ringMid);
          coordinates[ringEnd] = coordinates[ringStart];
          ringFixed = true;
          ringMid = ringStart; // restart; we may have skipped junctions
        }
      }
    }
  }

  return topology;
};

function rotateArray(array, start, end, offset) {
  reverse(array, start, end);
  reverse(array, start, start + offset);
  reverse(array, start + offset, end);
}

function reverse(array, start, end) {
  for (var mid = start + ((end-- - start) >> 1), t; start < mid; ++start, --end) {
    t = array[start], array[start] = array[end], array[end] = t;
  }
}

// Given a cut topology, combines duplicate arcs.
var dedup = function(topology) {
  var coordinates = topology.coordinates,
      lines = topology.lines, line,
      rings = topology.rings, ring,
      arcCount = lines.length + rings.length,
      i, n;

  delete topology.lines;
  delete topology.rings;

  // Count the number of (non-unique) arcs to initialize the hashmap safely.
  for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i]; while (line = line.next) ++arcCount;
  }
  for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i]; while (ring = ring.next) ++arcCount;
  }

  var arcsByEnd = hashmap(arcCount * 2 * 1.4, hashPoint, equalPoint),
      arcs = topology.arcs = [];

  for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i];
    do {
      dedupLine(line);
    } while (line = line.next);
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i];
    if (ring.next) { // arc is no longer closed
      do {
        dedupLine(ring);
      } while (ring = ring.next);
    } else {
      dedupRing(ring);
    }
  }

  function dedupLine(arc) {
    var startPoint,
        endPoint,
        startArcs, startArc,
        endArcs, endArc,
        i, n;

    // Does this arc match an existing arc in order?
    if (startArcs = arcsByEnd.get(startPoint = coordinates[arc[0]])) {
      for (i = 0, n = startArcs.length; i < n; ++i) {
        startArc = startArcs[i];
        if (equalLine(startArc, arc)) {
          arc[0] = startArc[0];
          arc[1] = startArc[1];
          return;
        }
      }
    }

    // Does this arc match an existing arc in reverse order?
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[1]])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (reverseEqualLine(endArc, arc)) {
          arc[1] = endArc[0];
          arc[0] = endArc[1];
          return;
        }
      }
    }

    if (startArcs) startArcs.push(arc); else arcsByEnd.set(startPoint, [arc]);
    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
    arcs.push(arc);
  }

  function dedupRing(arc) {
    var endPoint,
        endArcs,
        endArc,
        i, n;

    // Does this arc match an existing line in order, or reverse order?
    // Rings are closed, so their start point and end point is the same.
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0]])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (equalRing(endArc, arc)) {
          arc[0] = endArc[0];
          arc[1] = endArc[1];
          return;
        }
        if (reverseEqualRing(endArc, arc)) {
          arc[0] = endArc[1];
          arc[1] = endArc[0];
          return;
        }
      }
    }

    // Otherwise, does this arc match an existing ring in order, or reverse order?
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0] + findMinimumOffset(arc)])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (equalRing(endArc, arc)) {
          arc[0] = endArc[0];
          arc[1] = endArc[1];
          return;
        }
        if (reverseEqualRing(endArc, arc)) {
          arc[0] = endArc[1];
          arc[1] = endArc[0];
          return;
        }
      }
    }

    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
    arcs.push(arc);
  }

  function equalLine(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb) return false;
    for (; ia <= ja; ++ia, ++ib) if (!equalPoint(coordinates[ia], coordinates[ib])) return false;
    return true;
  }

  function reverseEqualLine(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb) return false;
    for (; ia <= ja; ++ia, --jb) if (!equalPoint(coordinates[ia], coordinates[jb])) return false;
    return true;
  }

  function equalRing(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1],
        n = ja - ia;
    if (n !== jb - ib) return false;
    var ka = findMinimumOffset(arcA),
        kb = findMinimumOffset(arcB);
    for (var i = 0; i < n; ++i) {
      if (!equalPoint(coordinates[ia + (i + ka) % n], coordinates[ib + (i + kb) % n])) return false;
    }
    return true;
  }

  function reverseEqualRing(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1],
        n = ja - ia;
    if (n !== jb - ib) return false;
    var ka = findMinimumOffset(arcA),
        kb = n - findMinimumOffset(arcB);
    for (var i = 0; i < n; ++i) {
      if (!equalPoint(coordinates[ia + (i + ka) % n], coordinates[jb - (i + kb) % n])) return false;
    }
    return true;
  }

  // Rings are rotated to a consistent, but arbitrary, start point.
  // This is necessary to detect when a ring and a rotated copy are dupes.
  function findMinimumOffset(arc) {
    var start = arc[0],
        end = arc[1],
        mid = start,
        minimum = mid,
        minimumPoint = coordinates[mid];
    while (++mid < end) {
      var point = coordinates[mid];
      if (point[0] < minimumPoint[0] || point[0] === minimumPoint[0] && point[1] < minimumPoint[1]) {
        minimum = mid;
        minimumPoint = point;
      }
    }
    return minimum - start;
  }

  return topology;
};

// Given a TopoJSON topology in absolute (quantized) coordinates,
// converts to fixed-point delta encoding.
// This is a destructive operation that modifies the given topology!
var delta = function(topology) {
  var arcs = topology.arcs,
      i = -1,
      n = arcs.length;

  while (++i < n) {
    var arc = arcs[i],
        j = 0,
        m = arc.length,
        point = arc[0],
        x0 = point[0],
        y0 = point[1],
        x1,
        y1;
    while (++j < m) {
      point = arc[j];
      x1 = point[0];
      y1 = point[1];
      arc[j] = [x1 - x0, y1 - y0];
      x0 = x1;
      y0 = y1;
    }
  }

  return topology;
};

// Extracts the lines and rings from the specified hash of geometry objects.
//
// Returns an object with three properties:
//
// * coordinates - shared buffer of [x, y] coordinates
// * lines - lines extracted from the hash, of the form [start, end]
// * rings - rings extracted from the hash, of the form [start, end]
//
// For each ring or line, start and end represent inclusive indexes into the
// coordinates buffer. For rings (and closed lines), coordinates[start] equals
// coordinates[end].
//
// For each line or polygon geometry in the input hash, including nested
// geometries as in geometry collections, the `coordinates` array is replaced
// with an equivalent `arcs` array that, for each line (for line string
// geometries) or ring (for polygon geometries), points to one of the above
// lines or rings.
var extract = function(objects) {
  var index = -1,
      lines = [],
      rings = [],
      coordinates = [];

  function extractGeometry(geometry) {
    if (geometry && extractGeometryType.hasOwnProperty(geometry.type)) extractGeometryType[geometry.type](geometry);
  }

  var extractGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(extractGeometry); },
    LineString: function(o) { o.arcs = extractLine(o.coordinates); delete o.coordinates; },
    MultiLineString: function(o) { o.arcs = o.coordinates.map(extractLine); delete o.coordinates; },
    Polygon: function(o) { o.arcs = o.coordinates.map(extractRing); delete o.coordinates; },
    MultiPolygon: function(o) { o.arcs = o.coordinates.map(extractMultiRing); delete o.coordinates; }
  };

  function extractLine(line) {
    for (var i = 0, n = line.length; i < n; ++i) coordinates[++index] = line[i];
    var arc = {0: index - n + 1, 1: index};
    lines.push(arc);
    return arc;
  }

  function extractRing(ring) {
    for (var i = 0, n = ring.length; i < n; ++i) coordinates[++index] = ring[i];
    var arc = {0: index - n + 1, 1: index};
    rings.push(arc);
    return arc;
  }

  function extractMultiRing(rings) {
    return rings.map(extractRing);
  }

  for (var key in objects) {
    extractGeometry(objects[key]);
  }

  return {
    type: "Topology",
    coordinates: coordinates,
    lines: lines,
    rings: rings,
    objects: objects
  };
};

// Given a hash of GeoJSON objects, replaces Features with geometry objects.
// This is a destructive operation that modifies the input objects!
var geometry = function(objects) {
  var key;
  for (key in objects) objects[key] = geomifyObject(objects[key]);
  return objects;
};

function geomifyObject(object) {
  return (object && geomifyObjectType.hasOwnProperty(object.type)
      ? geomifyObjectType[object.type]
      : geomifyGeometry)(object);
}

function geomifyFeature(feature) {
  var geometry = feature.geometry;
  if (geometry == null) {
    feature.type = null;
  } else {
    geomifyGeometry(geometry);
    feature.type = geometry.type;
    if (geometry.geometries) feature.geometries = geometry.geometries;
    else if (geometry.coordinates) feature.coordinates = geometry.coordinates;
    if (geometry.bbox) feature.bbox = geometry.bbox;
  }
  delete feature.geometry;
  return feature;
}

function geomifyGeometry(geometry) {
  if (!geometry) return {type: null};
  if (geomifyGeometryType.hasOwnProperty(geometry.type)) geomifyGeometryType[geometry.type](geometry);
  return geometry;
}

var geomifyObjectType = {
  Feature: geomifyFeature,
  FeatureCollection: function(collection) {
    collection.type = "GeometryCollection";
    collection.geometries = collection.features;
    collection.features.forEach(geomifyFeature);
    delete collection.features;
    return collection;
  }
};

var geomifyGeometryType = {
  GeometryCollection: function(o) {
    var geometries = o.geometries, i = -1, n = geometries.length;
    while (++i < n) geometries[i] = geomifyGeometry(geometries[i]);
  },
  MultiPoint: function(o) {
    if (!o.coordinates.length) {
      o.type = null;
      delete o.coordinates;
    } else if (o.coordinates.length < 2) {
      o.type = "Point";
      o.coordinates = o.coordinates[0];
    }
  },
  LineString: function(o) {
    if (!o.coordinates.length) {
      o.type = null;
      delete o.coordinates;
    }
  },
  MultiLineString: function(o) {
    for (var lines = o.coordinates, i = 0, N = 0, n = lines.length; i < n; ++i) {
      var line = lines[i];
      if (line.length) lines[N++] = line;
    }
    if (!N) {
      o.type = null;
      delete o.coordinates;
    } else if (N < 2) {
      o.type = "LineString";
      o.coordinates = lines[0];
    } else {
      o.coordinates.length = N;
    }
  },
  Polygon: function(o) {
    for (var rings = o.coordinates, i = 0, N = 0, n = rings.length; i < n; ++i) {
      var ring = rings[i];
      if (ring.length) rings[N++] = ring;
    }
    if (!N) {
      o.type = null;
      delete o.coordinates;
    } else {
      o.coordinates.length = N;
    }
  },
  MultiPolygon: function(o) {
    for (var polygons = o.coordinates, j = 0, M = 0, m = polygons.length; j < m; ++j) {
      for (var rings = polygons[j], i = 0, N = 0, n = rings.length; i < n; ++i) {
        var ring = rings[i];
        if (ring.length) rings[N++] = ring;
      }
      if (N) {
        rings.length = N;
        polygons[M++] = rings;
      }
    }
    if (!M) {
      o.type = null;
      delete o.coordinates;
    } else if (M < 2) {
      o.type = "Polygon";
      o.coordinates = polygons[0];
    } else {
      polygons.length = M;
    }
  }
};

var prequantize = function(objects, bbox, n) {
  var x0 = bbox[0],
      y0 = bbox[1],
      x1 = bbox[2],
      y1 = bbox[3],
      kx = x1 - x0 ? (n - 1) / (x1 - x0) : 1,
      ky = y1 - y0 ? (n - 1) / (y1 - y0) : 1;

  function quantizePoint(coordinates) {
    coordinates[0] = Math.round((coordinates[0] - x0) * kx);
    coordinates[1] = Math.round((coordinates[1] - y0) * ky);
    return coordinates;
  }

  function quantizeLine(coordinates) {
    var i = 0,
        j = 1,
        n = coordinates.length,
        pi = quantizePoint(coordinates[0]),
        pj,
        px = pi[0],
        py = pi[1],
        x,
        y;

    while (++i < n) {
      pi = quantizePoint(coordinates[i]);
      x = pi[0];
      y = pi[1];
      if (x !== px || y !== py) { // skip coincident points
        pj = coordinates[j++];
        pj[0] = px = x;
        pj[1] = py = y;
      }
    }

    coordinates.length = j;
  }

  function quantizeGeometry(o) {
    if (o && quantizeGeometryType.hasOwnProperty(o.type)) quantizeGeometryType[o.type](o);
  }

  var quantizeGeometryType = {
    GeometryCollection: function(o) {
      o.geometries.forEach(quantizeGeometry);
    },
    Point: function(o) {
      quantizePoint(o.coordinates);
    },
    MultiPoint: function(o) {
      o.coordinates.forEach(quantizePoint);
    },
    LineString: function(o) {
      var line = o.coordinates;
      quantizeLine(line);
      if (line.length < 2) line[1] = line[0]; // must have 2+
    },
    MultiLineString: function(o) {
      for (var lines = o.coordinates, i = 0, n = lines.length; i < n; ++i) {
        var line = lines[i];
        quantizeLine(line);
        if (line.length < 2) line[1] = line[0]; // must have 2+
      }
    },
    Polygon: function(o) {
      for (var rings = o.coordinates, i = 0, n = rings.length; i < n; ++i) {
        var ring = rings[i];
        quantizeLine(ring);
        while (ring.length < 4) ring.push(ring[0]); // must have 4+
      }
    },
    MultiPolygon: function(o) {
      for (var polygons = o.coordinates, i = 0, n = polygons.length; i < n; ++i) {
        for (var rings = polygons[i], j = 0, m = rings.length; j < m; ++j) {
          var ring = rings[j];
          quantizeLine(ring);
          while (ring.length < 4) ring.push(ring[0]); // must have 4+
        }
      }
    }
  };

  for (var key in objects) {
    quantizeGeometry(objects[key]);
  }

  return {
    scale: [1 / kx, 1 / ky],
    translate: [x0, y0]
  };
};

// Constructs the TopoJSON Topology for the specified hash of features.
// Each object in the specified hash must be a GeoJSON object,
// meaning FeatureCollection, a Feature or a geometry object.
var topology = function(objects, quantization) {
  var bbox = bounds(geometry(objects)),
      transform = quantization > 0 && bbox && prequantize(objects, bbox, quantization),
      topology = dedup(cut(extract(objects))),
      coordinates = topology.coordinates,
      indexByArc = hashmap(topology.arcs.length * 1.4, hashArc, equalArc);

  objects = topology.objects; // for garbage collection
  topology.bbox = bbox;
  topology.arcs = topology.arcs.map(function(arc, i) {
    indexByArc.set(arc, i);
    return coordinates.slice(arc[0], arc[1] + 1);
  });

  delete topology.coordinates;
  coordinates = null;

  function indexGeometry(geometry$$1) {
    if (geometry$$1 && indexGeometryType.hasOwnProperty(geometry$$1.type)) indexGeometryType[geometry$$1.type](geometry$$1);
  }

  var indexGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(indexGeometry); },
    LineString: function(o) { o.arcs = indexArcs(o.arcs); },
    MultiLineString: function(o) { o.arcs = o.arcs.map(indexArcs); },
    Polygon: function(o) { o.arcs = o.arcs.map(indexArcs); },
    MultiPolygon: function(o) { o.arcs = o.arcs.map(indexMultiArcs); }
  };

  function indexArcs(arc) {
    var indexes = [];
    do {
      var index = indexByArc.get(arc);
      indexes.push(arc[0] < arc[1] ? index : ~index);
    } while (arc = arc.next);
    return indexes;
  }

  function indexMultiArcs(arcs) {
    return arcs.map(indexArcs);
  }

  for (var key in objects) {
    indexGeometry(objects[key]);
  }

  if (transform) {
    topology.transform = transform;
    delta(topology);
  }

  return topology;
};

function hashArc(arc) {
  var i = arc[0], j = arc[1], t;
  if (j < i) t = i, i = j, j = t;
  return i + 31 * j;
}

function equalArc(arcA, arcB) {
  var ia = arcA[0], ja = arcA[1],
      ib = arcB[0], jb = arcB[1], t;
  if (ja < ia) t = ia, ia = ja, ja = t;
  if (jb < ib) t = ib, ib = jb, jb = t;
  return ia === ib && ja === jb;
}

var prune = function(topology) {
  var oldArcs = topology.arcs,
      newArcs = topology.arcs = [],
      newArcIndex = -1,
      newIndexByOldIndex = new Array(oldArcs.length),
      name;

  function pruneGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(pruneGeometry); break;
      case "LineString": pruneArcs(o.arcs); break;
      case "MultiLineString": o.arcs.forEach(pruneArcs); break;
      case "Polygon": o.arcs.forEach(pruneArcs); break;
      case "MultiPolygon": o.arcs.forEach(pruneMultiArcs); break;
    }
  }

  function pruneArcs(arcs) {
    for (var i = 0, n = arcs.length; i < n; ++i) {
      var oldIndex = arcs[i],
          oldReverse = oldIndex < 0 && (oldIndex = ~oldIndex, true),
          newIndex;

      // If this is the first instance of this arc,
      // record it under its new index.
      if ((newIndex = newIndexByOldIndex[oldIndex]) == null) {
        newIndexByOldIndex[oldIndex] = newIndex = ++newArcIndex;
        newArcs[newIndex] = oldArcs[oldIndex];
      }

      arcs[i] = oldReverse ? ~newIndex : newIndex;
    }
  }

  function pruneMultiArcs(arcs) {
    arcs.forEach(pruneArcs);
  }

  for (name in topology.objects) {
    pruneGeometry(topology.objects[name]);
  }

  return topology;
};

var filter = function(topology, filter) {
  var name;

  if (filter == null) filter = filterTrue;

  function filterGeometry(o) {
    switch (o.type) {
      case "Polygon": {
        o.arcs = filterRings(o.arcs);
        if (!o.arcs) o.type = null, delete o.arcs;
        break;
      }
      case "MultiPolygon": {
        o.arcs = o.arcs.map(filterRings).filter(filterIdentity);
        if (!o.arcs.length) o.type = null, delete o.arcs;
        break;
      }
      case "GeometryCollection": {
        o.geometries.forEach(filterGeometry);
        o.geometries = o.geometries.filter(filterNotNull);
        if (!o.geometries.length) o.type = null, delete o.geometries;
        break;
      }
    }
  }

  function filterRings(arcs) {
    return arcs.length && filterExteriorRing(arcs[0]) // if the exterior is small, ignore any holes
        ? [arcs.shift()].concat(arcs.filter(filterInteriorRing))
        : null;
  }

  function filterExteriorRing(ring) {
    return filter(ring, false);
  }

  function filterInteriorRing(ring) {
    return filter(ring, true);
  }

  for (name in topology.objects) {
    filterGeometry(topology.objects[name]);
  }

  return prune(topology);
};

function filterTrue() {
  return true;
}

function filterIdentity(x) {
  return x;
}

function filterNotNull(geometry) {
  return geometry.type != null;
}

var filterAttached = function(topology) {
  var uniqueRingByArc = {}, // arc index -> index of unique associated ring, or -1 if used by multiple rings
      ringIndex = 0,
      name;

  function testGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(testGeometry); break;
      case "Polygon": testArcs(o.arcs); break;
      case "MultiPolygon": o.arcs.forEach(testArcs); break;
    }
  }

  function testArcs(arcs) {
    for (var i = 0, n = arcs.length; i < n; ++i, ++ringIndex) {
      for (var ring = arcs[i], j = 0, m = ring.length; j < m; ++j) {
        var arc = ring[j];
        if (arc < 0) arc = ~arc;
        var uniqueRing = uniqueRingByArc[arc];
        if (uniqueRing >= 0 && uniqueRing !== ringIndex) uniqueRingByArc[arc] = -1;
        else uniqueRingByArc[arc] = ringIndex;
      }
    }
  }

  for (name in topology.objects) {
    testGeometry(topology.objects[name]);
  }

  return function(ring) {
    for (var j = 0, m = ring.length, arc; j < m; ++j) {
      if (arc = ring[j], uniqueRingByArc[arc < 0 ? ~arc : arc] < 0) {
        return true;
      }
    }
    return false;
  };
};

var identity = function(x) {
  return x;
};

var transform = function(topology) {
  if ((transform = topology.transform) == null) return identity;
  var transform,
      x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(point, i) {
    if (!i) x0 = y0 = 0;
    point[0] = (x0 += point[0]) * kx + dx;
    point[1] = (y0 += point[1]) * ky + dy;
    return point;
  };
};

var bbox = function(topology) {
  var bbox = topology.bbox;

  function bboxPoint(p0) {
    p1[0] = p0[0], p1[1] = p0[1], t(p1);
    if (p1[0] < x0) x0 = p1[0];
    if (p1[0] > x1) x1 = p1[0];
    if (p1[1] < y0) y0 = p1[1];
    if (p1[1] > y1) y1 = p1[1];
  }

  function bboxGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(bboxGeometry); break;
      case "Point": bboxPoint(o.coordinates); break;
      case "MultiPoint": o.coordinates.forEach(bboxPoint); break;
    }
  }

  if (!bbox) {
    var t = transform(topology), p0, p1 = new Array(2), name,
        x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;

    topology.arcs.forEach(function(arc) {
      var i = -1, n = arc.length;
      while (++i < n) {
        p0 = arc[i], p1[0] = p0[0], p1[1] = p0[1], t(p1, i);
        if (p1[0] < x0) x0 = p1[0];
        if (p1[0] > x1) x1 = p1[0];
        if (p1[1] < y0) y0 = p1[1];
        if (p1[1] > y1) y1 = p1[1];
      }
    });

    for (name in topology.objects) {
      bboxGeometry(topology.objects[name]);
    }

    bbox = topology.bbox = [x0, y0, x1, y1];
  }

  return bbox;
};

var reverse$1 = function(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
};

var feature = function(topology, o) {
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature$1(topology, o); })}
      : feature$1(topology, o);
};

function feature$1(topology, o) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = object(topology, o);
  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
}

function object(topology, o) {
  var transformPoint = transform(topology),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k].slice(), k));
    }
    if (i < 0) reverse$1(points, n);
  }

  function point(p) {
    return transformPoint(p.slice());
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0].slice());
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0].slice());
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}

var stitch = function(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

  return fragments;
};

var mesh = function(topology) {
  return object(topology, meshArcs.apply(this, arguments));
};

function meshArcs(topology, object$$1, filter) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object$$1, filter);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return {type: "MultiLineString", arcs: stitch(topology, arcs)};
}

function extractArcs(topology, object$$1, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object$$1);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });

  return arcs;
}

function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area); // Note: doubled area!
}

var merge = function(topology) {
  return object(topology, mergeArcs.apply(this, arguments));
};

function mergeArcs(topology, objects) {
  var polygonsByArc = {},
      polygons = [],
      groups = [];

  objects.forEach(geometry);

  function geometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "Polygon": extract(o.arcs); break;
      case "MultiPolygon": o.arcs.forEach(extract); break;
    }
  }

  function extract(polygon) {
    polygon.forEach(function(ring) {
      ring.forEach(function(arc) {
        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
      });
    });
    polygons.push(polygon);
  }

  function area(ring) {
    return planarRingArea(object(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]);
  }

  polygons.forEach(function(polygon) {
    if (!polygon._) {
      var group = [],
          neighbors = [polygon];
      polygon._ = 1;
      groups.push(group);
      while (polygon = neighbors.pop()) {
        group.push(polygon);
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
              if (!polygon._) {
                polygon._ = 1;
                neighbors.push(polygon);
              }
            });
          });
        });
      }
    }
  });

  polygons.forEach(function(polygon) {
    delete polygon._;
  });

  return {
    type: "MultiPolygon",
    arcs: groups.map(function(polygons) {
      var arcs = [], n;

      // Extract the exterior (unique) arcs.
      polygons.forEach(function(polygon) {
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
              arcs.push(arc);
            }
          });
        });
      });

      // Stitch the arcs into one or more rings.
      arcs = stitch(topology, arcs);

      // If more than one ring is returned,
      // at most one of these rings can be the exterior;
      // choose the one with the greatest absolute area.
      if ((n = arcs.length) > 1) {
        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
          if ((ki = area(arcs[i])) > k) {
            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
          }
        }
      }

      return arcs;
    })
  };
}

var bisect = function(a, x) {
  var lo = 0, hi = a.length;
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
};

var neighbors = function(objects) {
  var indexesByArc = {}, // arc index -> array of object indexes
      neighbors = objects.map(function() { return []; });

  function line(arcs, i) {
    arcs.forEach(function(a) {
      if (a < 0) a = ~a;
      var o = indexesByArc[a];
      if (o) o.push(i);
      else indexesByArc[a] = [i];
    });
  }

  function polygon(arcs, i) {
    arcs.forEach(function(arc) { line(arc, i); });
  }

  function geometry(o, i) {
    if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
    else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
  }

  var geometryType = {
    LineString: line,
    MultiLineString: polygon,
    Polygon: polygon,
    MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
  };

  objects.forEach(geometry);

  for (var i in indexesByArc) {
    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
      for (var k = j + 1; k < m; ++k) {
        var ij = indexes[j], ik = indexes[k], n;
        if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
        if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
      }
    }
  }

  return neighbors;
};

var quantize = function(topology, n) {
  if (!((n = Math.floor(n)) >= 2)) throw new Error("n must be \u22652");
  if (topology.transform) throw new Error("already quantized");
  var bb = bbox(topology), name,
      dx = bb[0], kx = (bb[2] - dx) / (n - 1) || 1,
      dy = bb[1], ky = (bb[3] - dy) / (n - 1) || 1;

  function quantizePoint(p) {
    p[0] = Math.round((p[0] - dx) / kx);
    p[1] = Math.round((p[1] - dy) / ky);
  }

  function quantizeGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(quantizeGeometry); break;
      case "Point": quantizePoint(o.coordinates); break;
      case "MultiPoint": o.coordinates.forEach(quantizePoint); break;
    }
  }

  topology.arcs.forEach(function(arc) {
    var i = 1,
        j = 1,
        n = arc.length,
        pi = arc[0],
        x0 = pi[0] = Math.round((pi[0] - dx) / kx),
        y0 = pi[1] = Math.round((pi[1] - dy) / ky),
        pj,
        x1,
        y1;

    for (; i < n; ++i) {
      pi = arc[i];
      x1 = Math.round((pi[0] - dx) / kx);
      y1 = Math.round((pi[1] - dy) / ky);
      if (x1 !== x0 || y1 !== y0) {
        pj = arc[j++];
        pj[0] = x1 - x0, x0 = x1;
        pj[1] = y1 - y0, y0 = y1;
      }
    }

    if (j < 2) {
      pj = arc[j++];
      pj[0] = 0;
      pj[1] = 0;
    }

    arc.length = j;
  });

  for (name in topology.objects) {
    quantizeGeometry(topology.objects[name]);
  }

  topology.transform = {
    scale: [kx, ky],
    translate: [dx, dy]
  };

  return topology;
};

var untransform = function(topology) {
  if ((transform = topology.transform) == null) return identity;
  var transform,
      x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(point, i) {
    if (!i) x0 = y0 = 0;
    var x1 = Math.round((point[0] - dx) / kx),
        y1 = Math.round((point[1] - dy) / ky);
    point[0] = x1 - x0, x0 = x1;
    point[1] = y1 - y0, y0 = y1;
    return point;
  };
};

function planarTriangleArea(triangle) {
  var a = triangle[0], b = triangle[1], c = triangle[2];
  return Math.abs((a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]));
}

function planarRingArea$1(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area) / 2;
}

var filterWeight = function(topology, minWeight, weight) {
  minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;

  if (weight == null) weight = planarRingArea$1;

  return function(ring, interior) {
    return weight(feature(topology, {type: "Polygon", arcs: [ring]}).geometry.coordinates[0], interior) >= minWeight;
  };
};

function compare(a, b) {
  return a[1][2] - b[1][2];
}

var newHeap = function() {
  var heap = {},
      array = [],
      size = 0;

  heap.push = function(object) {
    up(array[object._ = size] = object, size++);
    return size;
  };

  heap.pop = function() {
    if (size <= 0) return;
    var removed = array[0], object;
    if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
    return removed;
  };

  heap.remove = function(removed) {
    var i = removed._, object;
    if (array[i] !== removed) return; // invalid request
    if (i !== --size) object = array[size], (compare(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
    return i;
  };

  function up(object, i) {
    while (i > 0) {
      var j = ((i + 1) >> 1) - 1,
          parent = array[j];
      if (compare(object, parent) >= 0) break;
      array[parent._ = i] = parent;
      array[object._ = i = j] = object;
    }
  }

  function down(object, i) {
    while (true) {
      var r = (i + 1) << 1,
          l = r - 1,
          j = i,
          child = array[j];
      if (l < size && compare(array[l], child) < 0) child = array[j = l];
      if (r < size && compare(array[r], child) < 0) child = array[j = r];
      if (j === i) break;
      array[child._ = i] = child;
      array[object._ = i = j] = object;
    }
  }

  return heap;
};

var presimplify = function(topology, weight) {
  var absolute = transform(topology),
      relative = untransform(topology),
      heap = newHeap();

  if (weight == null) weight = planarTriangleArea;

  topology.arcs.forEach(function(arc) {
    var triangles = [],
        maxWeight = 0,
        triangle,
        i,
        n;

    arc.forEach(absolute);

    for (i = 1, n = arc.length - 1; i < n; ++i) {
      triangle = arc.slice(i - 1, i + 2);
      triangle[1][2] = weight(triangle);
      triangles.push(triangle);
      heap.push(triangle);
    }

    // Always keep the arc endpoints!
    arc[0][2] = arc[n][2] = Infinity;

    for (i = 0, n = triangles.length; i < n; ++i) {
      triangle = triangles[i];
      triangle.previous = triangles[i - 1];
      triangle.next = triangles[i + 1];
    }

    while (triangle = heap.pop()) {
      var previous = triangle.previous,
          next = triangle.next;

      // If the weight of the current point is less than that of the previous
      // point to be eliminated, use the latter’s weight instead. This ensures
      // that the current point cannot be eliminated without eliminating
      // previously- eliminated points.
      if (triangle[1][2] < maxWeight) triangle[1][2] = maxWeight;
      else maxWeight = triangle[1][2];

      if (previous) {
        previous.next = next;
        previous[2] = triangle[2];
        update(previous);
      }

      if (next) {
        next.previous = previous;
        next[0] = triangle[0];
        update(next);
      }
    }

    arc.forEach(relative);
  });

  function update(triangle) {
    heap.remove(triangle);
    triangle[1][2] = weight(triangle);
    heap.push(triangle);
  }

  return topology;
};

var quantile = function(topology, p) {
  var array = [];

  topology.arcs.forEach(function(arc) {
    arc.forEach(function(point) {
      if (isFinite(point[2])) { // Ignore endpoints, whose weight is Infinity.
        array.push(point[2]);
      }
    });
  });

  return array.length && quantile$1(array.sort(descending), p);
};

function quantile$1(array, p) {
  if (!(n = array.length)) return;
  if ((p = +p) <= 0 || n < 2) return array[0];
  if (p >= 1) return array[n - 1];
  var n,
      h = (n - 1) * p,
      i = Math.floor(h),
      a = array[i],
      b = array[i + 1];
  return a + (b - a) * (h - i);
}

function descending(a, b) {
  return b - a;
}

var simplify = function(topology, minWeight) {
  minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;

  // Remove points whose weight is less than the minimum weight.
  topology.arcs.forEach(topology.transform ? function(arc) {
    var dx = 0,
        dy = 0, // accumulate removed points
        i = -1,
        j = -1,
        n = arc.length,
        source,
        target;

    while (++i < n) {
      source = arc[i];
      if (source[2] >= minWeight) {
        target = arc[++j];
        target[0] = source[0] + dx;
        target[1] = source[1] + dy;
        dx = dy = 0;
      } else {
        dx += source[0];
        dy += source[1];
      }
    }

    arc.length = ++j;
  } : function(arc) {
    var i = -1,
        j = -1,
        n = arc.length,
        point;

    while (++i < n) {
      point = arc[i];
      if (point[2] >= minWeight) {
        arc[++j] = point;
      }
    }

    arc.length = ++j;
  });

  // Remove the computed weight for each point, and remove coincident points.
  // This is done as a separate pass because some coordinates may be shared
  // between arcs (such as the last point and first point of a cut line).
  // If the entire arc is empty, retain at least two points (per spec).
  topology.arcs.forEach(topology.transform ? function(arc) {
    var i = 0,
        j = 0,
        n = arc.length,
        p = arc[0];
    p.length = 2;
    while (++i < n) {
      p = arc[i];
      p.length = 2;
      if (p[0] || p[1]) arc[++j] = p;
    }
    arc.length = (j || 1) + 1;
  } : function(arc) {
    var i = 0,
        j = 0,
        n = arc.length,
        p = arc[0],
        x0 = p[0],
        y0 = p[1],
        x1,
        y1;
    p.length = 2;
    while (++i < n) {
      p = arc[i], x1 = p[0], y1 = p[1];
      p.length = 2;
      if (x0 !== x1 || y0 !== y1) arc[++j] = p, x0 = x1, y0 = y1;
    }
    arc.length = (j || 1) + 1;
  });

  return topology;
};

var pi = Math.PI;
var tau = 2 * pi;
var fourPi = 4 * pi;
var radians = pi / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var sin = Math.sin;
var sqrt = Math.sqrt;
var tan = Math.tan;

function sphericalRingArea(ring, interior) {
  if (!ring.length) return 0;
  var sum = 0,
      point = ring[0],
      lambda0, lambda1 = point[0] * radians, delta,
      phi1 = (point[1] * radians + tau) / 2,
      cosPhi0, cosPhi1 = cos(phi1),
      sinPhi0, sinPhi1 = sin(phi1),
      i, n, k;

  for (i = 1, n = ring.length; i < n; ++i) {
    point = ring[i];
    lambda0 = lambda1, lambda1 = point[0] * radians, delta = lambda1 - lambda0;
    phi1 = (point[1] * radians + tau) / 2;
    cosPhi0 = cosPhi1, cosPhi1 = cos(phi1);
    sinPhi0 = sinPhi1, sinPhi1 = sin(phi1);

    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point. Uses a formula derived from Cagnoli’s
    // theorem. See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    k = sinPhi0 * sinPhi1;
    sum += atan2(k * sin(delta), cosPhi0 * cosPhi1 + k * cos(delta));
  }

  sum = 2 * (sum > pi ? sum - tau : sum < -pi ? sum + tau : sum);
  if (interior) sum *= -1;
  return sum < 0 ? sum + fourPi : sum;
}

function sphericalTriangleArea(t) {
  var lambda0 = t[0][0] * radians, phi0 = t[0][1] * radians, cosPhi0 = cos(phi0), sinPhi0 = sin(phi0),
      lambda1 = t[1][0] * radians, phi1 = t[1][1] * radians, cosPhi1 = cos(phi1), sinPhi1 = sin(phi1),
      lambda2 = t[2][0] * radians, phi2 = t[2][1] * radians, cosPhi2 = cos(phi2), sinPhi2 = sin(phi2),
      a = distance(lambda0, cosPhi0, sinPhi0, lambda1, cosPhi1, sinPhi1),
      b = distance(lambda1, cosPhi1, sinPhi1, lambda2, cosPhi2, sinPhi2),
      c = distance(lambda2, cosPhi2, sinPhi2, lambda0, cosPhi0, sinPhi0),
      s = (a + b + c) / 2;
  return 4 * atan(sqrt(max(0, tan(s / 2) * tan((s - a) / 2) * tan((s - b) / 2) * tan((s - c) / 2))));
}

function distance(lambda0, sinPhi0, cosPhi0, lambda1, sinPhi1, cosPhi1) {
  var delta = abs(lambda1 - lambda0),
      cosDelta = cos(delta),
      sinDelta = sin(delta),
      x = cosPhi1 * sinDelta,
      y = cosPhi0 * sinPhi1 - sinPhi0 * cosPhi1 * cosDelta,
      z = sinPhi0 * sinPhi1 + cosPhi0 * cosPhi1 * cosDelta;
  return atan2(sqrt(x * x + y * y), z);
}

exports.topology = topology;
exports.filter = filter;
exports.filterAttached = filterAttached;
exports.filterWeight = filterWeight;
exports.planarRingArea = planarRingArea$1;
exports.planarTriangleArea = planarTriangleArea;
exports.presimplify = presimplify;
exports.quantile = quantile;
exports.simplify = simplify;
exports.sphericalRingArea = sphericalRingArea;
exports.sphericalTriangleArea = sphericalTriangleArea;
exports.bbox = bbox;
exports.feature = feature;
exports.merge = merge;
exports.mergeArcs = mergeArcs;
exports.mesh = mesh;
exports.meshArcs = meshArcs;
exports.neighbors = neighbors;
exports.quantize = quantize;
exports.transform = transform;
exports.untransform = untransform;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 224 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
//# sourceMappingURL=contrail-charts.js.map
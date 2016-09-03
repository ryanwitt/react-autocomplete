webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _libIndex = __webpack_require__(159);

	var _libIndex2 = _interopRequireDefault(_libIndex);

	var _libUtils = __webpack_require__(164);

	var STATES = (0, _libUtils.getStates)();

	var App = (function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      value: '',
	      isOpen: false,
	      forceOpen: false
	    };
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      var state = this.state;

	      var open = state.forceOpen || state.isOpen;
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'Managed Menu Visibility'
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          'By default Autocomplete will manage its own menu visibility, using basic logic to decide whether or not to display it (e.g. open on focus, keypress, close on blur, select, escape, etc). If you need full control over when the menu opens and closes you can put Autocomplete into "managed menu visibility mode" by supplying ',
	          _react2['default'].createElement(
	            'code',
	            null,
	            'props.open'
	          ),
	          '. This will force Autocomplete to ignore its internal menu visibility status and always hide/show the menu based on ',
	          _react2['default'].createElement(
	            'code',
	            null,
	            'props.open'
	          ),
	          '. Pair this with ',
	          _react2['default'].createElement(
	            'code',
	            null,
	            'props.onMenuVisibilityChange'
	          ),
	          '- which is invoked each time the internal visibility state changes - for full control over the menu\'s visibility.'
	        ),
	        _react2['default'].createElement(
	          'label',
	          { htmlFor: 'states' },
	          'Choose a US state'
	        ),
	        _react2['default'].createElement(_libIndex2['default'], {
	          value: state.value,
	          inputProps: { id: "states" },
	          items: STATES,
	          shouldItemRender: _libUtils.matchStateToTerm,
	          getItemValue: function (item) {
	            return item.name;
	          },
	          onSelect: function (value) {
	            return _this.setState({ value: value });
	          },
	          onChange: function (e) {
	            return _this.setState({ value: e.target.value });
	          },
	          renderItem: function (item, isHighlighted) {
	            return _react2['default'].createElement(
	              'div',
	              {
	                style: isHighlighted ? _libUtils.styles.highlightedItem : _libUtils.styles.item,
	                key: item.abbr
	              },
	              item.name
	            );
	          },
	          renderMenu: function (children) {
	            return _react2['default'].createElement(
	              'div',
	              { style: _extends({}, _libUtils.styles.menu, { position: 'absolute', width: '100%' }) },
	              children
	            );
	          },
	          wrapperStyle: { position: 'relative', display: 'inline-block' },
	          onMenuVisibilityChange: function (isOpen) {
	            return _this.setState({ isOpen: isOpen });
	          },
	          open: open
	        }),
	        _react2['default'].createElement(
	          'button',
	          {
	            onClick: function () {
	              return _this.setState({ isOpen: !state.isOpen });
	            },
	            disabled: state.forceOpen
	          },
	          open ? 'Close menu' : 'Open menu'
	        ),
	        _react2['default'].createElement(
	          'label',
	          { style: { display: 'inline-block', marginLeft: 20 } },
	          _react2['default'].createElement('input', {
	            type: 'checkbox',
	            checked: state.forceOpen,
	            onChange: function () {
	              return _this.setState({ forceOpen: !state.forceOpen });
	            }
	          }),
	          'Force menu to stay open'
	        )
	      );
	    }
	  }]);

	  return App;
	})(_react.Component);

	_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('container'));

/***/ }
]);
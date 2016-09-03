webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _libUtils = __webpack_require__(164);

	var _libIndex = __webpack_require__(159);

	var _libIndex2 = _interopRequireDefault(_libIndex);

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  getInitialState: function getInitialState() {
	    return { value: 'Ma' };
	  },
	  render: function render() {
	    var _this = this;

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        null,
	        'Basic Example with Static Data'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'When using static data, you use the client to sort and filter the items, so ',
	        _react2['default'].createElement(
	          'code',
	          null,
	          'Autocomplete'
	        ),
	        ' has methods baked in to help.'
	      ),
	      _react2['default'].createElement(
	        'label',
	        { htmlFor: 'states-autocomplete' },
	        'Choose a state from the US'
	      ),
	      _react2['default'].createElement(_libIndex2['default'], {
	        value: this.state.value,
	        inputProps: { name: "US state", id: "states-autocomplete" },
	        items: (0, _libUtils.getStates)(),
	        getItemValue: function (item) {
	          return item.name;
	        },
	        shouldItemRender: _libUtils.matchStateToTerm,
	        sortItems: _libUtils.sortStates,
	        onChange: function (event, value) {
	          return _this.setState({ value: value });
	        },
	        onSelect: function (value) {
	          return _this.setState({ value: value });
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
	        }
	      })
	    );
	  }
	});

	_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('container'));

/***/ }
]);
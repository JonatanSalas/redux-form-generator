'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WrapList2 = require('./WrapList');

var _WrapList3 = _interopRequireDefault(_WrapList2);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function (_WrapList) {
  (0, _inherits3.default)(Radio, _WrapList);

  function Radio() {
    (0, _classCallCheck3.default)(this, Radio);
    return (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).apply(this, arguments));
  }

  (0, _createClass3.default)(Radio, [{
    key: 'render',
    value: function render() {
      // [1] Set type to text, because we handle the radio button internally
      // --- This way we receive the value property
      // [2] Added the search property, to trigger render on filter
      return _react2.default.createElement(_reduxForm.Field, (0, _extends3.default)({
        component: this.renderField
      }, this.props.field, {
        type: 'text',
        size: this.props.size,
        search: this.state.value,
        locale: this.props.locale
      }));
    }
  }]);
  return Radio;
}(_WrapList3.default);

Radio.propTypes = {
  'dispatch': _react2.default.PropTypes.func,
  'field': _react2.default.PropTypes.object,
  'size': _react2.default.PropTypes.string,
  'static': _react2.default.PropTypes.bool,
  'locale': _react2.default.PropTypes.object
};
Radio.defaultProps = {};

exports.default = Radio;
module.exports = exports['default'];
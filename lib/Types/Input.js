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

var _Wrap2 = require('./Wrap');

var _Wrap3 = _interopRequireDefault(_Wrap2);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_Wrap) {
  (0, _inherits3.default)(Input, _Wrap);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reduxForm.Field, (0, _extends3.default)({
        component: this.renderField
      }, this.props.field, {
        size: this.props.size,
        'static': this.props.static,
        locale: this.props.locale,
        checkDisabled: this.props.checkDisabled
      }));
    }
  }]);
  return Input;
}(_Wrap3.default);

Input.propTypes = {
  'field': _react2.default.PropTypes.object,
  'checkDisabled': _react2.default.PropTypes.func,
  'size': _react2.default.PropTypes.string,
  'static': _react2.default.PropTypes.bool,
  'addField': _react2.default.PropTypes.func,
  'locale': _react2.default.PropTypes.object
};
Input.defaultProps = {};

exports.default = Input;
module.exports = exports['default'];
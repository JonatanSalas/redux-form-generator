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

var _WrapRte2 = require('./WrapRte');

var _WrapRte3 = _interopRequireDefault(_WrapRte2);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rte = function (_WrapRte) {
  (0, _inherits3.default)(Rte, _WrapRte);

  function Rte() {
    (0, _classCallCheck3.default)(this, Rte);
    return (0, _possibleConstructorReturn3.default)(this, (Rte.__proto__ || (0, _getPrototypeOf2.default)(Rte)).apply(this, arguments));
  }

  (0, _createClass3.default)(Rte, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reduxForm.Field, (0, _extends3.default)({
        component: this.renderField
      }, this.props.field, {
        size: this.props.size,
        locale: this.props.locale
      }));
    }
  }]);
  return Rte;
}(_WrapRte3.default);

Rte.propTypes = {
  'field': _react2.default.PropTypes.object,
  'size': _react2.default.PropTypes.string,
  'static': _react2.default.PropTypes.bool,
  'locale': _react2.default.PropTypes.object
};
Rte.defaultProps = {};

exports.default = Rte;
module.exports = exports['default'];
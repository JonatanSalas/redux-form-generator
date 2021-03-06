'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp;

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  MessageType: {
    displayName: 'MessageType'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Types/Message.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var MessageType = _wrapComponent('MessageType')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(MessageType, _Component);

  function MessageType() {
    (0, _classCallCheck3.default)(this, MessageType);
    return (0, _possibleConstructorReturn3.default)(this, (MessageType.__proto__ || (0, _getPrototypeOf2.default)(MessageType)).apply(this, arguments));
  }

  (0, _createClass3.default)(MessageType, [{
    key: 'render',
    value: function render() {
      var field = this.props.field;


      if (field.type === 'success' && !this.props.submitting) {
        if (this.props.valid === true && this.props.submitSucceeded === true) {
          return _react3.default.createElement(
            _Alert2.default,
            { bsStyle: 'success' },
            field.message
          );
        }
      }

      if (field.type === 'error' && !this.props.submitting) {
        if (this.props.invalid === true && this.props.submitFailed === true) {
          return _react3.default.createElement(
            _Alert2.default,
            { bsStyle: 'danger' },
            field.message
          );
        }
      }

      return _react3.default.createElement('span', null);
    }
  }]);
  return MessageType;
}(_react2.Component), _class.propTypes = {
  'field': _react3.default.PropTypes.object,
  'dirty': _react3.default.PropTypes.bool,
  'pristine': _react3.default.PropTypes.bool,
  'valid': _react3.default.PropTypes.bool,
  'invalid': _react3.default.PropTypes.bool,
  'submitFailed': _react3.default.PropTypes.bool,
  'submitSucceeded': _react3.default.PropTypes.bool,
  'submitting': _react3.default.PropTypes.bool,
  'static': _react3.default.PropTypes.bool,
  'locale': _react3.default.PropTypes.object
}, _temp));

exports.default = MessageType;
module.exports = exports['default'];
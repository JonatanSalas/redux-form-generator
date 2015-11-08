'use strict';

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _react = require('react');

var _redboxReact = require('redbox-react');

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _components = {
  _$StaticType: {
    displayName: 'StaticType'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/static.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var StaticType = (function (_Component) {
  _inherits(StaticType, _Component);

  function StaticType() {
    _classCallCheck(this, _StaticType);

    _Component.apply(this, arguments);
  }

  StaticType.prototype.render = function render() {
    var thisSize = _lodash2['default'].get(this.props.field, 'bsSize', this.props.size);
    var extraProps = {};
    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.bsStyle = 'error';
    }
    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.help = this.props.properties.error;
    }

    return _react2['default'].createElement(_reactBootstrap.FormControls.Static, _extends({
      key: this.props.field.name,
      name: 'search',
      bsSize: thisSize
    }, extraProps, this.props.field, this.props.properties, {
      buttonBefore: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonBefore', {}), thisSize),
      buttonAfter: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonAfter', {}), thisSize)
    }));
  };

  _createClass(StaticType, null, [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'properties': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'addField': _react.PropTypes.func.isRequired

    },
    enumerable: true
  }]);

  var _StaticType = StaticType;
  StaticType = _wrapComponent('_$StaticType')(StaticType) || StaticType;
  return StaticType;
})(_react.Component);

exports['default'] = StaticType;
module.exports = exports['default'];
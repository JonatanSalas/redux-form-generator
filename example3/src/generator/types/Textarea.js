import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import connectToWrap from './Wrap';
import {FormControl} from 'react-bootstrap';

@connectToWrap()
class TextareaType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  };

  render() {

    const value = () => {
      if (!_.isEmpty(_.get(this.props.properties, 'value', ''))) {
        return _.get(this.props.properties, 'value');
      }

      return _.get(this.props.properties, 'initialValue', '');
    };

    if (this.props.static === true) {
      return (
        <pre>
          {value()}
        </pre>
      );
    }

    return (
      <FormControl componentClass="textarea" placeholder={_.get(this.props.field, 'placeholder', '')}
          {...this.props.properties}
      />
    );
  }
}

export default TextareaType;

import React, {Component, PropTypes} from 'react';

export default class Plain extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired
  };

  render() {
    const createMarkup = (data) => {
      return {__html: data};
    };
    return (
      <div
        dangerouslySetInnerHTML={createMarkup(this.props.field.value)}
      ></div>
    );
  }
}
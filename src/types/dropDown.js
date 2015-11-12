import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {DropdownButton, MenuItem, } from 'react-bootstrap';
import {change} from 'redux-form';

export default class DropDownType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'dispatch': PropTypes.func.isRequired,
    'submit': PropTypes.func.isRequired,
    'formName': PropTypes.string.isRequired,
    'formKey': PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.dropDownSelect = this.dropDownSelect.bind(this);
    this.dropDown = this.dropDown.bind(this);
  }

  dropDownSelect(name:string, item:Object) {
    this.setState(_.set(Object.assign({}, this.state), ['dropDownTitle', name], item.desc || item.default));

    return new Promise((resolve) => {
      const changeConst = change(this.props.formName, name, item.field);
      resolve(this.props.dispatch({
        ...changeConst,
        'key': this.props.formKey || undefined
      }));
    }).then(()=> {
      if (!!this.props.field.submit && typeof this.props.submit === 'function') {
        this.props.submit();
      }
    });
  }

  dropDown() {
    const menuItem = [];
    let dropDownTitle = null;
    _.map(this.props.field.items, (item, key) => {
      const select = () => {
        this.dropDownSelect(this.props.field.name, item);
      };

      if (item.hasOwnProperty('default')) {
        dropDownTitle = item.default;
        menuItem.push(<MenuItem key={key} onSelect={select}>{item.default}</MenuItem>);
        menuItem.push(<MenuItem key={key + '_div'} divider/>);
      } else {
        if (_.get(this.props, ['properties', 'defaultValue']) === item.field) {
          dropDownTitle = item.desc;
        }
        menuItem.push(<MenuItem key={key} onSelect={select}>{item.desc}</MenuItem>);
      }
    });
    return {dropDownTitle, menuItem};

  }

  render() {

    const {dropDownTitle, menuItem} = this.dropDown();
    return (
      <DropdownButton key={this.props.field.name} className={_.get(this.props.field, 'className')}
                      bsSize={_.get(this.props.field, 'bsSize', this.props.size)}
                      bsStyle={_.get(this.props.field, 'bsStyle', 'primary')}
                      title={_.get(this.state, ['dropDownTitle', this.props.field.name]) || dropDownTitle}
                      id={'input-dropdown-addon' + this.props.field.name}>
        {menuItem}
      </DropdownButton>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

class TabTitle extends Component {
  constructor(props) {
    super(props);
    this.onDel = this.onDel.bind(this);
  }

  onDel() {
    this.props.onDel(this.props.elName);
  }

  render() {
    return (
      <div>
        <div className="title">{this.props.elName}</div>
        <Button bsSize="xsmall" onClick={this.onDel}><span>X</span></Button>
      </div>
    );
  }
}

TabTitle.propTypes = {
  onDel: PropTypes.func.isRequired,
  elName: PropTypes.string.isRequired,
};

export default TabTitle;

import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {
    let text = this.props.text;
    return (
      <button className="btn" onClick={this.props.onClick}>{text}</button>
    );
  }
}

export default Button;

import React, { Component } from 'react';
import Typed from 'typed.js';

class TypeAnimation extends Component {
  componentDidMount() {
    const { strings } = this.props;

    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 700
    }

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <b ref={(el) => { this.el = el; }}></b>
    )
  }
}

export default TypeAnimation;

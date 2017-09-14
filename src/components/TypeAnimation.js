import React, { Component } from 'react';
import Typed from 'typed.js';

class TypeAnimation extends Component {
  componentDidMount() {
    const { strings } = this.props;

    const options = {
      strings,
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1500,
      loop: true
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

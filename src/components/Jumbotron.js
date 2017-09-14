import React from 'react';
import { Link } from 'react-router-dom';

import TypeAnimation from './TypeAnimation';

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1>Hello, I'm Manuel.</h1>
        <p className="lead">
          I’m a
          &nbsp;
          <TypeAnimation strings={[
            'Web Designer',
            'Frontend Developer'
          ]} />
          &nbsp;
          from the Dominican Republic.
        </p>
        <Link className="btn btn-secondary btn-rounded mt-2" to="/">
          View my work &raquo;
        </Link>
      </div>
      <a className="arrow-down">
        <i className="fa fa-long-arrow-down fa-2x"></i>
      </a>
    </div>
  )
}

export default Jumbotron;

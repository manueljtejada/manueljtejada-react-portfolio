import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../images/logo.svg';

const Menu = () => {
  return (
    <header className="site-header" role="banner">
      <nav className="navbar navbar-expand-lg navbar-ligh bg-light">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img src={logo} height="40" alt="Manuel J. Tejada logo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" activeClassName="active" to="/work">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" activeClassName="active" to="/about">
                  About
                </NavLink>
              </li>
          </ul>
        </div>
      </nav>

    </header>
  )
}

export default Menu;

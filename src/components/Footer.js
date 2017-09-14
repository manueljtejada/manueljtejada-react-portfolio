import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer text-center">
      &copy; {year} Manuel J. Tejada. Built with ❤️ from the DR 🌴
    </footer>
  )
}

export default Footer;

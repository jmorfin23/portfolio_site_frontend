import React, { Component } from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
    <nav className="color navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">Jonathan Morfin</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">About Me <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;

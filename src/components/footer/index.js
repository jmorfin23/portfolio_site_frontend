import React, { Component } from 'react';
import './index.css';

function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div className="row add-background">
          <div id="bookmark" className="col-md-10 col-8 col-sm-8 offset-md-1 offset-sm-2 offset-1 below-footer1">
            <ul>
              <li><a href="https://www.facebook.com/jonathan.morfin.5" target="_blank" className="fa fa-facebook"></a></li>
              <li><a href="https://www.linkedin.com/in/jonathanmorfin411/" target="_blank" className="fa fa-linkedin"></a></li>
              <li><a href="#" target="_blank" className="fa fa-google"></a></li>
              <li><a href="https://github.com/jmorfin23" target="_blank" className="fa fa-github"></a></li>
            </ul>
            <i>
              <a href="#" className="fa fa-angle-up"></a>
            </i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

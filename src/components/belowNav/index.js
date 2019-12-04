import React from 'react';
import './index.css';

const BelowNav = (props) => {
  return (
    <div className="belownav">
      <div className="row">
        <div className="col-md-10 offset-md-2 offset-sm-4 offset-2 below-nav">
            <p><a href="#">{props.pageName}</a></p>
        </div>
      </div>
    </div>
  );
}

export default BelowNav;

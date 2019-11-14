import React, { Component } from 'react';
import './index.css';
import BelowNav from '../../components/belowNav';


class Projects extends Component {
  render() {
  return (
    <div className="projects">
      <BelowNav pageName={this.props.pageName}/>
      <div className="row">
        <div className="col-md-8 offset-md-1 col-8 offset-2">
          <div>
            <h5>Top 100</h5>
            <p>This is a full-stack web application that allows the user to play tracks from the billboard top 100 charts and guess its ranking. There is also a messaging platform that allows users to interact. </p>
            <p>You can click <a target="_blank" href="https://github.com/jmorfin23/top_100_frontend" rel="noopener noreferrer">here</a> to see the full respository on github</p>
          </div>
          <div>
            <h5>Twitter E-Commerce / Social Media</h5>
            <p>This is a web application that combines twitter and a standard e-commerce site. The user can post to their page add a profile picture and submit a contact form.</p>
            <p>You can click <a target="_blank" href="https://github.com/jmorfin23/ecommerce_site" rel="noopener noreferrer">here</a> to see the full respository on github</p>
          </div>

          <div>
            <h5>E-Commerce </h5>
            <p>This is a full-stack web application of a classic e-commerce site. The user can add products, delete products and add products to their shopping cart.</p>
            <p>You can click <a target="_blank" href="https://github.com/jmorfin23/ecommerce_front-end" rel="noopener noreferrer">here</a> to see the full respository on github</p>
          </div>

          <div>
          <h5>Event Scheduler</h5>
          <p>This is a full-stack web application that allows the user to schedule events and retrieve events. The user can delete events and view events as well.</p>
          <p>You can click <a target="_blank" href="https://github.com/jmorfin23/full-stack-app-frontend" rel="noopener noreferrer">here</a> to see the full respository on github</p>
          </div>
          <div>
          <h5>Weather app</h5>
          <p>This is a web application that allows the user to search for any city and display its current weather characteristics </p>
          <p>You can click <a target="_blank" href="https://github.com/jmorfin23/Weather_app" rel="noopener noreferrer">here</a> to see the full respository on github</p>
          </div>
          <p id="add-margin">For more projects check out my github!</p>
        </div>
      </div>
    </div>
  );
}
}
export default Projects;

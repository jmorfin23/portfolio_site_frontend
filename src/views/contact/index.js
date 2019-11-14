import React, { Component } from 'react';
import './index.css';
import BelowNav from '../../components/belowNav';

class Contact extends Component {
  render() {
  return (
    <div className="contact">
    <BelowNav pageName={this.props.pageName}/>

    <div className="row contact_container">
      <div className="col-md-8 offset-md-2">
        <form  onSubmit={this.props.sendMail}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name</label>
          <input type="name" className="form-control" placeholder="Name" name="name"/>
        </div>
        <div className="form-group col-md-6">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Email" name="email"/>
        </div>
      </div>

      <div className="form-group">
        <label>Subject</label>
        <input type="text" className="form-control" placeholder="Subject" name="subject" />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea className="form-control" name="message" rows="5" placeholder="Message..."></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Send</button>
    </form>
    </div>
  </div>
    </div>
  );
}
}
export default Contact;

import React, { Component } from 'react';
import './index.css';
import BelowNav from '../../components/belowNav';
import DangerAlert from '../../components/dangerAlert';
import SuccessAlert from '../../components/successAlert';
import ErrorAlert from '../../components/errorAlert';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      filled: false,
      success: false,
      error: false,
      form_submitted: false,
      sent: false
    };


  }

  setName = (event) => {
    this.setState({ name: event.target.value});
  }
  setEmail = (event) => {
    this.setState({ email: event.target.value});
  }
  setSubject = (event) => {
    this.setState({ subject: event.target.value});
  }
  setMessage = (event) => {
    console.log(typeof event.target.value); 
    this.setState({ message: event.target.value});
  }

  sendMail = async(e) => {
    e.preventDefault();

    this.setState({ form_submitted: true });

    if (this.state.name.length <= 0 || this.state.email.length <= 0 || this.state.subject.length <= 0 || this.state.message.length <= 0 ) {
      this.setState({ filled: true})
      return;
    }
    
    try {
      let response = await fetch('https://portfolio-backend2019.herokuapp.com/api/email', {
        headers: {
          'Content-Type': 'application/json',
          'name': this.state.name,
          'email': this.state.email,
          'subject': this.state.subject,
          'message': this.state.message
        }
      });

      let data = await response.json();

      //display success or error message
      data.Success ? this.setState({ success: true }) : this.setState({ error: true })

      //clear input fields
      this.setState({ name: '', email: '', subject: '', message: '', filled: false, form_submitted: false, sent: true });

    } catch(error) {
      console.log(error);
      //call error to DOM if catch block executes
      this.setState({ error: true })
    }
  }

  render() {
    let name;
    let email;
    let subject;
    let message;

    if (this.state.name.length <= 0 && this.state.form_submitted) {
      name = document.getElementById('name_in');
      name.style.border = '1px solid red';
    }
    if (this.state.email.length <= 0 && this.state.form_submitted) {
      email = document.getElementById('email_in');
      email.style.border = '1px solid red';

    }
    if (this.state.subject.length <= 0 && this.state.form_submitted) {
      subject = document.getElementById('sub_in');
      subject.style.border = '1px solid red';
    }
    if (this.state.message.length <= 0 && this.state.form_submitted) {
      message = document.getElementById('message_in');
      message.style.border = '1px solid red';
    }
    //change this, easier way than hardcode.
    if (this.state.sent) {
      name = document.getElementById('name_in');
      email = document.getElementById('email_in');
      subject = document.getElementById('sub_in');
      message = document.getElementById('message_in');

      email.style.border = 'none';
      name.style.border = 'none';
      subject.style.border = 'none';
      message.style.border = 'none';
    }

  return (
    <div className="contact">
    <BelowNav pageName={this.props.pageName}/>

    <div className="row contact_container">
      <div className="col-md-8 offset-md-2">
      {
        this.state.filled ? <DangerAlert /> : null
      }
      {
        this.state.error ? <ErrorAlert /> : null
      }
      {
        this.state.success ? <SuccessAlert /> : null
      }
        <form  onSubmit={this.sendMail}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name</label>
          <input id="name_in" onChange={this.setName} type="name" className="form-control" placeholder="Name" name="name" value={this.state.name}/>
        </div>
        <div className="form-group col-md-6">
          <label>Email</label>
          <input id="email_in" onChange={this.setEmail} type="email" className="form-control" placeholder="Email" name="email" value={this.state.email}/>
        </div>
      </div>

      <div className="form-group">
        <label>Subject</label>
        <input id="sub_in" onChange={this.setSubject} type="text" className="form-control" placeholder="Subject" name="subject" value={this.state.subject}/>
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea id="message_in" onChange={this.setMessage} className="form-control" name="message" rows="5" placeholder="Message..." value={this.state.message}></textarea>
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

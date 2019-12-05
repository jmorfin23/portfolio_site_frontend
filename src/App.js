import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/homepage';
import Projects from './views/projects';
import Footer from './components/footer';
import Contact from './views/contact';


class App extends Component {

  constructor() {
    super();

    this.state = {
      error: null,
      errorInfo: null
    }
  }

  sendMail = async(e) => {
    e.preventDefault();

    let name = e.target.elements.name.value;
    let email = e.target.elements.email.value;
    let subject = e.target.elements.subject.value;
    let message = e.target.elements.message.value;

    console.log(name, email, subject, message);

    //api call to send to backend;
    let URL = 'https://portfolio-backend2019.herokuapp.com/api/email';

    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'name': name,
        'email': email,
        'subject': subject,
        'message': message
      }
    });
    console.log(response);

    let data = await response.json();
    console.log(data);
  }
  scrollToTop = async(e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0;

  }
  componentDidCatch(error, errorInfo) {
   this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
      <div>
        <h3>Oops, something went wrong..</h3>
        <p>{this.state.errorInfo}</p>
        <p>{this.state.error}</p>
      </div>
    )
    }
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path={['/' ,'/home']} render={() =>
            <HomePage pageName={'About Me'}/>
           } />
          <Route exact path='/projects' render={() =>
             <Projects pageName={'Projects'}/>
          } />
          <Route exact path='/contact' render={() =>
             <Contact pageName={'Contact'} sendMail={this.sendMail}/>
          } />
        </Switch>
      <Footer scrollToTop={this.scrollToTop}/>
    </div>
  );
}
  }
export default App;

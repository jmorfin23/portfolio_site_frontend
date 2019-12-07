import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/homepage';
import Projects from './views/projects';
import Footer from './components/footer';
import Contact from './views/contact';
import { Button } from 'reactstrap'; 

class App extends Component {

  constructor() {
    super();

    this.state = {
      error: null,
      errorInfo: null
    }
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
             <Contact pageName={'Contact'} />
          } />
        </Switch>
      <Footer scrollToTop={this.scrollToTop}/>
    </div>
  );
}
  }
export default App;

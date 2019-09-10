import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/homepage';
import Projects from './views/projects';
import Footer from './components/footer';


class App extends Component {
  render() {
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
        </Switch>
      <Footer />
    </div>
  );
}
  }
export default App;

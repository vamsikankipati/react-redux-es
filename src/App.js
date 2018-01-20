import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">
          <br/>
          <Router>
          <div>
          <MenuLink to="/about" label="About"/>
          <hr/>
          <Route path="/about" component={About}/>
          </div>
          </Router>
        </p>

      </div>
    );
  }
}

const CustomLinkExample = () => (
  <Router>
    <div>
      <MenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
      <MenuLink to="/about" label="About"/>
      <hr/>

      <Route path="/about" component={About}/>
    </div>
  </Router>
)

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={to}>{label}</Link>
    </div>
  )}/>
)

const About = () => (
  <div>
    <h2>About</h2>
    <MenuLink to="/App" label="App"/>
    <Route path="/App" component={App}/>
  </div>
)


export default App;

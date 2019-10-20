import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import JavaScript from './app/JavaScript/JavaScript';
import CascadingStyle from './app/CascadingStyle/CascadingStyle';
import HTMLSpec from './app/HTMLSpec/HTMLSpec';
import Home from './app/Home/Home';

function App () {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/html">HTML5</Link>
            </li>
            <li>
              <Link to="/css">CSS3</Link>
            </li>
            <li>
              <Link to="/javascript">JavaScript</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/javascript">
            <JavaScript />
          </Route>
          <Route path="/css">
            <CascadingStyle />
          </Route>
          <Route path="/html">
            <HTMLSpec />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {'Hello React Hooks !'}
    </div>
  );
}

export default App;

import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="d-flex">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/project">
            <Project></Project>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;

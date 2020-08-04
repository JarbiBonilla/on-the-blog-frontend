import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import NewBlog from './containers/NewBlog'
import Blogs from './containers/Blogs'
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="head-container">
          <NavBar />
           <Switch>
             <Route exact path="/" component={ Home } />
             <Route exact path="/cars" component={ Blogs } />
             <Route exact path="/cars/new" component={ NewBlog } />
           </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

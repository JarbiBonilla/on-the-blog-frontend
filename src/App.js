import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './containers/Home'
import NewBlog from './containers/NewBlog'
import Blogs from './containers/Blogs'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div id="head-container">
          <NavBar />
           <Switch>
             <Route exact path="/" component={ Home } />
             <Route exact path="/blogs" component={ Blogs } />
             <Route exact path="/blogs/new" component={ NewBlog } />
           </Switch>
        </div>
        <br></br>
        <Footer />
      </Router>
    )
  }
}

export default App;

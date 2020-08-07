import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div id="navbar">
        <nav id="nav-bar-container">
          <ul id="nav-links">
            <li className="nav-link">< NavLink to="/">Home</ NavLink ></li>
            <li className="nav-link">< NavLink to="/blogs/new">Add a Blog</ NavLink ></li>
            <li className="nav-link">< NavLink to="/blogs">See All Blogs</ NavLink ></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar
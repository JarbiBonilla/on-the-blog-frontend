import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div id="home-container">
                <h1>Welcome To On The Blog!</h1>
                <a className="home-link" href="/blogs">See All Blogs</a> <br />
                <a className="home-link" href="/blogs/new">Add New Blog</a> <br />
            </div>
        )
    }
}

export default Home
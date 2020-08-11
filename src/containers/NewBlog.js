import React, { Component } from 'react'
import { addBlog } from '../actions'
import { connect } from 'react-redux'

class NewBlog extends Component {
    state = {
        title: '',
        content: '',
        link: '',
        favorite: 0
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addBlog(this.state)
        document.getElementById('new-blog-form').reset()
        this.props.history.push('/blogs')
    }

    render() {
        return (
            <form id="new-blog-form" onSubmit={this.handleSubmit}>
              <h3>Add New Blog!</h3>
              <label>Title</label> <br />
              <input type="text" onChange={this.handleChange} value={this.state.title} name="title"/>
              <br /> <br />
      
              <label>Enter Blog Content Here!</label> <br />
              <input type="text" onChange={this.handleChange} value={this.state.content} name="content"/>
              <br /> <br />
      
              <label>Add Links Here (if applicable)</label> <br />
              <input type="text" onChange={this.handleChange} value={this.state.link} name="link"/>
              <br /> <br />
      
              <input type="submit" value="Create Blog" />
            </form>
          )
    }
}

export default connect(null, { addBlog })(NewBlog)
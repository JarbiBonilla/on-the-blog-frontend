import React, { Component } from 'react'
import { addBlog } from '../actions/index'
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
          [e.target.title]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addBlog(this.state)
        document.getElementById('new-blog-form').reset()
        this.props.history.push('/blogs')
    }







}

export default connect(null, { addBlog })(NewBlog)
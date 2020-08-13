import React, { Component } from 'react'
import BlogCard from '../components/BlogCard'
import { connect } from 'react-redux'
import AddBlogButton from '../components/AddBlogButton'
import { fetchBlogs, addBlog } from '../actions'


class Blogs extends Component {

    componentDidMount() {
        this.props.fetchBlogs()
    }

    render() {
        const blogsList = this.props.blogs.map((b, id) => < BlogCard key={id} blog={b} />)
        return(
            <div className="blogs-container">
                < AddBlogButton name="Add Blog" addBlog={this.props.addBlog} />
                {blogsList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      blogs: state.blogs
    }
}


export default connect(mapStateToProps, { fetchBlogs, addBlog })(Blogs)
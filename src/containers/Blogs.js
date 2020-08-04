import React, { Component } from 'react'
import BlogCard from '../components/BlogCard'
import { connect } from 'react-redux'
import AddBlogButton from '../components/AddBlogButton'
import { fetchBlogs, addBlog} from '../actions/index'


class Blogs extends Component {

    componentDidMount() {
        this.props.fetchBlogs()
    }

    render() {
        return(
          <div className="blogs-container">
            < AddBlogButton name="Create Your Blog" addBlog={this.props.addBlog}/>
            {this.props.blogs.map((b, id) => < BlogCard key={id} blog={b} />)}
          </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      blogs: state.blogs
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchBlogs: () => dispatch(fetchBlogs()),
      addBlog: blog => dispatch(addBlog(blog))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
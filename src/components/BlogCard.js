import React from 'react'
import { connect } from 'react-redux'
import { deleteBlog } from '../actions'
import DeleteButton from './DeleteButton'

const BlogCard = ({blog, deleteBlog}) => {
  return (
    <div className="blog-card">
      <span id="blog-title">{blog.title}</span> 
      <span id="blog-content">{blog.content}</span> <br />
      <span id="blog-link">{blog.link}</span> <br />
      <span id="blog-favorite">{blog.favorite}</span> <br />
      < DeleteButton name="Delete Blog" blog_id={blog.id} deleteBlog={deleteBlog}/>
      <br /><br />
    </div>
  )
}

export default connect(null, { deleteBlog })(BlogCard)
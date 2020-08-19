import React from 'react'
import DeleteButton from './DeleteButton'

const BlogCard = ({blog}) => {
  return (
    <div className="blog-card">
      <span id="blog-title">{blog.title}</span> <br />
      <span id="blog-content">{blog.content}</span> <br />
      <a href={blog.link}>Link here</a> <br />
      < DeleteButton name="Delete Blog" blog={blog} />
      <br /><br />
    </div>
  )
}

export default BlogCard
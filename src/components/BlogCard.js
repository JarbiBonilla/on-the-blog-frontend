import React from 'react'
import DeleteButton from './DeleteButton'
import FavoriteButton from './FavoriteButton'

const BlogCard = ({blog}) => {
  return (
    <div className="blog-card">
      <span id="blog-title">{blog.title}</span> <br />
      <span id="blog-content">{blog.content}</span> <br />
      <a href={blog.link}>Link here</a> <br />
      < DeleteButton name="Delete Blog" blog={blog} /> <br />
      Like: < FavoriteButton />
      <br /><br />
    </div>
  )
}

export default BlogCard
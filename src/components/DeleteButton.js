import React from 'react'
import { connect } from 'react-redux'
import { deleteBlog } from '../actions'

const DeleteButton = ({ blog, deleteBlog }) => {
  return (
    <button id="delete-button" onClick={() => deleteBlog(blog.id)}> Delete Blog </button>
  )
}

export default connect (null, {deleteBlog})(DeleteButton)


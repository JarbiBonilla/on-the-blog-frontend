import React from 'react'

const DeleteButton = props => {
  return (
    <button id="delete-button" onClick={() => props.deleteBlog(props.blog_id)}>{props.name}</button>
  )
}

export default DeleteButton
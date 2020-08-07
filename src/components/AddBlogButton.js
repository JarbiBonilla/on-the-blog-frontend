import React from 'react'
import { useHistory } from 'react-router-dom'

const AddBlogButton = props => {
  const history = useHistory()
  return (
    <button id="add-button" onClick={() => history.push("/blogs/new")}>{props.title}</button>
  )
}

export default AddBlogButton 
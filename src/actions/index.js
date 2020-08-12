// first fetch call. this will return the index of blogs
// EX: GET localhost:3000/blogs


export const fetchBlogs = () => {
    return dispatch => {
      return fetch(`http://localhost:3000/blogs`)
        .then(res => res.json())
        .then(blogs => {
          dispatch({type: "GET_BLOGS", payload: blogs})
        })
    }
  }

  // second fetch call. this will add a new blog
  // EX: POST localhost:3000/blogs

  export const addBlog = blog => {
    return dispatch => {
      return fetch(`http://localhost:3000/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({blog: blog})
      })
        .then(res => res.json())
        .then(blog => {
  
          dispatch({type: "ADD_BLOG", payload: blog})
        })
    }
  }

  // third fetch call. this will make the call for deleting a blog 
  // and persisting it to the database

  export const deleteBlog = blogId => {
    return dispatch => {
      return fetch(`http://localhost:3000/blogs/${blogId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(blogId => {
          dispatch({type: "REMOVE_BLOG", payload: blogId})
        })
    }
  }
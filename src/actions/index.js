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
      return fetch(`http://localhost:3001/blogs`, {
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
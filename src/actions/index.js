// first fetch call. this will return the index of blogs
// EX: GET localhost:3000/blogs


export const fetchBlogPosts = () => {
    return dispatch => {
      return fetch(`http://localhost:3001/blogs`)
        .then(res => res.json())
        .then(blogs => {
          dispatch({type: "GET_BLOGS", payload: blogs})
        })
    }
  }
export default (state = [], action) => {
    switch(action.type) {
        case "GET_BLOGS":
            return [...action.payload]

        case "ADD_BLOG":
            return [...state, action.payload]

        case "DELETE_BLOG":
            let updatedBlogsList = state.filter(blog => blog.id !== action.payload.id)
            return [...updatedBlogsList]

        default: 
            return state
    }
}
const postReducer = (state, action) => {
  switch (action.type) {
    case "setPost":
      return { ...state, posts: action.posts };
    case "notIntrested":
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== action.id)],
      };

    default:
      return state;
  }
};

export default postReducer;

const initialState = [];

const getDate = () => {
  let dateNow = new Date();
  let options = { month: '2-digit', day: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit'}
  return dateNow.toLocaleDateString("en-US", options);
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          id: action.id,
          title: action.title.value,
          message: action.message.value,
          user: action.user.value,
          updated: getDate(),
          comments: []
        }
      ]
    case 'VIEW_POST':
      return state.map(post =>
        (post.id === action.id)
          ? { ...post }
          : post
      )
    case 'ADD_COMMENT':
      console.log('adding a comment');
      return state.map(post =>
        (post.id === action.postId)
          ? {...post, updated: getDate(), comments: [...post.comments, {
              user: action.user.value,
              message: action.message.value
            }]}
          : post
      )
    default:
      return state
  }
}

export default posts
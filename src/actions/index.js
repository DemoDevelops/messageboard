let nextPostId = 0;

export const addPost = post => ({
  type: 'ADD_POST',
  id: nextPostId++,
  title: post.title,
  message: post.message,
  user: post.user
})

export const getPosts = () => ({
  type: 'VIEW_POSTS',
})

export const viewPost = index => ({
  type: 'VIEW_POST',
  index
})

export const addComment = comment => ({
  type: 'ADD_COMMENT',
  postId: comment.postId,
  user: comment.user,
  message: comment.message
})
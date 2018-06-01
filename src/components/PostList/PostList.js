import React from 'react';
import PostItem from './PostItem/PostItem'
import {
  Container
} from 'reactstrap';

const PostList = ({ posts, viewPost }) => {
  let postsList = (<p className="text-center">The are no posts yet, please add one to get started!</p>);

  if(posts.length > 0 ) {
    postsList = posts.map(post =>
        <PostItem
          key={post.id}
          {...post}
        />
      )
  }

  return (
    <Container className="postList">
      {postsList}
    </Container>
)};

export default PostList
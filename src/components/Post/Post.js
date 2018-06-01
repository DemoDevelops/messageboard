import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Button from '../Button/Button';
import CommentItem from './CommentItem/CommentItem'
import './Post.css';
import AddComment from './AddComment/AddComment';

const Post = ({post, getPost, addComment, history}) => {
  function back(e){
    history.push('/');
  }

  let comments = (<p>No comments have been left for this post yet.</p>);

  if(post.comments.length > 0) {
    comments = post.comments.map(comment =>
      <CommentItem
        {...comment}
      />
    )
  }

  return (
  <Container className="viewPost">
    <Row>
      <Col xs={12}>
        <Row>
          <Col md={9}>
            <Row>
              <Col xs={12}><h2>{post.title}</h2></Col>
            </Row>
            <Row>
              <Col xs={12} md={3}>
                <span className="type">By: </span><span>{post.user}</span>
              </Col>
              <Col xs={12} md={9}>
                <span className="type">On: </span><span>{post.updated}</span>
              </Col>
            </Row>
          </Col>
            <Col md={3} className="align-self-center d-none d-md-block text-right">
              <Button text={"Back to Posts"} onClick={back} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className="message">{post.message}</p>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5 className="resp">Responses</h5>
      </Col>
    </Row>
    <div className="comments">
      {comments}
    </div>
    <Row>
      <Col>
        <AddComment postId={post.id} addComment={addComment} />
      </Col>
    </Row>
    <Row>
        <Col className="text-center d-md-none d-block text-right">
          <div className="btnBack">
            <Button text={"Back to Posts"} onClick={back} />
          </div>
        </Col>
    </Row>
  </Container>
)};
export default Post
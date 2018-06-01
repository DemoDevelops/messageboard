import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import './PostItem.css';
import {Link} from 'react-router-dom'

const PostItem = (post, viewPost) => (
  <Container>
    <Link
      className="linkPost"
      to={`/post/${post.id}`}
    >
    <Row className="postItem">
      <Col md={11}>
        <Row>
          <Col className="trim-text"><span className="title">{post.title}</span></Col>
        </Row>
        <Row>
          <Col xs={9} md={3}><span className="params">Posted By: {post.user}</span></Col>
          <Col xs={3} md={5}><span className="params comment">{post.comments.length} Comments</span></Col>
          <Col md={4} className="d-none d-md-block text-right"><span className="params">Last Update: {post.updated} </span></Col>
        </Row>
      </Col>
      <Col md={1} className="d-none d-md-block arrow">
        <div className="arrow-right"></div>
      </Col>
    </Row>
    </Link>
    
  </Container>
);
export default PostItem
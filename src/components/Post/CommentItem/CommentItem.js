import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

const CommentItem = (comment) => (
  <Row className="comment">
    <Col xs={12} className="user">{comment.user}:</Col>
    <Col xs={12}><p className="text">{comment.message}</p></Col>
  </Row>
);
export default CommentItem
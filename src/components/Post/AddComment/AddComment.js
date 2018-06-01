import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Button from '../../Button/Button';

const AddComment = ({ addComment, postId }) => {
  let comment = {
    message: "",
    user: "",
    postId: postId
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!comment.message.value.trim()) {
      return
    }
    if (!comment.user.value.trim()) {
      return
    }
    
    addComment(comment)
    comment.message.value = ''
    comment.user.value = ''
  }

  return (
    <Container className="addComment">
      <form onSubmit={handleSubmit}>
        <Row className="commentCont">
          <Col xs={12} md={10}>
            <Row>
              <Col className="label">Reply Message</Col>
              <Col xs={12}>
                <textarea ref={node => comment.message = node} />
              </Col>
            </Row>
            <Row>
              <Col className="label">Reply User</Col>
              <Col xs={12}>
                <input ref={node2 => comment.user = node2} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={2} className="align-self-center text-center">
            <Button text="Post Reply" onClick={handleSubmit} />
          </Col>
        </Row>
      </form>
    </Container>
  )
}

export default AddComment

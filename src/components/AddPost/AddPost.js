import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import './AddPost.css';
import Button from '../Button/Button';

const AddPost = ({ addPost, history, newId }) => {
  console.log(history);
  let post = {
    title: "",
    message: "",
    user: ""
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!post.title.value.trim()) {
      return
    }
    addPost(post)
    history.push('/post/'+newId);
  }

  function cancel(e) {
    e.preventDefault()
    history.goBack();
  }

  return (
    <Container className="addPost">
      <Row>
        <Col><h1 className="text-center">Create a new post</h1></Col>
      </Row>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col className="label text-md-left text-center">Post Title</Col>
          <Col xs={12}>
            <input ref={node => post.title = node} />
          </Col>
        </Row>
        <Row>
          <Col className="label text-md-left text-center">Message</Col>
          <Col xs={12}>
            <textarea ref={node2 => post.message = node2} />
          </Col>
        </Row>
        <Row>
          <Col className="label text-md-left text-center">User</Col>
          <Col xs={12}>
            <input ref={node3 => post.user = node3} />
          </Col>
        </Row>
        <Row className="justify-content-end buttons">
          <Col xs={6} md="auto" className="text-center">
            <Button text="Cancel" onClick={cancel} />  
          </Col>
          <Col xs={6} md="auto" className="text-center">
            <Button text="Create Post" onClick={handleSubmit} />  
          </Col>
        </Row>
      </form>
    </Container>
  )
}

export default AddPost

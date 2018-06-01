import React, { Component } from 'react';
import './App.css';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import MessageBoardContainer from '../../containers/MessageBoardContainer'
import Button from '../Button/Button';
import {Link} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <header className="App-header">
              <h1 className="App-title">Redux Message Board</h1>
            </header>
          </Col>
        </Row>
        <Row>
          <MessageBoardContainer />
        </Row>
        <Row>
          <Col md={{ size: 3, offset: 9 }} className="text-md-right text-center ">
            <Link to="/newpost"><Button text="Create New Post" /></Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

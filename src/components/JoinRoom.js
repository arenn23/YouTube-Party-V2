import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function JoinRoom() {
  return (
    <>
      <Container>
        <Row>
          <Col align="center">
            <h3 className="mt-4">Time to Party!</h3>
          </Col>
        </Row>
        <Row>
          <Col align="center">
            <Link to="/createroom">
              <Button className="mt-3" size="lg" color="secondary">
                Create a Room
              </Button>
            </Link>
            <Link to="/createroom">
              <Button className="ml-3 mt-3" size="lg" color="danger">
                Join a Room
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default JoinRoom;

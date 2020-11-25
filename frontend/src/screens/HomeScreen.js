import React from 'react';
import { Row, Col } from 'react-bootstrap';
import players from '../players';
import Players from '../components/Players';

const HomeScreen = () => {
  return (
    <>
      <h1>The Team</h1>
      <Row>
        {
          players.map(player => (
            <Col sm={12} md={6} xl={3}>
              <Players player={player} />
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default HomeScreen;

import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import players from '../players';

const PlayerScreen = ({ match }) => {
  const player = players.find((p) => p._id === match.params.id)

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={player.image} alt={player.fullName} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{player.fullName}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>{player.position}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>{player.nationality}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default PlayerScreen;

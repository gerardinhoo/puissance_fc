import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const PlayerScreen = ({ match }) => {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    const fetchPlayer = async () => {
      const {data} = await axios.get(`/api/players/${match.params.id}`);
      setPlayer(data);
    }
    fetchPlayer();
  }, [match.params.id]);
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
              <h3>Position: {player.position}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>Origin: {player.nationality}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default PlayerScreen;

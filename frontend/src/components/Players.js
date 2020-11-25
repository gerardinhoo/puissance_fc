import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';


const Players = ({ player }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/player/${player._id}`}>
        <Card.Img src={player.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/player/${player._id}`}>
          <Card.Title as='div'>
            <strong>{player.fullName}</strong>
          </Card.Title>
          <Card.Title as='div'>
            <strong>{player.position} </strong> - <strong>{player.nationality}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Players;
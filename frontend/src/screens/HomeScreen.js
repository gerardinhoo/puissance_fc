import React, {useState, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import Players from '../components/Players';
import axios from 'axios';


const HomeScreen = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
     const fetchPlayers = async () => {
       const {data} = await axios.get('/api/players');
       setPlayers(data);
     }
     fetchPlayers();
  }, [])
  return (
    <>
      <h1>The Team</h1>
      <Row>
        {
          players.map(player => (
            <Col key={player._id} sm={12} md={6} xl={3}>
              <Players player={player} />
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default HomeScreen;

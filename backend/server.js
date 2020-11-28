const express = require('express');
const app = express();

const players = require('./data/players')


app.get('/', (req, res) => {
  res.send('Something to start with')
})

app.get('/api/players', (req, res) => {
  res.json(players)
})

app.get('/api/players/:id', (req, res) => {
  const player = players.find((p) => p._id === req.params.id)
  res.json(player);
})

const PORT = 5000;
app.listen(PORT, () => {console.log(`Server is listenning on ${PORT}`)})
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const players = require('./data/players')

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Voici le debut...')
})

app.get('/api/players', (req, res) => {
  res.json(players)
})

app.get('/api/players/:id', (req, res) => {
  const player = players.find((p) => p._id === req.params.id)
  res.json(player);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server is listenning on port ${PORT} in ${process.env.NODE_ENV} mode`)})
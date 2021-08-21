const express = require('express');
const cors = require('cors');
const { randomBytes } = require('crypto');

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

const posts = {};

app.get('/ping',(req, res) => {
  res.status(201).send({ 'ping': 'pong' });
});

app.get('/posts', (req, res) => {
  res.status(201).send(posts);
});

app.post('/posts', (req, res) => {
  const inputs = req.body;
  const id = randomBytes(8).toString('hex');
  const info = { ['id']: id, ...inputs };
  posts[id] = info;
  res.status(201).send(info);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
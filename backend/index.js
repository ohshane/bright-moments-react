const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/ping',(req, res) => {
  res.status(201).send({ 'ping': 'pong' });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
const express = require('express');
const cors = require('cors');
const { randomBytes } = require('crypto');

const { spawn } = require('child_process');

const port = 4000;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
app.use(express.json());
app.use(cors());

const cv = require('opencv4nodejs');

const posts = {};

app.get('/ping',(req, res) => {
  res.status(200).send({ 'ping': 'pong' });
});

app.get('/posts', (req, res) => {
  res.status(200).send(posts);
});

app.get('/posts/:id', (req, res) => {
  const user = posts[req.params.id];
  if (user) {
    res.status(200).send(user);
  }
});

app.get('/stream/:id', (req, res) => {
  const user = posts[req.params.id];
  if (!user) {
    res.status(403).send({ "message": "user id does not exist" });
  }

  // const cap = new cv.VideoCapture(user.url);

  // setInterval(() => {
  //     const frame = cap.read();
  //     if (!frame) {
  //       res.send(403).send({ "message": "error" })
  //     }
  //     const image = cv.imencode('.jpg', frame).toString('base64');
  // }, 500);

  res.status(201).send({ "message": "started streaming" })
});

app.post('/posts', (req, res) => {
  const inputs = req.body;
  if (inputs.url === '0'){
    inputs.url = 0;
  }
  const id = randomBytes(8).toString('hex');
  const info = {
    ['id']: id,
    ['capture']: false,
    ...inputs
  };
  posts[id] = info;
  res.status(201).send(info);
});

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
import express from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World, port 3000!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
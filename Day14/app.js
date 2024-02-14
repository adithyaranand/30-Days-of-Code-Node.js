const express = require('express');
const cachingMiddleware = require('./cachingMiddleware');
const app = express();
app.use(cachingMiddleware);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/data', (req, res) => {
  const responseData = { message: 'This is the response data' };
  res.json(responseData);
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const express = require('express');
const app = express();
const port = 4000;
function positiveIntegerHandler(req, res, next) {
  const number = parseInt(req.query.number);
  if (!isNaN(number) && number > 0) {
    res.status(200).send('Success: Positive integer received.');
  } else {
    res.status(400).send('Invalid request: "number" must be a positive integer.');
  }
}
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});
app.get('/positive', positiveIntegerHandler);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

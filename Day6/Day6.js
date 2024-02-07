// Import Express module
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
function greetHandler(req, res) {
  const name = req.query.name;
  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.send('Hello, Guest!');
  }
}
app.get('/greet', greetHandler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

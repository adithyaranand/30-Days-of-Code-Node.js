const express = require('express');
const app = express();
const RATE_LIMIT = 5; 
const TIME_WINDOW = 60 * 1000; 
const requestCounts = new Map();
function rateLimitMiddleware(req, res, next) {
  const clientIP = req.ip; 
  const count = requestCounts.get(clientIP) || 0;
  if (count >= RATE_LIMIT) {
    return res.status(429).send('Too Many Requests');
  }  
  requestCounts.set(clientIP, count + 1);
    setTimeout(() => {
    requestCounts.delete(clientIP);
  }, TIME_WINDOW);  
  next();
}
app.use(rateLimitMiddleware);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

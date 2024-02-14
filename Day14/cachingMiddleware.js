const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 60 * 2 });

function cachingMiddleware(req, res, next) {
  const key = req.originalUrl; 
  const cachedResponse = cache.get(key);
  if (cachedResponse) {
    console.log("Returning cached response for", key);
    return res.send(cachedResponse);
  }
  const originalSend = res.send;
  res.send = function (body) {
    cache.set(key, body); 
    console.log("Caching response for", key);
    originalSend.call(this, body); 
  };

  next(); 
}

module.exports = cachingMiddleware;

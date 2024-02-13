const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.get('/websocket', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

function setupWebSocket() {
  wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);

      ws.send(message);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
}

setupWebSocket();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

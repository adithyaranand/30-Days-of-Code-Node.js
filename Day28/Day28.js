const WebSocket = require('ws');
function setupWebSocketServer(server) {
    const wss = new WebSocket.Server({ server });
    const clients = new Set();
    wss.on('connection', (ws) => {
        clients.add(ws);

        ws.on('message', (message) => {
            broadcast(message);
        });

        ws.on('close', () => {
            clients.delete(ws);
        });
    });
    function broadcast(message) {
        clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }
}
module.exports = setupWebSocketServer;

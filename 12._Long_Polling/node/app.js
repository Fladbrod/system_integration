import express from "express";

const app = express();

let clients = [];

// Below is an example of long polling, getting more "real time data" than short polling.

// The server will keep the connection open until new data is available.
app.get('/events/subscribe', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    clients.push(res);

    req.on('close', () => {
        console.log("A client closed the connection", clients.length);
        clients = clients.filter(client => client !== res);
        console.log("Number of clients left", clients.length);
    });
});

// The server will send new data to all clients when new data is available.
app.get('/events/publish', (req, res) => {
    const newData = { data: 'This is a new message' };

    clients.forEach(client => {
        client.send(newData);
    });

    clients = [];

    res.status(204).end();
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server is running on port: ', 8080);
});

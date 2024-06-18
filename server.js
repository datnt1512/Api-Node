// server.js

const express = require('express');
const jsonServer = require('json-server');
const middlewares = require('./middleware');

const app = express();
const router = jsonServer.router('db.json');

app.use(middlewares);
app.use('/api', router); // Gắn json-server trên /api

const port = 5000;
app.listen(port, () => {
    console.log(`JSON Server đang chạy trên http://localhost:${port}`);
});

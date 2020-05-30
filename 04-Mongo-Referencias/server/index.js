const express = require('express');
const server = express();
const PORT = 4000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

server.get('/', (req, res) => {
    res.json({ messege: 'Hello World' })
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

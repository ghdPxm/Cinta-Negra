const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.get('/', (req, res) => {
    res.json({ messege: 'Hello World..' })
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

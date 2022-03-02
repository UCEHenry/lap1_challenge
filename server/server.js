const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

const appRoutes = require("./controller/app")
app.use('/data', appRoutes)

app.get('/', (req, res) => {
    res.send('Hello there!');
});

module.exports = app
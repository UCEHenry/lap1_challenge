const express = require('express');
const router = express.Router();

const data = require("../model/model")

router.get('/', (req, res) => {
    const allData = data.getAll();
    res.send(allData);
})

router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const idData = data.findById(id);
        res.send(idData);
    } catch(err) {
        console.log(err);
        res.status(404).send(err);
    }
})

router.get('/cohort/:name', (req, res) => {
    try {
        const name = String(req.params.name);
        const nameData = data.findByName(name);
        res.send(nameData);
    } catch(err) {
        console.log(err);
        res.status(404).send(err);
    }
})

module.exports = router
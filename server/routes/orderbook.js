const express = require('express');
const order = require('../models/order')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('orderbook ok');
})

router.get('/orders', (req, res) => {
    res.send('orders')
})

router.post('/', (req, res) => {
    console.log(req.body)
})

module.exports = router
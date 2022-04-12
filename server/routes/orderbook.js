const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('orderbook ok');
})

router.get('/orders', (req, res) => {
    res.send('orders')
})

module.exports = router
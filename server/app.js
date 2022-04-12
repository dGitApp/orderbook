const express = require("express");
const mongoose = require("mongoose")
require('dotenv/config')

const app = express();

// import routes
const orderbookRoute = require('./routes/orderbook');

app.use('/orderbook', orderbookRoute)

app.get('/', (req, res) => {
    res.send('API ok')
})

//connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to DB!")
})

//listen server
app.listen(3000);
const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require('dotenv/config')

const app = express();

app.use(bodyParser.json());

// import routes
const orderbookRoute = require('./routes/orderbook');

// middleware
app.use('/orderbook', orderbookRoute)

//route
app.get('/', (req, res) => {
    res.send('API ok')
})

//connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to DB!")
})

//listen server
app.listen(3000);
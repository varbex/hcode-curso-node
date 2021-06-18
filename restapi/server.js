require('dotenv').config();
const express = require('express');
const app = express();
const mongosse = require("mongoose");

mongosse.connect(process.env.DATABASE_STRING, { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongosse.connection
db.on('error', (err)=> {console.log(error)})
db.once('open', ()=> {console.log('banco conectado')})
app.use(express.json());
const subscriberRoute = require('./routes/subscriber')
app.use('/subscribers', subscriberRoute)

app.listen('3000', ()=> {
    console.log('server rest rodando');
});

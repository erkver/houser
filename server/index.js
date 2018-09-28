require('dotenv').config();

const express = require('express'),
app = express(),
{ json } = require('body-parser'),
massive = require('massive'),
{ getHouses, addHouse, deleteHouse } = require('./controller');

app.use(json());

massive(process.env.CONNECTION_STRING).then(db => {
  // console.log("db:", db);
  app.set('db', db);
}).catch(err => console.log(err));


app.get('/api/homes', getHouses);
app.post('/api/home', addHouse);
app.delete('/api/home/:id', deleteHouse)



const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => console.log(`Ready for take off on ${port}`));


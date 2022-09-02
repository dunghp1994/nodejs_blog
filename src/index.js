const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const app = express();


const port = 3000

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));


//add midleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.urlencoded({
  extended: true
}));

//XMLHttpResquest, fetch, axios, jquery

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
  extname : '.hbs'
}));

//HTPP
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//route init (khoi tao)
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
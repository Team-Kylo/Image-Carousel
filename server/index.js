const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;
const Images = require('../database/index.js')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));
// app.use('/:id', express.static('public'));

app.get('/carousel/:id/', (req, res, next) => {
  let id = req.params.id;
  Images.find({id: id})
  .exec((err, result) => {
    if (err) {
      console.log('error get request', err);
      res.sendStatus(404);
    } else {
      res.json(result);
    }
  })
});


module.exports = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

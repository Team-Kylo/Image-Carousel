const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;
const Images = require('../database/index.js')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/carousel', (req, res, next) => {
  Images.find((err, result) => {
    if (err) {
      console.log('error get request', err);
    } else {
      console.log(req.params.id)
      res.json(result);
    }
  })
});


app.use(express.static('./public'));

module.exports = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

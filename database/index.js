const mongoose = require('mongoose');
// require('dotenv').config();
// const port = process.env.PORT;
mongoose.connect('mongodb://localhost/carousel', { useNewUrlParser: true, useUnifiedTopology: true  });
const Schema = mongoose.Schema;
const db = mongoose.connection;
faker = require('faker');
// require('mongoose-type-url');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongodb connected!");
});

const ImageSchema = new Schema({
  id: Number,
  url: String,
  width: Number,
  height: Number

});

const Images = mongoose.model('Images', ImageSchema);

placeholder = new Images({
  id: 1,
  url: 'www.etsy.com/kylo.jpg' // mongoose.SchemtaTypes.Url to experiment
})

placeholder.save((err, data) => {
  if (err) {
    console.log('images could not be saved', err)
  } else {
    console.log('images saved!', data)
  }
})


// http://picsum.photos/v2   <-- picsum api, specify width & height at the end of the requesl URL

module.exports = Images;
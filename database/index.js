const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3000/images');
const Schema = mongoose.Schema;
const db = mongoose.connection;
// require('mongoose-type-url');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongodb connected!");
});

const ImageSchema = new Schema({
  id: Number,
  author: String,
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
    console.log('images saved')
  }
})

module.exports = Images;
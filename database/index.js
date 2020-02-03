const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASE || 'mongodb://localhost/carousel', { useNewUrlParser: true, useUnifiedTopology: true  });
const Schema = mongoose.Schema;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongodb connected!");
});

const ImageSchema = new Schema({
  id: Number,
  url: String
});

const Images = mongoose.model('Images', ImageSchema);

module.exports = Images;

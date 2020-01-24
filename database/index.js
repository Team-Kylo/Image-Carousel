const mongoose = require('mongoose');
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
  url: String
  // width: Number,
  // height: Number

});

const Images = mongoose.model('Images', ImageSchema);

// const seededImagesArr = [];
// seededImagesArr.push({seededImages});

for (let i = 0; i < 100; i++) {
  let seededImages = new Images({
    id: i,
    url: faker.image.image() // faker.image.imageUrl(width, height) for later fixed sizing
  })
  .save((err, data) => {
    if (err) {
      console.log('images could not be saved', err)
    } else {
      console.log('images saved!', data) // ton of data
    }
  })
}

// seededImages.save((err, data) => {
//   if (err) {
//     console.log('images could not be saved', err)
//   } else {
//     console.log('images saved!', data)
//   }
// })


// http://picsum.photos/v2   <-- picsum api, specify width & height at the end of the requesl URL

module.exports = Images;
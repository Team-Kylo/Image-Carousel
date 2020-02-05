const Images = require('./index.js');
// faker = require('faker');

const seeder = () => {
  for (let i = 0; i < 100; i++) {
    let seededImages = new Images({
      id: i,
      url: `https://picsum.photos/id/${i}/300/300`  // faker images were taking too long to load, switched to picsum
    })
    .save((err, data) => {
      if (err) {
        console.log('images could not be saved', err)
      } else {
        console.log('images saved!', data)
      }
    })
  }
}

seeder();

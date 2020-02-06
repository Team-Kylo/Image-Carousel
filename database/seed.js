const Images = require('./index.js');
const mongoose = require('mongoose');

// const seedHelper = () => {
//   const data = [];

//   for (let i = 0; i < 100; i++) {
//     data.push({
//       id: i,
//       url: `https://picsum.photos/id/${i}/300/300`
//     })
//   }
//   return data;
// };

// const seed = () => {
//   Images.create(seedHelper())
//     .then(() => mongoose.connection.close())
//     .catch(error => console.log('error:', error))
// };

const seed = () => {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 10; j++) {
      let seededImages = new Images({
        id: i,
        url: `https://picsum.photos/id/${i*j+j}/300/300`
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
}

seed();

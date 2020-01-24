const Images = require('./index.js');
faker = require('faker');

for (let i = 0; i < 100; i++) {
  let seededImages = new Images({
    id: i,
    url: faker.image.image() // faker.image.imageUrl(width, height) for later fixed sizing
  })
  .save((err, data) => {
    if (err) {
      console.log('images could not be saved', err)
    } else {
      console.log('images saved!', data)
    }
  })
}



// const seededImagesArr = [];
// seededImagesArr.push({seededImages});

// http://picsum.photos/v2   <-- picsum api, specify width & height at the end of the requesl URL

// const imagesArray = () => {
//   const imagesArr = [];
//   const width;
//   const height;

//   for (let i = 0; i < 100; i++) {
//     photoArr.push(`http://picsum.photos/id/${Math.floor(Math.random() * 100)}/${width}/${height}`);
//   }
//   return imagesArr;
// };


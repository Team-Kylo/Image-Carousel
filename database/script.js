


const photoArray = () => {
  const imagesArr = [];
  const randomId = Math.floor(Math.random()* 100);

  for (let i = 0; i < 100; i++) {
    photoArr.push(`http://picsum.photos/id/${randomId}/2000/2000`);
  }
  return imagesArr;
};


import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentImageIndex: 0
      // images: []
    }
  }



    // setImages(query, index) {
    //   getImages(query, ({data}) => {
    //     let copiedState = [...this.state.images];
    //     copiedState[index] = data;
    //     this.setState({
    //       images: copiedState
    //     })
    //   })
    // }

    // getImages(query, callback) {
    //   axios
    //     .get(`api/carousel/${query}`)
    //     .then(data => callback(data))
    //     .catch(err => console.log('error getting images', err))
    // }

  // getImages(query, callback) {
  //   axios
  //     .get('api/carousel')
  //     .then(({data}) => {     // instead of response, destructure to {data}
  //       // console.log(response);
  //       this.setState({images: data})
  //     })
  //     .catch((err) => console.error('not getting image data', err));
  // }

  render() {
    return (
      <div> react is working !!</div>
    )
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Left from './Left.jsx';
import Right from './Right.jsx';


// const Styling = styled.div`
//   width: 550px;
//   height: 550px;
// `;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      images: []
    }
  }

  componentDidMount() {
    this.getImages()
  }

  getImages() {
    axios
    .get('/carousel')
    .then(res => {
      let images = res.data
                   .map(item => item.url)
                   .sort((a, b) => 0.5 - Math.random())
                   .slice(0,8);
      this.setState({images}, () => {
        console.log(images);
      });
    })
    .catch(err => {
      console.log('error getting images', err);
    })
  }

  leftClick = () => {
    // console.log('left click!');
    let { activeIndex } = this.state;
    if (activeIndex === 0) {
      activeIndex = this.state.images.length;
    }
    activeIndex--;

      this.setState({
        activeIndex
      })
  }

   rightClick = () => {
    // console.log('right click!');
    let { activeIndex } = this.state;
    if (activeIndex === this.state.images.length - 1) {
      activeIndex = -1;
    }
    activeIndex++;

      this.setState({
        activeIndex
      });
   }

   indexClick = (index) => {
     this.setState({
       activeIndex: index
     })
   }

  render() {

    const { activeIndex, images } = this.state;

    return (
      <div className="imageCarousel">
        <div className="Carousel">
          <Left leftClick={this.leftClick}/>
          <img src={images[activeIndex]} alt="carousel-index"/>
          <Right rightClick={this.rightClick}/>
          <div className="Carousel-smaller">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                onClick={this.indexClick.bind(this, index)}
                alt="carousel-thumbnail"
                />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

            {/* {
          //   return (
          //     <div key={index} className="carousel">
          //         <img src={image} alt=""/>
          //     </div>
          //   )
          // })} */}
          {/* {this.state.images.map((image, index) => {
            return (
              <div key={index} className="carousel">
                  <img src={image} alt=""/>
              </div>
            )
          })} */}

export default App;

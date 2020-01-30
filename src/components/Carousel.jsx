import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Left from './Left.jsx';
import Right from './Right.jsx';


// const Styling = styled.div`
//   display: inline-block;
//   width: 550px;
//   height: 550px;
// `;


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      // for testing, faker pics take much too long to load, going to use different image gallery
      imagesContainer: ['https://i.picsum.photos/id/1/200/300.jpg', 'https://i.picsum.photos/id/2/200/300.jpg', 'https://i.picsum.photos/id/3/200/300.jpg']
    }
  }
  //  will uncomment after securing new fake image source
  // componentDidMount() {
  //   axios
  //     .get('/carousel')
  //     .then(res => {
  //       let randomUrlArray = res.data.map((item) => {
  //           return item.url;
  //       }).sort((a, b) => {
  //         return 0.5 - Math.random()
  //       }).slice(0,3);
  //       let imagesContainer = randomUrlArray;
  //       this.setState({imagesContainer}, () => {
  //         console.log(this.state.imagesContainer);
  //         console.log('successful get mount!')
  //       });
  //     })
  //     .catch((err) => {
  //       console.log('error getting images', err);
  //     })
  // }

  leftClick = () => {
    console.log('left click!');

    let index;
    if (this.state.index === 0) {
      index = this.state.imagesContainer.length -1;
    } else {
      index = this.state.index - 1;
    }
      this.setState({
          index: index
      })
  }
   rightClick = () => {
    console.log('right click!');

    let index;
    if (this.state.index === this.state.imagesContainer - 1) {
      index = 0;
    } else {
      index = this.state.index + 1;
    }
      this.setState({
          index: index
      });
   }

  render() {
    return (
      <div className ='imageCarousel'>
      <Left leftClick={this.leftClick}/>
      <Right rightClick={this.rightClick}/>
        <div>
          {this.state.imagesContainer.map((image, index) => {
            return (
              <div key={index} className="carousel">
                  <img src={image} alt=""/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}


export default Carousel;

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Left from './Left.jsx';
import Right from './Right.jsx';

const List = styled.ul`
  list-style: none;
`;

const GridItem = styled.div`
  display: flex
  justify-content: center
  padding: .5rem
`;

const CurrentImageContainer = styled.div`
  vertical-align: middle;
`;

const CurrentImage = styled.img`
  width: 500px;
  height: 500px;
`;

const CarouselContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 250px;
  grid-template rows: 500px;
`;

const ImageMap = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1.0;
  }
`;


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
    const id = document.location.search.slice(1);
    axios
    .get(`/carousel/${id}`)
    .then(res => {
      let images = res.data.map(item => item.url);
      this.setState({images}, () => {
        console.log(images);
      });
    })
    .catch(err => {
      console.log('error getting images', err);
    })
  }

  // getImages() {
  //   let id = Math.floor(Math.random() * 100);
  //   fetch(`/carousel/${id}`)
  //   .then(response => response.json())
  //   .then(images =>
  //     this.setState({
  //       images: images
  //     })
  //   )
  //   .catch(err => console.log('error getting images', err));
  // }

  leftClick = () => {

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
        <CarouselContainer>
        <GridItem>
        <List>
            {images.map((image, index) => (
              <li key={image}>
              <ImageMap
                src={image}
                onClick={this.indexClick.bind(this, index)}
                alt="carousel-thumbnail"
               />
              </li>
            ))}
          </List>

          </GridItem>
          <CurrentImageContainer>
          <Left leftClick={this.leftClick}/> <Right rightClick={this.rightClick}/>
          <CurrentImage src={images[activeIndex]} alt="carousel-index"/>
          </CurrentImageContainer>
        </CarouselContainer>
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

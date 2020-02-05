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

const CurrentImage = styled.div`
  vertical-align: middle;
`;

const CarouselContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 250px;
  grid-template rows: 500px;
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
              <img
                src={image}
                onClick={this.indexClick.bind(this, index)}
                height="100"
                width="100"
                alt="carousel-thumbnail"
               />
              </li>
            ))}
          </List>

          </GridItem>

          <CurrentImage>
          <Left leftClick={this.leftClick}/>
          <img src={images[activeIndex]} height="500" width="500" alt="carousel-index"/>
          <Right rightClick={this.rightClick}/>
          </CurrentImage>

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

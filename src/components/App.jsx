import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Left from './Left.jsx';
import Right from './Right.jsx';
import CurrentPhoto from './CurrentPhoto.jsx';
import List from './List.jsx';


const CarouselContainer = styled.div`
  display: flex;
`;

const CurrentImageContainer = styled.div`
  display: grid;
  grid-template-columns: [col-one] 1% [col-two] 90% [col-three] 9%;
  grid-template-rows: [row-one] 40% [row-two] 30% [row-three] 30%;
  justify-content: start;
`;

const ArrowLeftGrid = styled.div`
  grid-column-start: col-one;
  grid-row-start: row-two;
`;

const CurrentImageGrid = styled.div`
  grid-column-start: col-two;
  grid-row-start: row-one;
`;

const ArrowRightGrid = styled.div`
  grid-column-start: col-three;
  grid-row-start: row-two;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      images: [],
      zoomed: false
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

  leftClick = () => {
    let { activeIndex } = this.state;
    if (activeIndex === 0) {
      activeIndex = this.state.images.length;
    }
    activeIndex--;

    this.setState({activeIndex});
  }

  rightClick = () => {
     let { activeIndex } = this.state;
     if (activeIndex === this.state.images.length - 1) {
       activeIndex = -1;
     }
     activeIndex++;

     this.setState({activeIndex});
  }

  indexClick = (index) => {
     this.setState({
       activeIndex: index,
     })
   }

  zoomPhoto = () => {
    this.setState({
      zoomed: !this.state.zoomed
    })
  }

  render() {

    const { activeIndex, images, zoomed } = this.state;

    return (
      <CarouselContainer>
        <List images={images} indexClick={this.indexClick}/>
        <CurrentImageContainer>
          <ArrowLeftGrid>
            <Left leftClick={this.leftClick}/>
          </ArrowLeftGrid>
          <CurrentImageGrid>
            <CurrentPhoto zoom={this.zoomPhoto} zoomed={zoomed} images={images} index={activeIndex}/>
          </CurrentImageGrid>
          <ArrowRightGrid>
            <Right rightClick={this.rightClick}/>
          </ArrowRightGrid>
        </CurrentImageContainer>
      </CarouselContainer>
    )
  }
}

export default App;

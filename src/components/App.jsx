import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Left from './Left.jsx';
import Right from './Right.jsx';
import CurrentPhoto from './CurrentPhoto.jsx';
// import './style.css';

const List = styled.ul`
  list-style: none;
`;

const ListDiv = styled.div`
  display: flex
  justify-content: center
  padding: .5rem
`;

const CurrentImageContainer = styled.div`
  vertical-align: middle;
`;

// const CurrentImage = styled.img`
//   width: 550px;
//   height: 550px;
//   &:hover {
//     cursor: zoom-in;
//   }
// `;

const CarouselContainer = styled.div`
  display: flex;
  grid-template-columns: 200px 250px;
  grid-template rows: 500px;
`;

const ImageMap = styled.img`
  width: 60px;
  height: 60px;
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
      images: [],
      // fade: false
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
       activeIndex: index,
      //  fade: true
     })
   }

  render() {

    const { activeIndex, images, fade } = this.state;

    return (
      <div className="imageCarousel">
        <CarouselContainer>
        <ListDiv>
        <List>
            {images.map((image, index) => (
              <li key={image}>
              <ImageMap
                src={image}
                onClick={this.indexClick.bind(this, index)}
                // onAnimationEnd={() => this.setState({fade: false})}
                // className={fade ? 'fade' : ''}
                // alt="carousel-thumbnail"
               />
              </li>
            ))}
          </List>

          </ListDiv>
          <CurrentImageContainer>
          <Left leftClick={this.leftClick}/>
          <CurrentPhoto photo={images} index={activeIndex} />
          <Right rightClick={this.rightClick}/>
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

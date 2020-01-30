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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      images: []
    }
  }

  componentDidMount() {
    axios
      .get('/carousel')
      .then(res => {
        let randomUrlArray = res.data.map((item) => {
            return item.url;
        }).sort((a, b) => {
          return 0.5 - Math.random()
        }).slice(0,3);
        let images = randomUrlArray;
        this.setState({images}, () => {
          console.log(this.state.images);
          console.log('successful get mount!')
        });
      })
      .catch((err) => {
        console.log('error getting images', err);
      })
  }

  leftClick = () => {
    console.log('left click!');

    let index;
    if (this.state.index === 0) {
      index = this.state.images.length -1;
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
    if (this.state.index === this.state.images.length - 1) {
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

        <img src={this.state.images[this.state.index]}/>

          {/* {this.state.images.map((image, index) => {
            return (
              <div key={index} className="carousel">
                  <img src={image} alt=""/>
              </div>
            )
          })} */}
        </div>
      </div>
    )
  }
}


export default App;

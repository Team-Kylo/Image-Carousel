import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import leftarrow from './leftA.png';
import rightarrow from './rightA.png';
// import Left from './Left.jsx';
// import Right from './Right.jsx';


const ArrowLeft = styled.img`
  width: 25px;
  height: 25px;
  left: 115px;
  top: 269px;
  position: absolute;
  &:hover {
    transform: scale(1.2, 1.2);
    cursor: pointer;
  }
`;

const ArrowRight = styled.img`
width: 25px;
height: 25px;
top: 250px;
padding: 10px;
position: absolute;
&:hover {
  transform: scale(1.2, 1.2);
  cursor: pointer;
}
`;

const CurrentImage = styled.img`
  width: 500px;
  height: 500px;
  transition: 1s;
  &:hover {
    cursor: zoom-in;
  }
`;

const Modal = styled.div`
  position: static;
  left: 8%;
  top: 2.0%;
`;

const Enlarge = styled.img`
  width: 750px;
`;

const Margins = styled.div`
  padding: 40px;
`;

class CurrentPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomed: false
    }
  }

  zoomPhoto = () => {
    this.setState({
      zoomed: !this.state.zoomed
    });
  };

  render() {

    const { photo, index, leftClick, rightClick } = this.props;

    return (
      <Margins>
        <ArrowLeft src={leftarrow} onClick={leftClick}/>
        <CurrentImage
          src={photo[index]}
          onClick={this.zoomPhoto}
          alt="no image"
        />
        {this.state.zoomed && (
          <Modal
            style={{ position: 'absolute' }}
            onClick={this.zoomPhoto}
          >
            <Enlarge
              src={photo[index]}
              onClick={this.zoomPhoto}
              alt="no image"
            />
          </Modal>
        )}
        <ArrowRight src={rightarrow} onClick={rightClick}/>
      </Margins>
    );
  }
}

export default CurrentPhoto;


// .dialog {
//   box-shadow: 0 8px 6px -6px black;
//   position: static;
//   left: 20%;
//   top: 10%;
// }

// .image {
//   width: 300px;
// }

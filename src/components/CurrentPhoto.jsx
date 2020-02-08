import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const CurrentImage = styled.img`
  width: 500px;
  height: 500px;
  transition: 1s;
  &:hover {
    cursor: zoom-in;
  }
`;

const Modal = styled.div`
  position: fixed;
  transform: translate(0,0);
  width: auto;
  height: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 999;
  padding: 20px;
`;

// max-height: calc(100vh - 210px);
// overflow-y: auto;

const Enlarge = styled.img`
  width: auto;
  height: 100%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: #ffffff;
  border-radius: 15px;
  padding: 15px;
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

    const { photo, index } = this.props;

    return (
      <Margins>
        <CurrentImage
          src={photo[index]}
          onClick={this.zoomPhoto}
          alt="no image"
        />
        {this.state.zoomed && (
          <Modal
            // style={{ position: 'fixed' }}
            onClick={this.zoomPhoto}
          >
            <Enlarge
              src={photo[index]}
              onClick={this.zoomPhoto}
              alt="no image"
            />
          </Modal>
        )}
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
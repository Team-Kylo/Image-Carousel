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
  background: rgba(0, 0, 0, 0.5);
`;

const Enlarge = styled.img`
  width: auto;
  height: 100%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Margins = styled.div`
  padding: 40px;
`;

const CurrentPhoto = ({photo, index, zoom, zoomed}) => {

  return (
    <Margins>
      <CurrentImage
        src={photo[index]}
        onClick={zoom}
        alt="no image"
      />
      {zoomed && (
        <Modal onClick={zoom}>
          <Enlarge
            src={photo[index]}
            onClick={zoom}
            alt="no image"
          />
        </Modal>
      )}
    </Margins>
  );
}

export default CurrentPhoto;
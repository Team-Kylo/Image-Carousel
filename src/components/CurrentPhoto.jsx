import React from 'react';
import styled from 'styled-components';

const Margins = styled.div`
  padding: 40px;
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
  position: fixed;
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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 100%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const CurrentPhoto = ({images, index, zoom, zoomed}) => {

  return (
    <Margins>
      <CurrentImage
        src={images[index]}
        onClick={zoom}
        alt="no image"
      />
      {zoomed && (
        <Modal onClick={zoom}>
          <Enlarge
            src={images[index]}
            onClick={zoom}
            alt="no image"
          />
        </Modal>
      )}
    </Margins>
  );
}

export default CurrentPhoto;
import React from 'react';
import styled from 'styled-components';
import leftarrow from './leftA.png';

const ArrowLeft = styled.img`
  width: 25px;
  height: 25px;
  left: 115px;
  top: 250px;
  position: absolute;
  &:hover {
    transform: scale(1.2, 1.2);
    cursor: pointer;
  }
`;

const Left = () => {
  return (
      <ArrowLeft src={leftarrow}></ArrowLeft>
  );
}

export default Left;
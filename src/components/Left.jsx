import React from 'react';
import styled from 'styled-components';
import leftarrow from './leftA.png';

const ArrowLeft = styled.img`
  width: 25px;
  height: 25px;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const Left = (props) => {
  return (
      <ArrowLeft src={leftarrow} onClick={props.leftClick}></ArrowLeft>
  );
}

export default Left;
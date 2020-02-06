import React from 'react';
import styled from 'styled-components';
import rightarrow from './rightA.png';

const ArrowRight = styled.img`
width: 25px;
height: 25px;
`;

const Right = (props) => {
  return (
      <ArrowRight src={rightarrow} onClick={props.rightClick}></ArrowRight>
  );
}

export default Right;
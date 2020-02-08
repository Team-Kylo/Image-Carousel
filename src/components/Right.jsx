import React from 'react';
import styled from 'styled-components';

const ArrowDiv = styled.div`
  width: 24px;
  height: 24px;
  left: 660px;
  top: 250px;
  position: static;
  &:hover {
  transform: scale(1.2, 1.2);
  cursor: pointer;
}
`;


const Right = (props) => {
  return (
    <ArrowDiv onClick={props.rightClick}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z"></path></svg> </ArrowDiv>
  );
}

export default Right;
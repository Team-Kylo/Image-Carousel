import React from 'react';
import styled from 'styled-components';

const ArrowRight = styled.i`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  height: 5px;
  width: 5px;
`;

const Right = (props) => {
  return (
      <ArrowRight onClick={props.rightClick}></ArrowRight>
  );
}

export default Right;
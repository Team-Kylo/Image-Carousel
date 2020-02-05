import React from 'react';
import styled from 'styled-components';

const ArrowLeft = styled.i`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  border: solid black;
  border-width: 0 3px 3px 0;
  padding: 3px;
  height: 5px;
  width: 5px;
`;

const Left = (props) => {
  return (
      <ArrowLeft onClick={props.leftClick}></ArrowLeft>
  );
}

export default Left;
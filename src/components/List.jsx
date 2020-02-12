import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
`;

const ListItems = styled.ul`
  list-style: none;
`;

const ImageMap = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1.0;
  }
`;

const List = ({images, indexClick}) => {

  return (
    <ListContainer>
      <ListItems>
        {images.map((image, index) => (
          <li key={image}>
            <ImageMap
              src={image}
              onClick={indexClick.bind(this, index)}
              alt="no image"
          />
          </li>
        ))}
      </ListItems>
    </ListContainer>
  );
}

export default List;
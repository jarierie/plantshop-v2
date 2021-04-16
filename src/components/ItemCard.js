import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 280px;
  height: 380px;
  transition: 0.6s;

  :hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  text-align: center;
`;

const ItemName = styled.h3`
  font-size: 14px;
  margin-bottom: 0;
`;

const Price = styled.p`
  font-size: 12px;
`;

const ItemCard = (props) => {
  return (
    <>
      <Container>
        <ImageContainer>
          <img src={props.img} alt=''></img>
        </ImageContainer>
        <InfoContainer>
          <ItemName>{props.name}</ItemName>
          <Price>{props.price}</Price>
        </InfoContainer>
      </Container>
    </>
  );
};

export default ItemCard;

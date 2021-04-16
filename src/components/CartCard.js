import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-around;
  background-color: yellow;
  img {
    width: 200px;
  }
`;

const CartCard = (props) => {
  return (
    <>
      {" "}
      <Container>
        <img src={props.imageUrl}></img>
        <h1>{props.name}</h1>
        <p>{props.price}</p>
      </Container>{" "}
    </>
  );
};

export default CartCard;

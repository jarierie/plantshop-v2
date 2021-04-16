import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 1000px;
  display: flex;
`;


const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const cartLength = cartItems.length;
  return (
    <>
      <Container>{cartLength}</Container>
    </>
  );
};

export default Cart;

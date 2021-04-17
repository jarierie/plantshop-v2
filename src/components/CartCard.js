import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  max-height: 100px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
  img {
    max-width: 100px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartCard = (props) => {
  return (
    <>
      {" "}
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={props.imageUrl}></img>
        <Info>
          <h1>{props.name}</h1>
          <p>{props.price}</p>
        </Info>
      </Container>{" "}
    </>
  );
};

export default CartCard;

import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const CartContainer = styled(motion.div)`
  position: fixed;
  /* display: ${(props) => (props.state ? `visible` : `none`)}; */
  /* right: 0; */
  min-width: 300px;
  min-height: 400px;
  width: 500px;
  height: auto;
  background-color: #0d0d0d;

  /* animation: slide 1s alternate; */

  /* @keyframes slide {
    0% {
      right: -30%;
    }
    100% {
      right: 0;
    }
  } */
`;

const Card = styled.div`
  margin: auto;
  margin-top: 25px;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  h1 {
    color: white;
  }
`;

const CartPop = (props) => {
  const cartItems = useSelector((state) => state.cartItems);
  useEffect(() => {
    console.log(cartItems);
  });
  return (
    <>
      <CartContainer
        initial={{
          right: props.state ? 0 : -500,
        }}
        animate={{ right: props.state ? -500 : 0 }}
        state={props.state}
      >
        <Card>
          {cartItems != 0 ? (
            cartItems.map((item) => {
              return (
                <>
                  <CartCard
                    imageUrl={item.imageUrl}
                    price={item.price}
                    name={item.name}
                  ></CartCard>
                </>
              );
            })
          ) : (
            <h1>Hello</h1>
          )}
        </Card>
      </CartContainer>{" "}
    </>
  );
};

export default CartPop;

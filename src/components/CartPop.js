import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const CartContainer = styled(motion.div)`
  position: fixed;

  min-width: 300px;
  min-height: 400px;
  width: 500px;
  height: 50vh;

  overflow-y: auto;
  h1 {
    margin: auto;
    font-size: 24px;
  }
`;

const Card = styled.div`
  margin: auto;
  margin-top: 25px;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartPop = () => {
  const cartItems = useSelector((state) => state.cartItems);
  useEffect(() => {
    console.log(cartItems);
  });
  const getTotal = (item) => {
    let total = 0;

    var i;
    for (i = 0; i < item.length; i++) {
      total += parseFloat(item[i].price);
    }
    return total;
  };

  const totalPrice = getTotal(cartItems);

  return (
    <>
      <CartContainer initial={{ right: -500 }} animate={{ right: 0 }}>
        <h1>Items on your cart:</h1>
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
          {cartItems != 0 ? <h1>Total: {totalPrice}</h1> : null}
        </Card>
      </CartContainer>{" "}
    </>
  );
};

export default CartPop;

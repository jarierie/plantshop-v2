import React from "react";
import styled from "styled-components";
import ItemCard from "../components/ItemCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 90%;
  width: 1200px;
  height: auto;
  margin: auto;
  a {
    text-decoration: none;
    color: #0d0d0d;
  }
`;

const ShopContainer = () => {
  const items = useSelector((state) => state.initialItems);
  console.log(items);
  return (
    <>
      <Container>
        {items.map((item) => {
          return (
            <Link key={item.id} to={`/shop/${item.name}`}>
              <ItemCard
                name={item.name}
                price={item.price}
                img={item.imageUrl}
              ></ItemCard>
            </Link>
          );
        })}
      </Container>
    </>
  );
};

export default ShopContainer;

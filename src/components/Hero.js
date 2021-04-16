import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1500px;
  height: 800px;
  max-width: 90%;
  margin: auto;
  margin-top: 20px;
  background: url(${hero});
  background-size: cover;
  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const HeroButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 16px;
`;

const Hero = () => {
  return (
    <>
      {" "}
      <HeroContainer>
        <Link to='/shop'>
          <HeroButton>Shop Now</HeroButton>
        </Link>
      </HeroContainer>
    </>
  );
};

export default Hero;

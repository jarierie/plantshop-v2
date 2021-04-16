import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = styled.div`
  max-width: 100%;
  width: 100vw;
  height: 20px;
  background-color: green;
  color: white;
  text-align: center;
`;

const NavContainer = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: black;
  }
`;

const NavLogo = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  justify-content: center;
  p {
    margin: auto 0;
    font-size: 20px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 100%;
  align-items: center;
`;

const Nav = () => {
  return (
    <>
      {" "}
      <Head>
        {" "}
        <span>PLEASE EXPECT DELIVERY DELAYS DUE TO ECQ.</span>
      </Head>
      <NavContainer>
        <Link to='/'>
          <NavLogo>
            <p>Nice Plants huh</p>
          </NavLogo>
        </Link>
        <NavMenu>
          <Link to='/shop'>Shop</Link>
          <Link to='/cart'>Cart</Link>
        </NavMenu>
      </NavContainer>
    </>
  );
};

export default Nav;

import React from "react";
import styled from "styled-components";
import ShopifyLogo from "../images/shopify-logo.png";

//react router
import { Link } from "react-router-dom";

const StyledNavBar = styled.div`
  & {
    height: 22vh;
    margin-top: 0.5%;
  }

  nav {
    height: 50%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }

  nav > * {
    width: 26%;
  }

  // image, title

  img {
    width: 20%;
  }

  .title {
    display: flex;
    color: white;
    font-size: 6rem;
  }

  .title > * {
    margin: 1%;
  }

  .h1 {
    display: flex;
    flex-direction: column-reverse;
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    color: white;
  }

  // react router links

  .link--style {
    font-size: 3.5rem;
    color: #505257;
    margin: 2%;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <nav>
        <div className="title">
          <img src={ShopifyLogo} />

          <div className="h1">
            <h1>theshoppies.</h1>
          </div>
        </div>
        <div className="links">
          <Link className="link--style" to="/">
            Search
          </Link>
          <Link className="link--style" to="/mylist">
            My List
          </Link>
        </div>
        <div></div>
      </nav>
    </StyledNavBar>
  );
};

export default NavBar;

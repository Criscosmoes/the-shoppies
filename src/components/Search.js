import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

const StyledSearch = styled.div`
  & {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 49%;
    position: relative;
  }

  &:after {
    content: "";
    background: #505257;
    position: absolute;
    top: 0;
    right: 0;
    height: 40%;
    width: 1px;
  }

  .title {
    text-align: center;
    color: white;
  }

  h1 {
    font-size: 11rem;
    letter-spacing: 1.6px;
  }

  h2 {
    font-size: 3.4rem;
    color: #505257;
  }

  // form

  form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 35%;
  }
  .placeholder {
    height: 5%;
  }

  input {
    width: 60%;
    padding: 1%;
    border-radius: 10px;
    outline: none;
    font-family: "Ramaraja", serif;
    font-size: 2.8rem;
    border: 4px solid #505257;
  }

  button {
    width: 40%;
    border-radius: 10px;
    font-family: "Ramaraja", serif;
    font-size: 3rem;
    background: #95bf46;
    border: none;
    color: white;
    padding: 1%;
  }
`;

const Search = ({ userInput }) => {
  return (
    <StyledSearch>
      <div className="title">
        <h1>
          Nominate<br></br> amazing films.
        </h1>
        <h2>Search 5 of your favorite all time movies.</h2>
      </div>
      <form>
        <input type="text" placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>
      <div className="placeholder"></div>
    </StyledSearch>
  );
};

const mapStateToProps = (state) => {
  return {
    userInput: state.userInput,
  };
};

export default connect(mapStateToProps, {})(Search);

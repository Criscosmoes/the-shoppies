import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import MediaQuery from "react-responsive";
// helper funcs

import { onInputChange, fetchMovies, resetInput } from "../actions";

const StyledSearch = styled.div`
  & {
    position: relative;
  }

  &:after {
    content: "";
    background: transparent;
    position: absolute;
    top: 0;
    right: 0;
    height: 50%;
    width: 1px;
  }

  .title {
    text-align: center;
    color: white;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
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
    font-family: "Orelega One", cursive;
    font-size: 2.8rem;
    border: 4px solid #505257;
  }

  button {
    width: 40%;
    border-radius: 10px;
    font-family: "Orelega One", cursive;
    font-size: 3rem;
    background: #95bf46;
    cursor: pointer;
    border: none;
    color: white;
    padding: 1%;
  }

  // media queries

  @media (max-width: 450px) {
    &:after {
      content: "";
      background: transparent;
      position: absolute;
      top: 0;
      right: 0;
      height: 50%;
      width: 1px;
    }

    .title > * {
      margin: 3% 1%;
    }

    h1 {
      font-size: 6rem;
    }

    h2 {
      font-size: 3rem;
    }

    input {
      width: 85%;
    }

    button {
      width: 60%;
    }

    form > * {
      margin: 4%;
    }
  }
`;

const Search = ({ userInput, onInputChange, fetchMovies, resetInput }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    fetchMovies(userInput);
    resetInput();
  };

  return (
    <StyledSearch>
      <MediaQuery maxWidth={450}>
        <div className="title">
          <h1>
            Nominate<br></br> amazing films.
          </h1>
          <h2>Search 5 of your favorite all time movies.</h2>
        </div>
        <form onSubmit={onFormSubmit}>
          <input
            onChange={onInputChange}
            value={userInput}
            type="text"
            placeholder="Search movies..."
          />
          <button type="submit">Search</button>
        </form>
        <div className="placeholder"></div>
      </MediaQuery>
      <MediaQuery minWidth={1000}>
        <div className="title">
          <h1>
            Nominate<br></br> amazing films.
          </h1>
          <h2>Search 5 of your favorite all time movies.</h2>
        </div>
        <form onSubmit={onFormSubmit}>
          <input
            onChange={onInputChange}
            value={userInput}
            type="text"
            placeholder="Search movies..."
          />
          <button type="submit">Search</button>
        </form>
        <div className="placeholder"></div>
      </MediaQuery>
    </StyledSearch>
  );
};

const mapStateToProps = (state) => {
  return {
    userInput: state.userInput,
  };
};

export default connect(mapStateToProps, {
  onInputChange,
  fetchMovies,
  resetInput,
})(Search);

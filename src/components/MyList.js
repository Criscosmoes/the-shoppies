import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../_myList.scss";

import { removeMovie, changeButtonText } from "../actions";

/* const StyledList = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > * {
    margin: 1%;
  }

  .main--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .main--container > * {
    margin: 1% 0%;
  }

  h1 {
    text-align: center;
    font-size: 9rem;
    color: white;
  }

  .movie {
    margin: 2%;
    text-align: center;
    width: 35%;
    min-height: 190px;
    max-height: 190px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    border: 3px solid white;
    align-items: center;
    background: #202020;
    font-size: 2.4rem;
  }

  .placeholder {
    width: 25%;
  }

  // each movie

  img {
    width: 28%;
  }

  .information {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 30%;
    height: 150px;
    color: white;
  }

  button {
    border-radius: 10px;
    padding: 3%;
    color: white;
    background: red;
    width: 80%;
    font-family: "Orelega One", cursive;
    font-size: 1.7rem;
    cursor: pointer;
    border: none;
    transition: 0.2s ease-out;
  }

  .nomiations {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .error {
    font-size: 8rem;
    color: white;
    text-align: center;
  }

  span {
    color: white;
    font-size: 4rem;
  }

  .link {
    color: white;
    text-decoration: underline;
    transition: 0.2s ease-out;
  }

  .link:hover {
    color: #95bf46;
    transition: 0.2s ease-in;
  }
`; */

const MyList = ({ nominationList, removeMovie, changeButtonText }) => {
  const onRemoveClick = (movie) => {
    removeMovie(movie);
    changeButtonText(movie);
  };

  const renderedNominations = nominationList.map((cur) => {
    return (
      <li className="movie">
        <img src={cur.Poster} />
        <div className="information">
          <h2>{cur.Title}</h2>
          <h3>Release: {cur.Year}</h3>
          <button onClick={() => onRemoveClick(cur)}>Remove</button>
        </div>
        <div className="placeholder"></div>
      </li>
    );
  });

  return (
    <div className="big--container">
      {renderedNominations.length >= 1 ? (
        <div className="main--container">
          <h1>Nominations.</h1>

          <ul className="nomiations">{renderedNominations}</ul>
        </div>
      ) : (
        <div className="error">
          No nomiations. <br></br>{" "}
          <span>
            Please add films by searching{" "}
            <Link className="link" to="/">
              Here
            </Link>
          </span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    nominationList: state.nominationList,
  };
};

export default connect(mapStateToProps, { removeMovie, changeButtonText })(
  MyList
);

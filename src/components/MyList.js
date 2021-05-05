import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../_myList.scss";

import { removeMovie, changeButtonText } from "../actions";

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
        {/* <div className="placeholder"></div> */}
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

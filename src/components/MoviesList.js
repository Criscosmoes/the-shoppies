import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ShopifyLogo from "../images/shopify-logo.png";

// helper functions
import {
  fetchMovies,
  addMovie,
  removeMovie,
  changeButtonText,
} from "../actions";

// components
import LoadingMovie from "./LoadingMovie";

const StyledMoviesList = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 48%;
  }

  .movie--list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin: 1%;
  }

  .movie {
    margin: 3%;
    text-align: center;
    min-width: 80%;
    max-width: 80%;
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

  ul::-webkit-scrollbar {
    width: 2rem;
  }

  ul::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: white;
  }

  // each movie

  img {
    min-width: 25%;
    max-width: 25%;
  }

  .information {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 25%;
    height: 150px;
    color: white;
  }

  .placeholder {
    width: 30%;
  }

  button {
    border-radius: 10px;
    padding: 3%;
    color: white;
    background: #95bf46;
    width: 80%;
    font-family: "Orelega One", cursive;
    font-size: 1.7rem;
    cursor: pointer;
    border: none;
    transition: 0.2s ease-out;
  }

  .remove {
    background: red;
    transition: 0.2s ease-in;
  }

  .hidden {
    display: none;
  }

  .backdrop {
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(4px);
  }

  // notification

  .centered {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    width: 40%;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #1f202b;
    color: white;
    border: 3px solid white;
    text-align: center;
    border-radius: 10px;
    z-index: 0;
  }

  .centered > * {
    margin: 3%;
  }

  .congrats {
    font-size: 7rem;
  }

  p {
    font-size: 3rem;
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

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 5rem;
  }
  .logo {
    min-width: 12%;
    max-width: 12%;
  }
`;

const MoviesList = ({
  movieList,
  isLoading,
  addMovie,
  removeMovie,
  changeButtonText,
  nominationList,
}) => {
  const [loadingMovies, setLoadingMovies] = useState([1, 2, 3]);
  const [isFull, setIsFull] = useState(false);

  const onButtonClick = (movie) => {
    if (nominationList.length === 5) {
      setIsFull(true);
      return;
    }

    if (movie.Type) {
      // someone wants to add a movie
      addMovie(movie);
    } else {
      removeMovie(movie);
    }

    // change the button text/style if someone has tried to remove/add a movie
    changeButtonText(movie);

    if (nominationList.length >= 4) {
      setIsFull(true);
      console.log("full");
      return;
    }

    // set is full to false, if it makes it down here
    setIsFull(false);
  };

  const filteredMovies = movieList.filter((cur) => cur.Poster !== "N/A");

  if (filteredMovies.length > 1) {
    filteredMovies.forEach((cur) => (cur.completed = false));
  }

  const renderedMovies = filteredMovies.map((cur) => {
    return (
      <li className="movie">
        <img src={cur.Poster} />
        <div className="information">
          <h2>{cur.Title}</h2>
          <h3>Release: {cur.Year}</h3>
          <button
            className={`${cur.Type ? "" : "remove"}`}
            onClick={() => onButtonClick(cur)}
          >
            {cur.Type ? "Nominate" : "Remove"}
          </button>
        </div>
        <div className="placeholder"></div>
      </li>
    );
  });

  const renderedLoading = loadingMovies.map((cur) => {
    return <LoadingMovie />;
  });

  return (
    <StyledMoviesList>
      <ul animation={"grow"} className={`movie--list ${isFull ? "blur" : ""}`}>
        {isLoading ? renderedLoading : renderedMovies}
      </ul>
      <div className={`hidden ${isFull ? "backdrop" : ""}`}></div>
      <div className={`hidden ${isFull ? "centered" : ""}`}>
        <div className="title">
          <img className="logo" src={ShopifyLogo} />

          <div className="h1">
            <h1>theshoppies.</h1>
          </div>
        </div>
        <h2 className="congrats">Congratulations!</h2>
        <p>
          Your list is now full. To make any necessary edits, please visit{" "}
          <Link className="link" to="/mylist">
            my list
          </Link>
        </p>
      </div>
    </StyledMoviesList>
  );
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
    isLoading: state.isLoading,
    nominationList: state.nominationList,
  };
};

export default connect(mapStateToProps, {
  fetchMovies,
  addMovie,
  removeMovie,
  changeButtonText,
})(MoviesList);

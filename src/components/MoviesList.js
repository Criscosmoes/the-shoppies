import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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
`;

const MoviesList = ({
  movieList,
  fetchMovies,
  isLoading,
  addMovie,
  removeMovie,
  changeButtonText,
}) => {
  const [loadingMovies, setLoadingMovies] = useState([1, 2, 3]);
  const [isClicked, setIsClicked] = useState(false);

  const onButtonClick = (movie) => {
    if (movie.Type) {
      // someone wants to add a movie
      addMovie(movie);
    } else {
      removeMovie(movie);
    }

    changeButtonText(movie);
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
      <ul className="movie--list">
        {isLoading ? renderedLoading : renderedMovies}
      </ul>
    </StyledMoviesList>
  );
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {
  fetchMovies,
  addMovie,
  removeMovie,
  changeButtonText,
})(MoviesList);

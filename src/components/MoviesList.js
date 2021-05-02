import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// helper functions
import { fetchMovies } from "../actions";

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
    cursor: pointer;
    min-width: 80%;
    max-width: 80%;
    min-height: 190px;
    max-height: 190px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #303030;
    font-size: 2rem;
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
    padding: 2%;
    color: white;
    background: #95bf46;
    width: 80%;
    font-family: "Orelega One", cursive;
    font-size: 1.7rem;
    cursor: pointer;
    border: none;
  }
`;

const MoviesList = ({ movieList, fetchMovies, isLoading }) => {
  const [loadingMovies, setLoadingMovies] = useState([1, 2, 3]);

  const filteredMovies = movieList.filter((cur) => cur.Poster !== "N/A");

  const renderedMovies = filteredMovies.map((cur) => {
    return (
      <li className="movie">
        <img src={cur.Poster} />
        <div className="information">
          <h2>{cur.Title}</h2>
          <h3>{cur.Year}</h3>
          <button>Nominate</button>
        </div>
        <div className="placeholder"></div>
      </li>
    );
  });

  const renderedLoading = loadingMovies.map((cur) => {
    return <LoadingMovie />;
  });

  useEffect(async () => {
    fetchMovies("avengers");
  }, []);

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

export default connect(mapStateToProps, { fetchMovies })(MoviesList);

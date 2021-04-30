import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

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
    margin: 0.5%;
  }

  .movie {
    margin: 3%;
    text-align: center;
    cursor: pointer;
    min-width: 80%;
    max-width: 80%;
    min-height: 200px;
    border-radius: 10px;
    background: gray;
  }

  ul::-webkit-scrollbar {
    width: 2rem;
  }

  ul::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: white;
  }
`;

const MoviesList = ({ movieList, fetchMovies }) => {
  const [loadingMovies, setLoadingMovies] = useState([1, 2, 3]);

  const renderedMovies = movieList.map((cur) => {
    return <li className="movie"></li>;
  });

  const renderedLoading = loadingMovies.map((cur) => {
    return <LoadingMovie />;
  });

  useEffect(async () => {
    /* fetchMovies(); */
  }, []);

  return (
    <StyledMoviesList>
      <ul className="movie--list">{renderedMovies}</ul>
    </StyledMoviesList>
  );
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
  };
};

export default connect(mapStateToProps, { fetchMovies })(MoviesList);

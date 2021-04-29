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
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 48%;
    height: 100%;
    overflow-y: auto;
    margin: 0.5%;
  }

  .movie {
    margin: 3%;
    text-align: center;
    cursor: pointer;
    border: 4px solid white;
    -moz-box-shadow: 10px 10px 50px black;
    -webkit-box-shadow: 10px 10px 50px black;
    box-shadow: 10px 10px 50px black;
    min-width: 80%;
    max-width: 80%;
    min-height: 200px;
    border-radius: 10px;
  }
`;

const MoviesList = () => {
  const [movieList, setMovieList] = useState([1, 2, 3]);
  const [loadingMovies, setLoadingMovies] = useState([1, 2, 3]);

  const renderedMovies = movieList.map((cur) => {
    return <div className="movie"></div>;
  });

  const renderedLoading = loadingMovies.map((cur) => {
    return <LoadingMovie />;
  });

  useEffect(async () => {
    async function fetchMoviesList() {
      try {
        const response = await axios.get(
          "http://www.omdbapi.com/?s=avengers&apikey=10532f9"
        );

        setMovieList(response.data.Search);

        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
    /* fetchMoviesList(); */
  }, []);

  return <StyledMoviesList>{renderedMovies}</StyledMoviesList>;
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
  };
};

export default connect(mapStateToProps, { fetchMovies })(MoviesList);

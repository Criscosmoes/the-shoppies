import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

// helper functions
import { fetchMovies } from "../actions";

// components
import LoadingMovie from "./LoadingMovie";

const StyledMoviesList = styled.div`
  & {
    width: 49%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
  }
`;

const MoviesList = (movieList) => {
  useEffect(async () => {
    async function fetchMoviesList() {
      try {
        const response = await axios.get(
          "http://www.omdbapi.com/?i=tt0848228&apikey=10532f9"
        );

        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }

    fetchMoviesList();
  }, []);

  return <StyledMoviesList></StyledMoviesList>;
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
  };
};

export default connect(mapStateToProps, { fetchMovies })(MoviesList);

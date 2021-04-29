import React from "react";
import styled from "styled-components";

const StyledMoviesList = styled.div`
  & {
    width: 49%;
  }
`;

const MoviesList = () => {
  return <StyledMoviesList></StyledMoviesList>;
};

export default MoviesList;

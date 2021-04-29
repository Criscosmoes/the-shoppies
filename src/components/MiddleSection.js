import React from "react";
import styled from "styled-components";

// components
import Search from "./Search";
import MoviesList from "./MoviesList";

const StyledMiddleSection = styled.div`
  & {
    height: 90vh;
    display: flex;
    justify-content: center;
  }
`;

const MiddleSection = () => {
  return (
    <StyledMiddleSection>
      <Search />
      <MoviesList />
    </StyledMiddleSection>
  );
};

export default MiddleSection;

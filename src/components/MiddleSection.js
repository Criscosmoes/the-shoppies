import React from "react";
import styled from "styled-components";

// components
import Search from "./Search";
import MoviesList from "./MoviesList";

const StyledMiddleSection = styled.div`
  & {
    height: 700px;
    display: flex;
    justify-content: center;
  }

  div::-webkit-scrollbar {
    width: 2rem;
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: white;
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

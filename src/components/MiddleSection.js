import React from "react";
import styled from "styled-components";

import MediaQuery from "react-responsive";

// components
import Search from "./Search";
import MoviesList from "./MoviesList";

const StyledMiddleSection = styled.div`
  .desktop {
    height: 700px;
    display: flex;
    justify-content: space-evenly;
  }

  .phone {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const MiddleSection = () => {
  return (
    <StyledMiddleSection>
      <MediaQuery maxWidth={450}>
        <div className="phone">
          <Search />
          <MoviesList />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1000}>
        <div className="desktop">
          <Search />
          <MoviesList />
        </div>
      </MediaQuery>
    </StyledMiddleSection>
  );
};

export default MiddleSection;

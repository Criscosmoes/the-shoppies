import React from "react";
import styled from "styled-components";

const StyledLoadingMovie = styled.div`
  & {
    width: 80%;
    height: 200px;
    border-radius: 10px;
    background: linear-gradient(-130deg, #606060, #d8d8d8, #606060);
    position: relative;
    background-size: 400% 400%;
    animation: change 3s ease-in infinite;
    margin: 3%;
  }

  @keyframes change {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

const LoadingMovie = () => {
  return <StyledLoadingMovie></StyledLoadingMovie>;
};

export default LoadingMovie;

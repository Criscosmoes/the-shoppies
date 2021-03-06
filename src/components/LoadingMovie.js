import React from "react";
import styled from "styled-components";

const StyledLoadingMovie = styled.div`
  & {
    width: 80%;
    height: 190px;
    border-radius: 10px;
    background: linear-gradient(-130deg, #606060, #d8d8d8, #606060);
    position: relative;
    background-size: 400% 400%;
    animation: change 2s ease-in infinite;
    margin: 3%;
  }

  @media (max-width: 450px) {
    width: 100%;
    height: 140px;
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

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledList = styled.div`
  .movie {
    margin: 3%;
    text-align: center;
    min-width: 80%;
    max-width: 80%;
    min-height: 190px;
    max-height: 190px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    border: 3px solid white;
    align-items: center;
    background: #202020;
    font-size: 2.4rem;
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
    padding: 3%;
    color: white;
    background: #95bf46;
    width: 80%;
    font-family: "Orelega One", cursive;
    font-size: 1.7rem;
    cursor: pointer;
    border: none;
    transition: 0.2s ease-out;
  }

  .remove {
    background: red;
    transition: 0.2s ease-in;
  }
`;

const MyList = ({ nominationList }) => {
  const renderedNominations = nominationList.map((cur) => {
    return (
      <li className="movie">
        <img src={cur.Poster} />
        <div className="information">
          <h2>{cur.Title}</h2>
          <h3>Release: {cur.Year}</h3>
          <button>Remove</button>
        </div>
        <div className="placeholder"></div>
      </li>
    );
  });

  return (
    <StyledList>
      {renderedNominations ? renderedNominations : <div>No movies</div>}
    </StyledList>
  );
};

const mapStateToProps = (state) => {
  return {
    nominationList: state.nominationList,
  };
};

export default connect(mapStateToProps, {})(MyList);

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ShopifyLogo from "../images/shopify-logo.png";

import MediaQuery from "react-responsive";

// helper functions
import {
  fetchMovies,
  addMovie,
  removeMovie,
  changeButtonText,
} from "../actions";

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
    margin: 1%;
  }

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
    border-radius: 10px;
  }

  .information {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 45%;
    height: 150px;
    color: white;
  }

  .placeholder {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 10%;
    height: 150px;
  }

  button {
    border-radius: 10px;
    padding: 2%;
    color: white;
    background: #95bf46;
    width: 50%;
    font-family: "Orelega One", cursive;
    font-size: 1.9rem;
    cursor: pointer;
    border: none;
    transition: 0.2s ease-out;
  }

  .remove {
    background: red;
    transition: 0.2s ease-in;
  }

  .hidden {
    display: none;
  }

  .backdrop {
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(4px);
  }

  // notification

  .centered {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    width: 40%;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #1f202b;
    color: white;
    border: 3px solid white;
    text-align: center;
    border-radius: 10px;
    z-index: 0;
  }

  .centered > * {
    margin: 3%;
  }

  .congrats {
    font-size: 7rem;
  }

  p {
    font-size: 3rem;
  }

  .link {
    color: white;
    text-decoration: underline;
    transition: 0.2s ease-out;
  }

  .link:hover {
    color: #95bf46;
    transition: 0.2s ease-in;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 5rem;
  }
  .logo {
    min-width: 12%;
    max-width: 12%;
  }

  // error noti

  .error {
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

  .imdb {
    color: black;
    background: rgb(230, 185, 30);
    width: 30%;
    padding: 1%;
    font-weight: 900;
    border-radius: 4px;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 1.8rem;
    transition: 0.2s ease-out;
  }

  .imdb:hover {
    background: #edca1d;
    transition: 0.2s ease-in;
  }

  @media (max-width: 400px) {
    & {
      width: 100%;
    }

    .movie--list {
      width: 100%;
    }

    .movie {
      min-height: 150px;
      max-height: 150px;
      min-width: 100%;
    }

    img {
      min-width: 27%;
      max-width: 27%;
    }

    .information {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-size: 1.8rem;
      width: 35%;
    }

    .buttons {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      width: 35%;
      height: 100px;
    }

    button {
      font-size: 1.5rem;
      padding: 5%;
      width: 90%;
      border-radius: 5px;
    }

    .imdb {
      font-size: 1.5rem;
      padding: 4%;
      width: 70%;
    }

    ul::-webkit-scrollbar {
      width: 0rem;
    }
  }
`;

const MoviesList = ({
  movieList,
  isLoading,
  addMovie,
  removeMovie,
  changeButtonText,
  nominationList,
}) => {
  const [loadingMovies, setLoadingMovies] = useState([1, 2, 3]);
  const [isFull, setIsFull] = useState(false);

  const onButtonClick = (movie) => {
    if (nominationList.length === 5) {
      setIsFull(true);
      return;
    }

    if (movie.Type) {
      // someone wants to add a movie
      addMovie(movie);
    } else {
      removeMovie(movie);
    }

    // change the button text/style if someone has tried to remove/add a movie
    changeButtonText(movie);

    if (nominationList.length >= 4) {
      setIsFull(true);
      console.log("full");
      return;
    }

    // set is full to false, if it makes it down here
    setIsFull(false);
  };

  const filteredMovies = movieList.filter((cur) => cur.Poster !== "N/A");

  if (filteredMovies.length > 1) {
    filteredMovies.forEach((cur) => (cur.completed = false));
  }

  const renderedMovies = filteredMovies.map((cur) => {
    return (
      <li className="movie">
        <img src={cur.Poster} />
        <div className="information">
          <h2>{cur.Title}</h2>
          <h3>Release: {cur.Year}</h3>
          <button
            className={`${cur.Type ? "" : "remove"}`}
            onClick={() => onButtonClick(cur)}
          >
            {cur.Type ? "Nominate" : "Remove"}
          </button>
          <a
            href={`https://www.imdb.com/title/${cur.imdbID}/`}
            target="_blank"
            className="imdb"
          >
            IMDb
          </a>
        </div>
        <div className="placeholder"></div>
      </li>
    );
  });

  const renderedMoviesPhone = filteredMovies.map((cur) => {
    return (
      <li className="movie">
        <img src={cur.Poster} />
        <div className="information">
          <h2>{cur.Title}</h2>
          <h3>Release: {cur.Year}</h3>
        </div>
        <div className="buttons">
          <button
            className={`${cur.Type ? "" : "remove"}`}
            onClick={() => onButtonClick(cur)}
          >
            {cur.Type ? "Nominate" : `Remove ${"  "}`}
          </button>
          <a
            href={`https://www.imdb.com/title/${cur.imdbID}/`}
            target="_blank"
            className="imdb"
          >
            IMDb
          </a>
        </div>
      </li>
    );
  });

  const renderedLoading = loadingMovies.map((cur) => {
    return <LoadingMovie />;
  });

  const showList = () => {
    if (isLoading) {
      return renderedLoading;
    } else {
      if (movieList.length > 0) {
        return renderedMovies;
      } else {
        return <li className="error">No films found. Please search again!</li>;
      }
    }
  };

  const showListPhone = () => {
    if (isLoading) {
      return renderedLoading;
    } else {
      if (movieList.length > 0) {
        return renderedMoviesPhone;
      } else {
        return <li className="error">No films found. Please search again!</li>;
      }
    }
  };

  return (
    <StyledMoviesList>
      <MediaQuery maxWidth={450}>
        <ul className={`movie--list ${isFull ? "blur" : ""}`}>
          {showListPhone()}
        </ul>
        <div className={`hidden ${isFull ? "backdrop" : ""}`}></div>
        <div className={`hidden ${isFull ? "centered" : ""}`}>
          <div className="title">
            <img className="logo" src={ShopifyLogo} />

            <div className="h1">
              <h1>theshoppies.</h1>
            </div>
          </div>
          <h2 className="congrats">Congratulations!</h2>
          <p>
            Your list is now full. To make any necessary edits, please visit{" "}
            <Link className="link" to="/mylist">
              my list
            </Link>
          </p>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1200}>
        <ul className={`movie--list ${isFull ? "blur" : ""}`}>{showList()}</ul>
        <div className={`hidden ${isFull ? "backdrop" : ""}`}></div>
        <div className={`hidden ${isFull ? "centered" : ""}`}>
          <div className="title">
            <img className="logo" src={ShopifyLogo} />

            <div className="h1">
              <h1>theshoppies.</h1>
            </div>
          </div>
          <h2 className="congrats">Congratulations!</h2>
          <p>
            Your list is now full. To make any necessary edits, please visit{" "}
            <Link className="link" to="/mylist">
              my list
            </Link>
          </p>
        </div>
      </MediaQuery>
    </StyledMoviesList>
  );
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
    isLoading: state.isLoading,
    nominationList: state.nominationList,
  };
};

export default connect(mapStateToProps, {
  fetchMovies,
  addMovie,
  removeMovie,
  changeButtonText,
})(MoviesList);

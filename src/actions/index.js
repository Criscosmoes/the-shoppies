import axios from "axios";

export const fetchMovies = (input) => async (dispatch) => {
  try {
    dispatch({ type: "IS_LOADING", payload: true });

    setTimeout(async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${input}&apikey=10532f9`
      );

      dispatch({ type: "FETCH_MOVIES", payload: response.data.Search });
      dispatch({ type: "IS_LOADING", payload: false });
    }, 2000);
  } catch (e) {
    console.log(e);
  }
};

export const localStorageList = (list) => {
  return {
    type: "NOMINATION_LIST",
    payload: list,
  };
};

export const addMovie = (movie) => {
  return {
    type: "ADD_NOMINATION",
    payload: movie,
  };
};

export const changeButtonText = (movie) => {
  return {
    type: "CHANGE_TEXT",
    payload: movie,
  };
};

export const removeMovie = (movie) => {
  return {
    type: "REMOVE_MOVIE",
    payload: movie,
  };
};

export const onInputChange = (e) => {
  return {
    type: "ON_INPUT_CHANGE",
    payload: e.target.value,
  };
};

export const resetInput = () => {
  return {
    type: "RESET_INPUT",
    payload: "",
  };
};

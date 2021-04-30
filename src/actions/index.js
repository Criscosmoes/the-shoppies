import axios from "axios";

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?s=avengers&apikey=10532f9"
    );

    dispatch({ type: "FETCH_MOVIES", payload: response.data.Search });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export const onInputChange = (e) => {
  return {
    type: "ON_INPUT_CHANGE",
    payload: e.target.value,
  };
};

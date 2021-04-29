import axios from "axios";

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?apikey=10532f9?t=avengers"
    );

    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

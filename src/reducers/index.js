const initialState = {
  movieList: [],
  nominationList: [],
  userInput: "",
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      const newMovies = state.movieList.map((cur) => {
        if (action.payload.imdbID === cur.imdbID) {
          return {
            ...cur,
            Type: !cur.Type,
          };
        } else {
          return cur;
        }
      });

      console.log(newMovies);

      return {
        ...state,
        movieList: newMovies,
      };
    case "REMOVE_MOVIE":
      const filteredFilms = state.nominationList.filter((cur) => {
        return action.payload.imdbID !== cur.imdbID;
      });

      return {
        ...state,
        nominationList: filteredFilms,
      };
    case "RESET_INPUT":
      return {
        ...state,
        userInput: "",
      };
    case "ADD_NOMINATION":
      return {
        ...state,
        nominationList: [...state.nominationList, action.payload],
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "FETCH_MOVIES":
      return {
        ...state,
        movieList: action.payload,
      };
    case "ON_INPUT_CHANGE":
      return {
        ...state,
        userInput: action.payload,
      };
    default:
      return state;
  }
};

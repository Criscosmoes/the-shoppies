const initialState = {
  movieList: [],
  nominationList: [],
  userInput: "",
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "NOMINATION_LIST":
      return {
        ...state,
        nominationList: action.payload,
      };
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

      return {
        ...state,
        movieList: newMovies,
      };
    case "REMOVE_MOVIE":
      const filteredFilms = state.nominationList.filter((cur) => {
        return action.payload.imdbID !== cur.imdbID;
      });

      localStorage.setItem("nominationList", JSON.stringify(filteredFilms));

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
      const arr = [...state.nominationList, action.payload];

      localStorage.setItem("nominationList", JSON.stringify(arr));

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
      if (action.payload) {
        const half = Math.ceil(action.payload.length / 2);
        var firstHalf = action.payload.splice(0, half);

        const list = JSON.parse(localStorage.getItem("nominationList"));

        // loop through and check if a movie has already been chosen,
        // return that list instead

        for (let i = 0; i < list.length; i++) {
          for (let j = 0; j < firstHalf.length; j++) {
            if (list[i].imdbID === firstHalf[j].imdbID) {
              firstHalf[j].Type = false;
            }
          }
        }
      }

      return {
        ...state,
        movieList: firstHalf || [],
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

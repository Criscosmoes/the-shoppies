const initialState = {
  movieList: [1, 2, 3],
  userInput: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
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

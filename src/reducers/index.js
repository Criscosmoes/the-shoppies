const initialState = {
  movieList: [1, 2, 3],
  nominationList: [],
  userInput: "",
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
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

import { FILTER_MOVIES } from "./actionTypes";

const initialState = {
  filters: {
    text: "pokemon",
    year: "",
    type: "",
  },
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MOVIES:
      state = {
        ...state,
        filters: { ...action.payload },
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default MovieReducer;

import { FILTER_MOVIES } from "./actionTypes";

export const setFilterMovies = (filters) => {
  return {
    type: FILTER_MOVIES,
    payload: filters,
  };
};

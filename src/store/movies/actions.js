import { FILTER_MOVIES } from "./actionTypes";

export const setFilterMovies = (filter, filters) => {
  return {
    type: FILTER_MOVIES,
    payload: filter,
    filters: filters,
  };
};

import { createStore, combineReducers } from "redux";
import MovieReducer from "./movies/reducer";

const rootReducer = combineReducers({
  MovieReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

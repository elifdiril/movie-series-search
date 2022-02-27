import { Input } from "reactstrap";
import { setFilterMovies } from "../../store/movies/actions";
import { useSelector, useDispatch } from "react-redux";

function YearSearch() {
  const { filters } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();

  const onChangeHandler = (value) => {
    dispatch(setFilterMovies({ ...filters, year: value }));
  };

  return (
    <Input
      id="searchYear"
      name="searchYear"
      placeholder="Search Year"
      type="search"
      onChange={(e) => {
        onChangeHandler(e.target.value);
      }}
      value={filters.year}
    />
  );
}

export default YearSearch;

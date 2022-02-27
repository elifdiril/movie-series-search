import { Input } from "reactstrap";
import { setFilterMovies } from "../../store/movies/actions";
import { useSelector, useDispatch } from "react-redux";

function TextSearch() {
  const { filters } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();

  const onChangeHandler = (value) => {
    dispatch(setFilterMovies({ ...filters, text: value }));
  };

  return (
    <div>
      <Input
        id="searchTitle"
        name="searchTitle"
        value={filters.text}
        placeholder="Search Title"
        type="text"
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
      />
    </div>
  );
}

export default TextSearch;

import { Input } from "reactstrap";
import { setFilterMovies } from "../../store/movies/actions";
import { useSelector, useDispatch } from "react-redux";

function TypeSearch() {
  const { filters } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();

  const onChangeSelection = (value) => {
    dispatch(setFilterMovies({ ...filters, type: value }));
  };

  return (
    <div>
      <Input
        id="typeSelect"
        name="selectType"
        placeholder="Select Type"
        type="select"
        value={filters.type}
        onChange={(e) => {
          onChangeSelection(e.target.value);
        }}
      >
        <option label=" "></option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </Input>
    </div>
  );
}

export default TypeSearch;

import DataTable from "../../components/DataTable";
import FilterGroup from "../../components/FilterGroup";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import filterMoviesHelper from "../../helpers/filterMoviesHelper";
import { useEffect, useState } from "react";
import defaultSearch from "../../helpers/defaultSearch";
import { setFilterMovies } from "../../store/movies/actions";

import "./home.scss";

function Home() {
  const { filters } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [data, setData] = useState(defaultSearch());

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response.Search);
      });
  }, [url]);

  const onFilterClick = () => {
    setUrl(filterMoviesHelper(filters));
  };

  const onClearClick = () => {
    dispatch(setFilterMovies({ text: "", type: "", year: "" }));
  };

  return (
    <div className="home">
      <FilterGroup />
      <div className="buttons">
        <Button className="filter" onClick={onFilterClick}>
          Filter
        </Button>
        <Button className="clear" onClick={onClearClick}>
          Clear
        </Button>
      </div>
      {data && <DataTable data={data} />}
    </div>
  );
}

export default Home;

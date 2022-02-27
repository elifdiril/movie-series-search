import DataTable from "../../components/DataTable";
import FilterGroup from "../../components/FilterGroup";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import filterMoviesHelper from "../../helpers/filterMoviesHelper";
import { useEffect, useState } from "react";
import defaultSearch from "../../helpers/defaultSearch";
import "./home.scss";

function Home() {
  const { filters } = useSelector((state) => state.MovieReducer);
  const [url, setUrl] = useState("");
  const [data, setData] = useState(defaultSearch());

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response.Search);
      });
  }, [url, JSON.stringify(filters)]);

  const onFilterClick = () => {
    setUrl(filterMoviesHelper(filters));
  };

  return (
    <div className="home">
      <FilterGroup />
      <Button color="primary" className="filter" onClick={onFilterClick}>
        Filter
      </Button>
      {data && <DataTable data={data} />}
    </div>
  );
}

export default Home;

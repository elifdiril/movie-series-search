import DataTable from "../../components/DataTable";
import FilterGroup from "../../components/FilterGroup";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import filterMoviesHelper from "../../helpers/filterMoviesHelper";
import { useEffect, useState } from "react";

function Home() {
  const { filters } = useSelector((state) => state.MovieReducer);
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(filters);
  }, [filters, JSON.stringify(filters)]);

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
    <div>
      <FilterGroup />
      <Button color="primary" onClick={onFilterClick}>
        Filter
      </Button>
      <DataTable data={data} />
    </div>
  );
}

export default Home;

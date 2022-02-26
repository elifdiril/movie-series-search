import { useSelector, useDispatch } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useNavigate } from "react-router-dom";
import { setFilterMovies } from "../../store/movies/actions";
import { useEffect, useState } from "react";
import filterMoviesHelper from "../../helpers/filterMoviesHelper";

function DataTable() {
  const { filters } = useSelector((state) => state.MovieReducer);
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = filterMoviesHelper(filters);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response.Search);
      });
    console.log(data);
  }, [JSON.stringify(filters)]);

  const navigate = useNavigate();

  //const dispatch = useDispatch();

  const columns = [
    {
      dataField: "imdbID",
      text: "ID",
    },
    {
      dataField: "Title",
      text: "Title",
    },
    {
      dataField: "Year",
      text: "Year",
    },
    {
      dataField: "Type",
      text: "Type",
    },
    {
      dataField: "Genre",
      text: "Genre",
    },
  ];

  const rowEvents = {
    onClick: (_, row) => {
      const { imdbID } = row;
      //dispatch(getMovieDetails(imdbID));
      navigate("/details/" + imdbID, { imdbID: imdbID });
    },
  };

  return (
    <>
      {data.length > 0 && (
        <BootstrapTable
          keyField="imdbID"
          data={data}
          columns={columns}
          hover
          pagination={paginationFactory()}
          rowEvents={rowEvents}
        />
      )}
    </>
  );
}

export default DataTable;

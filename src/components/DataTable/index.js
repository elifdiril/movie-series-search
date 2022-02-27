import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useNavigate } from "react-router-dom";
import "./dt.scss";

function DataTable({ data }) {
  const navigate = useNavigate();

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
      navigate("/details/" + imdbID, { imdbID: imdbID });
    },
  };

  return (
    <div className="dt">
      {data && data.length > 0 && (
        <BootstrapTable
          keyField="imdbID"
          data={data}
          columns={columns}
          hover
          pagination={paginationFactory()}
          rowEvents={rowEvents}
        />
      )}
    </div>
  );
}

export default DataTable;

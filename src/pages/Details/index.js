import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "./details.scss";

function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        setDetails(response);
      });
  }, [id]);

  return (
    <Card>
      <CardImg alt="Poster" src={details.Poster} />
      <CardBody>
        <CardTitle tag="h5">{details.Title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Writer: {details.Writer}
          <br />
          Genre: {details.Genre}
          <br />
          Runtime: {details.Runtime} {"  "}
          IMDB: {details.imdbRating}
        </CardSubtitle>
        <CardText>{details.Plot}</CardText>
      </CardBody>
    </Card>
  );
}

export default Details;

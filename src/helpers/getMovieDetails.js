const getMovieDetails = (id) => {
  fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};
export default getMovieDetails;

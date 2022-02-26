const filterMoviesHelper = (filters) => {
  let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

  if (filters.text !== "") {
    url += "&s=" + filters.text;
  }

  if (filters.year !== "") {
    url += "&y=" + filters.year;
  }

  if (filters.type !== "") {
    url += "&type=" + filters.type;
  }

  return url;
};

export default filterMoviesHelper;

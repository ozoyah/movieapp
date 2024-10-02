import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//api key: 57350e5d
const API_URL = "http://www.omdbapi.com/?apikey=57350e5d";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };

  const getMovies = async (type) => {
    const response = await fetch(`${API_URL}&s=${type}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };

  useEffect(() => {
    getMovies("movie");
  }, []);

  return (
    <>
      <div className="app">
        <div className="nav">
          <h1>OzedMovies</h1>

          <div className="search">
            <input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              placeholder="Search for movies"
            ></input>
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchItem)}
            />
          </div>
        </div>

        {movies.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;

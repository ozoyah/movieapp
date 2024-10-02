import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="movie">
        <div className="moviePoster">
          <img
            src={
              movie.Poster !== ""
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          ></img>
        </div>

        <div className="movieType">
          <p>{movie.Year}</p>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

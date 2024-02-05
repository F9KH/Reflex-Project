// Movie.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Movie = ({ movie, onRent, onReturn }) => {
  return (
    <div className="movie-card">
      <Link key={movie.id} to={`/movie/${movie.id}`} state={{ movie }}>
        <img className="movie-image" src={movie.img} alt={movie.title} />
      </Link>
      <p className="movie-title">{movie.title}</p>
      {movie.isRented ? (
        <button className="return-button" onClick={onReturn}>
          -
        </button>
      ) : (
        <button className="rent-button" onClick={onRent}>
          +
        </button>
      )}
    </div>
  );
};

export default Movie;

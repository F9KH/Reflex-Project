


import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Movie from './Movie';
import '../App.css';

const Catalog = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [budget, setBudget] = useState(5);
  const [rentedMovies, setRentedMovies] = useState([]);
  const navigate = useNavigate();

  const handleRentMovie = (movieId) => {
    const selectedMovie = movies.find((movie) => movie.id === movieId);

    if (selectedMovie.isRented || budget - 3 < 0) {
      if (selectedMovie.isRented) {
        alert('This movie is already rented.');
      } else {
        alert('m3kash msare');
      }
      return;
    }

    setRentedMovies((prevRentedMovies) => [
      ...prevRentedMovies,
      selectedMovie,
    ]);

    setBudget((prevBudget) => prevBudget - 3);
  };

  const handleReturnMovie = (movieId) => {
    const selectedMovie = rentedMovies.find((movie) => movie.id === movieId);

    if (!selectedMovie.isRented) {
      return;
    }

    setRentedMovies((prevRentedMovies) =>
      prevRentedMovies.filter((movie) => movie.id !== movieId)
    );

    setBudget((prevBudget) => prevBudget + 3);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalog-container">
      <h2 className="catalog-title">Catalog Page</h2>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <p className="budget-info">Budget: ${budget}</p>
      <div className="movies-container">
        {filteredMovies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onRent={() => handleRentMovie(movie.id)}
            onReturn={() => handleReturnMovie(movie.id)}
            onClick={() => handleMovieClick(movie.id)}
          />
        ))}
      </div>
      {rentedMovies.length > 0 && (
        <div className="rented-container">
          <h3 className="rented-title">Rented Movies</h3>
          {rentedMovies.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              onReturn={() => handleReturnMovie(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;

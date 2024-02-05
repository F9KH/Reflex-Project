import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div className="movie-detail">Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <h2 className='title'>{movie.title}</h2>
      <p className='title'>Year: {movie.year}</p>
      <img src={movie.img} alt={movie.title} className="movie-image2" />
      <p><span>Description:</span>{movie.descrShort}</p>
    </div>
  );
};

export default MovieDetail;

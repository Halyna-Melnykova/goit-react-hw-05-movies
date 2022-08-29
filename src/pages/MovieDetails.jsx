import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieInfo } from '../api/movies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { movie, setMovie } = useState(null);

  console.log(movieId);

  useEffect(() => {
    fetchMovieById();

    async function fetchMovieById() {
      try {
        const data = await fetchMovieInfo(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  console.log(movie);
  return (
    <div>
      <p>Movie</p>
      {movie && (
        <>
          <img src={movie.poster_path} alt="poster" />
          <h2>{movie.title}</h2>
        </>
      )}
    </div>
  );
};

export default MovieDetails;

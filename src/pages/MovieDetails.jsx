import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieInfo } from '../api/movies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  console.log(movieId);

  useEffect(() => {
    fetchMovieById();

    async function fetchMovieById() {
      try {
        const data = await fetchMovieInfo(movieId);
        setMovie({ ...data });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  console.log(movie);
  return (
    <div>
      <img src={movie.poster_path} alt="poster" />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <ul>
        {movie.genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;

// const { poster_path, title, overview, genres, release_date, vote_average } =
//   movieDetails;

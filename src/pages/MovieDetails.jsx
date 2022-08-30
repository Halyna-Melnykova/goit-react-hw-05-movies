import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieInfo } from '../api/movies';
import Button from 'components/Button/Button';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  console.log(movieId);

  useEffect(() => {
    async function fetchMovieById() {
      setLoading(true);
      try {
        const data = await fetchMovieInfo(movieId);
        setMovie({ ...data });
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  console.log(movie);

  const goBack = () => navigate(-1);

  const isMovie = Object.keys(movie).length > 0;

  const { poster_path, title, overview, genres, release_date, vote_average } =
    movie;

  const score = ((vote_average * 100) / 10).toFixed(0);

  return (
    <main>
      {isMovie && <Button goBack={goBack} />}
      {isMovie && (
        <div>
          {poster_path && (
            <img className="image" src={poster_path} alt="poster" />
          )}
          <h2>
            {title} {release_date}
          </h2>
          <p>User Score: {score}%</p>
          <p>{overview}</p>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Erorr</p>}
    </main>
  );
};

export default MovieDetails;

// ({Number.parseInt(release_date)})

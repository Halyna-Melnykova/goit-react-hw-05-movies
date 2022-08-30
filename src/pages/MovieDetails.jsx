import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';
import { getMovieInfo } from '../api/movies';
import Button from 'components/Button/Button';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  // console.log(movieId);

  useEffect(() => {
    async function fetchMovieById() {
      setLoading(true);
      try {
        const data = await getMovieInfo(movieId);
        setMovie({ ...data });
        // console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  // console.log(movie);

  const goBack = () => navigate(-1);

  const isMovie = Object.keys(movie).length > 0;

  const { poster_path, title, overview, genres, release_date, vote_average } =
    movie;

  const score = ((vote_average * 100) / 10).toFixed(0);
  const year = release_date?.slice(0, 4);

  return (
    <main>
      {loading && <p>Loading...</p>}
      {error && <p>Erorr</p>}
      {isMovie && <Button goBack={goBack} />}
      {isMovie && (
        <div>
          {poster_path && (
            <img
              className="image"
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt="poster"
            />
          )}
          <h2>
            {title} ({year})
          </h2>
          <p>User Score: {score}%</p>
          <p>{overview}</p>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      )}
      <div>
        <h3>Additional information</h3>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;

// src={
//   profile_path
//     ? `https://image.tmdb.org/t/p/original/${profile_path}`
//     : `https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg`
// }

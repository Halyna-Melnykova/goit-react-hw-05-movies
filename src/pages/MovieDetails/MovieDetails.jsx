import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getMovieInfo } from '../../api/movies';
import Button from 'components/Button/Button';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';

  useEffect(() => {
    async function fetchMovieById() {
      setLoading(true);
      try {
        const data = await getMovieInfo(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);

  const goBack = () => navigate(backLinkHref);
  // const goBack = () => navigate(-1);

  const isMovie = Object.keys(movie).length > 0;

  const { poster_path, title, overview, genres, release_date, vote_average } =
    movie;

  const score = ((vote_average * 100) / 10).toFixed(0);
  const year = release_date?.slice(0, 4);

  return (
    <main>
      {loading && <p>Loading...</p>}
      {error && <p>Data loading error</p>}
      {isMovie && <Button goBack={goBack} />}

      {/* {isMovie && (
        <Link to={backLinkHref} className={s.link}>
          Go back
        </Link>
      )} */}
      {isMovie && (
        <div className={s.wrapper}>
          {poster_path && (
            <img
              className="image"
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt="poster"
            />
          )}
          <div className={s.info}>
            <h2>
              {title} ({year})
            </h2>
            <p>User Score: {score}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className={s.genres}>
              {genres &&
                genres.map(({ id, name }) => (
                  <li className={s.genre} key={id}>
                    {name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
      <div className={s.addInfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.pathname }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.pathname }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetails;

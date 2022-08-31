import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from '../../api/movies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();

    async function fetchMovies() {
      setLoading(true);
      try {
        const data = await getTrending();
        setMovies([...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {error && <p>Page loading error</p>}
    </main>
  );
};

export default Home;

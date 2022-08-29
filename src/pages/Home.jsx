import { useState, useEffect } from 'react';
import { fetchTrending } from '../api/movies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();

    async function fetchMovies() {
      setLoading(true);
      try {
        const data = await fetchTrending();
        setMovies([...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {error && <p>Erorr</p>}
    </div>
  );
};

export default Home;

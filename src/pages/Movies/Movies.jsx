import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { getMovieByQuery } from '../../api/movies';

const Movies = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  const onSearch = search => setSearchParams({ query: search });

  useEffect(() => {
    if (search) {
      fetchMovies();
    }

    async function fetchMovies() {
      setLoading(true);
      try {
        const data = await getMovieByQuery(search);
        setState(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  }, [search]);

  return (
    <div>
      <Form onSubmit={onSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Data loading error</p>}
      <ul>
        {state.map(({ id, title }) => (
          <li key={id}>{<Link to={`/movies/${id}`}>{title}</Link>}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from '../../api/movies';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchActors() {
      setLoading(true);
      try {
        const data = await getActors(movieId);
        setActors(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchActors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Erorr</p>}
      <ul>
        {actors &&
          actors.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                className="image"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : `https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80`
                }
                alt="actor"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;

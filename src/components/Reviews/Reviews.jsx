import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../api/movies';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchActors() {
      setLoading(true);
      try {
        const data = await getReviews(movieId);
        setReviews([...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchActors();
  }, [movieId]);

  const isReview = Object.keys(reviews).length > 0;

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Erorr</p>}
      <ul>
        {isReview
          ? reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))
          : `We don't have any review for this movie.`}
      </ul>
    </div>
  );
};

export default Reviews;

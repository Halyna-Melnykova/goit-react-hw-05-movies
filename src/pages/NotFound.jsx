import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <div className="container">
        <p>404 Page not found</p>
        <Link to="/">To home page</Link>
      </div>
    </main>
  );
};

export default NotFound;

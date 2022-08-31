import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

// import Home from '../pages/Home/Home';
// import Movies from '../pages/Movies/Movies';
// import NotFound from '../pages/NotFound';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import Navigation from './Navigation/Navigation';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

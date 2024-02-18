import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const CastList = lazy(() => import('./CastList/CastList'));
const ReviewList = lazy(() => import('./ReviewList/ReviewList'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/movie:Id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastList />} />
          <Route path="cast" element={<ReviewList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;

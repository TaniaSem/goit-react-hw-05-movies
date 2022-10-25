import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";

const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieCard = lazy(() => import('../pages/MovieCard/MovieCard'));
const Cast = lazy(() => import('./Cast/Cast'));
const Layout = lazy(() => import('./Layout/Layout'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieCard />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} /> 
            <Route path="/movies/:movieId/reviews" element={<Reviews />} /> 
          </Route>
        </Route>
        <Route path="*" element = {<Navigate to="/"/>}  />
      </Routes>
    </div>
  );
};


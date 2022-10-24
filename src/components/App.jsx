import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies" element={<div>Movies</div>} /> 
        </Route>
      </Routes>
    </div>
  );
};

// Layout
//  - Home
//  - Movie
//    - searsh
//    - movie
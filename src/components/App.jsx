import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies" element={<div>Movies</div>} /><Route path="/movies" element={<div>Movies</div>} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </div>
  );
};

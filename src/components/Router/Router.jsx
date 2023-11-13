import { Routes, Route } from "react-router-dom";
import MovieDetails from "../../pages/movie-details/MovieDetails";
import Home from "../../pages/home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<MovieDetails />} />
    </Routes>
  );
};
export default Router;

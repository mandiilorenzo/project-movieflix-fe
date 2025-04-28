import { Routes, Route } from "react-router-dom";
import { MovieList } from "./home/movie-list";

export const router = () => (
    <Routes>
        <Route path="/" element={<MovieList />} />
    </Routes>
);
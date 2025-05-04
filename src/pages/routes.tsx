import { createBrowserRouter } from "react-router-dom";
import { MovieList } from "./home/movie-list";
import { Layout } from "../layouts/layout";
import { Movies } from "./movie";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: <MovieList/> },
            {path: "/home", element: <MovieList/>},
            {path: "/movie/:id", element: <Movies/>},
        ]
    }
])
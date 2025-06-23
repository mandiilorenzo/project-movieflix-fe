import { createBrowserRouter } from "react-router-dom";
import { MovieList } from "./movielist/movie-list";
import { Layout } from "../layouts/layout";
import { Movies } from "./movie";
import { Form } from "./register";
import { CreateMovie } from "./createMovie";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: <Form/> },
            {path: "/home", element: <Form/>},
            {path: "/movie/:id", element: <Movies/>},
            {path: "/movies", element: <MovieList/>},
            {path: "/createMovie", element: <CreateMovie/>}
        ]
    }
])
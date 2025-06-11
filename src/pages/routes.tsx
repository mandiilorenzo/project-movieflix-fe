import { createBrowserRouter } from "react-router-dom";
import { MovieList } from "./home/movie-list";
import { Layout } from "../layouts/layout";
import { Movies } from "./movie";
import { Form } from "./register";
import { CreateMovie } from "./createMovie";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: <MovieList/> },
            {path: "/home", element: <MovieList/>},
            {path: "/movie/:id", element: <Movies/>},
            {path: "/register", element: <Form/>},
            {path: "/createMovie", element: <CreateMovie/>}
        ]
    }
])
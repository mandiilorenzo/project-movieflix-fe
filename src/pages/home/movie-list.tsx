import { useEffect, useState } from "react";
import { getMovies } from "../../services/api";
import { Link } from "react-router-dom";

interface Movie {
    id: number,
    title: string,
    release_date: string,
    genre_id: number,
    language_id: number,
    oscar_count: number,
    duration: number,
    genres: {
        id: number,
        name: string
    },
    languages: {
        id: number,
        name: string
    }
}

export const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await getMovies();
                setMovies(movies);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        fetchMovies();
    }, []);
        

    // na tua listagem de filmes, podera ter 2 botoes (1 para atualizar o filme, pode ser usado um modal ou uma pagina para atualizacao, e outro botao para remover o filme no banco de dados)
    return (
        <ul>
            {
                movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <h2>{movie.title}</h2>
                            </Link>
                        </li>
                    )
                })

            }
        </ul>
    )
}
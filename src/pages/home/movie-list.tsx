import { useEffect, useState } from "react";
import { deleteMovieById, getMovies } from "../../services/api";
import { Link } from "react-router-dom";
import * as S from './style'

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

    const removeMovie = async (id: number) => {
        try {
            await deleteMovieById(id);
            const movies = await getMovies(); 
            setMovies(movies);
        } catch (error) {
            console.error("Error removing movie:", error);
            alert("Erro ao remover o filme.");
        }
    };


    // na tua listagem de filmes, podera ter 2 botoes (1 para atualizar o filme, pode ser usado um modal ou uma pagina para atualizacao, e outro botao para remover o filme no banco de dados)
    return (
        <S.Main>
            <h1>Lista de filmes</h1>
            <S.MovieList>
                {
                    movies.map((movie) => {
                        return (
                            <S.MovieItem key={movie.id}>
                                <Link to={`/movie/${movie.id}`}>
                                    <h2>{movie.title}</h2>
                                </Link>
                                <S.MovieButtons>
                                    <S.Button>Atualizar</S.Button>
                                    <S.Button onClick={() => removeMovie(movie.id)}>Remover</S.Button>
                                </S.MovieButtons>
                            </S.MovieItem>
                        )
                    })

                }
            </S.MovieList>
        </S.Main>

    )
}
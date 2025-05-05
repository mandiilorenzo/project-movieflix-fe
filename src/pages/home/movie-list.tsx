import { useEffect, useState } from "react";
import { deleteMovieById, getMovies, updateMovieById } from "../../services/api";
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
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [showEditModal, setShowEditModal] = useState(false);

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

    const handleEditClick = (movie: Movie) => {
        setSelectedMovie(movie);
        setShowEditModal(true);
    };

    const handleUpdate = async () => {
        if (!selectedMovie) return;

        try {
            await updateMovieById(selectedMovie.id, selectedMovie);
            setShowEditModal(false);
            const updatedMovies = await getMovies();
            setMovies(updatedMovies);
        } catch (error) {
            console.error("Erro ao atualizar filme", error);
        }
    };


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
                                    <S.Button onClick={() => handleEditClick(movie)}>Atualizar</S.Button>
                                    <S.Button onClick={() => removeMovie(movie.id)}>Remover</S.Button>
                                </S.MovieButtons>
                            </S.MovieItem>
                        )
                    })

                }
            </S.MovieList>

            {showEditModal && selectedMovie && (
                <S.Modal>

                    <S.ModalContent>
                        <h2>Atualizar filme</h2>
                        <S.Input
                            value={selectedMovie.title}
                            onChange={(e) =>
                                setSelectedMovie({ ...selectedMovie, title: e.target.value })
                            }
                        />

                        <S.Input
                            type="number"
                            placeholder="Contagem de Oscars"
                            value={selectedMovie.oscar_count}
                            onChange={(e) =>
                                setSelectedMovie({
                                    ...selectedMovie,
                                    oscar_count: Number(e.target.value),
                                })
                            }
                        />
                        <S.Button onClick={handleUpdate}>Salvar</S.Button>
                        <S.Button onClick={() => setShowEditModal(false)}>Cancelar</S.Button>
                    </S.ModalContent>

                </S.Modal>
            )}

        </S.Main>

    )
}
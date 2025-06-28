import { useEffect, useState } from "react";
import { deleteMovieById, getMovies, updateMovieById } from "../../services/api";
import { Link } from "react-router-dom";
import * as S from './style'
import { Movie } from "../../types/movie";
import { useNavigate } from "react-router-dom";

export const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await getMovies();
                console.log(movies);
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


    const handleDeleteMovie = async (id: number) => {
        try {
            await deleteMovieById(id);
            const movies = await getMovies();
            setMovies(movies);
        } catch (error) {
            console.error("Error removing movie:", error);
            alert("Erro ao remover o filme.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/home");
    };

    return (
        <S.Main>

            <S.ContainerMovies>
                <h1>Lista de filmes</h1>
                <S.MovieList>
                    {
                        Array.isArray(movies) && movies.map((movie) => {
                            return (
                                <S.MovieItem key={movie.id}>
                                    <Link to={`/movie/${movie.id}`}>
                                        <h2>{movie.title}</h2>
                                    </Link>
                                    <S.MovieButtons>
                                        <S.Button onClick={() => handleEditClick(movie)}>Atualizar</S.Button>
                                        <S.Button onClick={() => handleDeleteMovie(movie.id)}>Remover</S.Button>
                                    </S.MovieButtons>
                                </S.MovieItem>
                            )
                        })

                    }
                </S.MovieList>
            </S.ContainerMovies>

            {
                showEditModal && selectedMovie && (
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
                )
            }

            <S.Sidebar>
                <S.NewMovie>
                    <Link to="/createMovie">
                        <S.Button>Cadastrar novo filme</S.Button>
                    </Link>
                </S.NewMovie>

                <S.Button onClick={handleLogout}>Sair</S.Button>
            </S.Sidebar>

        </S.Main >

    )
}
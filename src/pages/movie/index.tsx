import { useEffect, useState } from "react"
import { getMovieById } from "../../services/api"
import { useParams } from "react-router-dom";

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

export const Movies = () => {
    const [movie, setMovie] = useState<Movie>();
    const { id } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movieById = await getMovieById(Number(id));
                setMovie(movieById);
            } catch (error) {
                console.log("Error fetching movie:", error);
            }
        }
        fetchMovie();
    }, [id])

    return (
        <>
            {
                movie && (
                    <div>
                        <h1>{movie.title}</h1>
                        <p> Data de lançamento: {new Date(movie.release_date).toLocaleDateString('pt-BR')}</p>
                        <p>Gênero: {movie.genres.name}</p>
                        <p>{movie.languages.name}</p>
                        <p>Prêmios Oscar: {movie.oscar_count}</p>
                        <p>Duração do filme: {movie.duration} minutos</p>
                    </div>
                )
            }
        </>
    )
}
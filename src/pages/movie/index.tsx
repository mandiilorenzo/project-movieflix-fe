import { useEffect, useState } from "react"
import { getMovieById } from "../../services/api"
import { useParams } from "react-router-dom";
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
        <S.Main>
            {
                movie && (
                    <S.Movie>
                        <div>
                            <h1>{movie.title}</h1>
                            <p> <span>Data de lançamento:</span> {new Date(movie.release_date).toLocaleDateString('pt-BR')}</p>
                            <p><span>Gênero:</span> {movie.genres.name}</p>
                            <p><span>Linguagem:</span> {movie.languages.name}</p>
                            <p><span>Oscars:</span> {movie.oscar_count}</p>
                            <p><span>Duração do filme:</span> {movie.duration} minutos</p>
                        </div>
                    </S.Movie>
                )
            }
        </S.Main>

    )
}
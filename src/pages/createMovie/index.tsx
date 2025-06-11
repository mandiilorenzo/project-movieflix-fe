import { useForm } from 'react-hook-form';
import { createMovie } from '../../services/api';


interface formData {
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

export const CreateMovie = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<formData>();

    const onSubmit = async (data: formData) => {
        try {
            const response = await createMovie(data);
            return response;
        } catch (error) {
            console.error("Error creating movie:", error);
        }
    };

    return (
        <main>
            <h1>Cadastrar novo filme</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Título do filme"
                    {...register("title", { required: "Título é obrigatório" })}
                />
                {errors.title && <span>{errors.title.message}</span>}

                <input
                    type="date"
                    placeholder="Data de lançamento"
                    {...register("release_date", { required: "Data é obrigatória" })}
                />
                {errors.release_date && <span>{errors.release_date.message}</span>}

                <input
                    type="number"
                    placeholder="Contagem de Oscars"
                    {...register("oscar_count", { required: "Campo obrigatório" })}
                />
                {errors.oscar_count && <span>{errors.oscar_count.message}</span>}

                <input
                    type="number"
                    placeholder="Duração do filme (em minutos)"
                    {...register("duration", { required: "Campo obrigatório" })}
                />
                {errors.duration && <span>{errors.duration.message}</span>}

                <select {...register("genre_id", { required: "Gênero obrigatório" })}>
                    <option value="">Selecione o gênero</option>
                    <option value="1">Ação</option>
                    <option value="2">Suspense</option>
                    <option value="3">Aventura</option>
                    <option value="4">Terror</option>
                    <option value="5">Animação</option>
                    <option value="6">Romance</option>
                    <option value="7">Comédia</option>
                </select>
                {errors.genre_id && <span>{errors.genre_id.message}</span>}

                <select {...register("language_id", { required: "Idioma obrigatório" })}>
                    <option value="">Selecione o idioma</option>
                    <option value="1">Português</option>
                    <option value="2">Inglês</option>
                    <option value="3">Espanhol</option>
                    <option value="4">Francês</option>
                    <option value="5">Japonês</option>
                </select>
                {errors.language_id && <span>{errors.language_id.message}</span>}

                <button type="submit">Criar Filme</button>
            </form>
        </main>
    );
};

import { useForm, Controller } from 'react-hook-form';
import { createMovie } from '../../services/api';
import Select, { GroupBase } from 'react-select';
import { getCustomSelectStyles } from './styleSelect';
import * as S from './style';

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

export type Option = {
    value: number;
    label: string;
};


const languageOptions: Option[] = [
    { value: 1, label: 'Português' },
    { value: 2, label: 'Inglês' },
    { value: 3, label: 'Espanhol' },
    { value: 4, label: 'Francês' },
    { value: 5, label: 'Japonês' }
];

const genreOptions: Option[] = [
    { value: 1, label: 'Ação' },
    { value: 2, label: 'Suspense' },
    { value: 3, label: 'Aventura' },
    { value: 4, label: 'Terror' },
    { value: 5, label: 'Animação' },
    { value: 6, label: 'Comédia' },
    { value: 7, label: 'Romance' }
];

export const CreateMovie = () => {
    const { register, handleSubmit, control, formState: { errors, touchedFields } } = useForm<formData>();

    const onSubmit = async (data: formData) => {
        try {
            const response = await createMovie(data);
            return response;
        } catch (error) {
            console.error("Error creating movie:", error);
        }
    };

    const isValidField = (name: keyof formData) => {
        return touchedFields[name] && !errors[name];
    };

    return (
        <S.Main>
            <h1>Cadastrar novo filme</h1>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.Label htmlFor="title">Título:</S.Label>
                <S.Input
                    type="text"
                    placeholder="Título do filme"
                    $isValid={isValidField("title")}
                    {...register("title", { required: "Campo obrigatório" })}
                />
                {errors.title && <S.ErrorMessage>{errors.title.message || '\u00A0'}</S.ErrorMessage>}

                <S.Label htmlFor="release_date">Data de lançamento:</S.Label>
                <S.Input
                    type="date"
                    placeholder="Data de lançamento"
                    $isValid={isValidField("release_date")}
                    {...register("release_date", { required: "Campo obrigatório" })}
                />
                {errors.title && <S.ErrorMessage>{errors.title.message || '\u00A0'}</S.ErrorMessage>}

                <S.Label htmlFor="oscar_count">Quantidade de Oscars:</S.Label>
                <S.Input
                    type="number"
                    placeholder="Contagem de Oscars"
                    $isValid={isValidField("oscar_count")}
                    {...register("oscar_count", { required: "Campo obrigatório", valueAsNumber: true })}
                />
                {errors.oscar_count && <S.ErrorMessage>{errors.oscar_count.message || '\u00A0'}</S.ErrorMessage>}

                <S.Label htmlFor="duration">Duração do filme:</S.Label>
                <S.Input
                    type="number"
                    placeholder="em minutos"
                    $isValid={isValidField("duration")}
                    {...register("duration", { required: "Campo obrigatório", valueAsNumber: true })}
                />
                {errors.duration && <S.ErrorMessage>{errors.duration.message || '\u00A0'}</S.ErrorMessage>}

                <div>
                    <S.Label>Gênero</S.Label>
                    <Controller
                        name="genre_id"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select<Option, false, GroupBase<Option>>
                                options={genreOptions}
                                placeholder="selecione.."
                                value={genreOptions.find(option => option.value === field.value) || null}
                                onChange={(option) => {
                                    field.onChange(option?.value);
                                    field.onBlur(); // Isso marca como "tocado"
                                }}
                                styles={getCustomSelectStyles(!!isValidField("genre_id"))}
                            />
                        )}
                    />
                    {errors.genre_id && <S.ErrorMessage>Campo obrigatório</S.ErrorMessage>}
                </div>

                <div>
                    <S.Label>Idioma</S.Label>
                    <Controller
                        name="language_id"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select<Option, false, GroupBase<Option>>
                                options={languageOptions}
                                placeholder="selecione.."
                                value={languageOptions.find(option => option.value === field.value) || null}
                                onChange={(option) => {
                                    field.onChange(option?.value);
                                    field.onBlur();
                                }}
                                styles={getCustomSelectStyles(!!isValidField("language_id"))}
                            />
                        )}
                    />
                    {errors.language_id && <S.ErrorMessage>Campo obrigatório</S.ErrorMessage>}
                </div>

                <S.Button type="submit">Criar Filme</S.Button>
            </S.Form>
        </S.Main>
    );
};

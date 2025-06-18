import { useForm } from 'react-hook-form';
import * as S from './style'
import { registerUser } from '../../services/api';

interface FormData {
    email: string;
    password: string;
    name: string; 
}

export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const response = await registerUser(data);
            return response;
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <S.Main>
            <S.Form>
                <h1>Entrar</h1>
                <S.Label htmlFor="email">E-mail:</S.Label>
                <S.Input
                    type="text"
                    id="email"
                    placeholder="e-mail@email.com"
                    {...register("email", { required: true })}
                />
                {errors.email && <S.ErrorMessage>{errors.email.message || '\u00A0'}</S.ErrorMessage>}

                <S.Label htmlFor="senha">Senha:</S.Label>
                <S.Input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    {...register("password", { required: 'Campo obrigatório' })}
                />
                {errors.password && <S.ErrorMessage>{errors.password.message || '\u00A0'}</S.ErrorMessage>}

                <S.Button type="submit">Enviar</S.Button>
            </S.Form>

            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Cadastrar-se</h1>
                <S.Label htmlFor="nome">Nome completo:</S.Label>
                <S.Input
                    type="text"
                    id="nome"
                    placeholder="Nome completo"
                    {...register("name", { required: true })}
                />
                {errors.name && <S.ErrorMessage>{errors.name.message || '\u00A0'}</S.ErrorMessage>}

                <S.Label htmlFor="email-register">E-mail:</S.Label>
                <S.Input
                    type="text"
                    id="email-register"
                    placeholder="e-mail@email.com"
                    {...register("email", { required: true })}
                />
                {errors.email && <S.ErrorMessage>{errors.email.message || '\u00A0'}</S.ErrorMessage>}

                <S.Label htmlFor="password-register">Senha:</S.Label>
                <S.Input
                    type="password"
                    id="password-register"
                    placeholder="Senha"
                    {...register("password", { required: true })}
                />
                {errors.password && <S.ErrorMessage>{errors.password.message || '\u00A0'}</S.ErrorMessage>}

                <S.Button type="submit">Enviar</S.Button>
            </S.Form>
        </S.Main>
    );
}
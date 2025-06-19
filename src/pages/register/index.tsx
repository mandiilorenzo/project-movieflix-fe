import { useForm } from 'react-hook-form';
import * as S from './style'
import { loginUser, registerUser } from '../../services/api';

interface RegisterData {
    email: string;
    password: string | number;
    name: string; 
}

interface LoginData {
    email: string;
    password: string | number;
}

export const Form = () => {
    const { register: registerForm, handleSubmit: handleRegister, formState: { errors: registerErrors } } = useForm<RegisterData>();
    const { register: loginForm, handleSubmit: handleLogin, formState: { errors: loginErrors } } = useForm<LoginData>();

    const onRegisterSubmit = async (data: RegisterData) => {
        try {
            const response = await registerUser(data);
            return response;
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    const onLoginSubmit = async (data: LoginData) => {
        try {
            const response = await loginUser(data);
            return response;
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <S.Main>
            <S.Form onSubmit={handleLogin(onLoginSubmit)}>
                <h1>Entrar</h1>
                <S.Label htmlFor="email">E-mail:</S.Label>
                <S.Input
                    type="text"
                    id="email"
                    placeholder="e-mail@email.com"
                    {...loginForm("email", { required: true })}
                />
                {loginErrors.email && <S.ErrorMessage>{loginErrors.email.message || '\u00A0'}</S.ErrorMessage>}

                <S.Label htmlFor="senha">Senha:</S.Label>
                <S.Input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    {...loginForm("password", { required: 'Campo obrigatório' })}
                />
                {loginErrors.password && <S.ErrorMessage>{loginErrors.password.message || '\u00A0'}</S.ErrorMessage>}

                <S.Button type="submit">Enviar</S.Button>
            </S.Form>

            <S.Form onSubmit={handleRegister(onRegisterSubmit)}>
                <h1>Cadastrar-se</h1>
                <S.Label htmlFor="nome">Nome completo:</S.Label>
                <S.Input
                    type="text"
                    id="nome"
                    placeholder="Nome completo"
                    {...registerForm("name", { required: true })}
                />
                {registerErrors.name && (
                    <S.ErrorMessage>{registerErrors.name.message}</S.ErrorMessage>
                )}

                <S.Label htmlFor="email-register">E-mail:</S.Label>
                <S.Input
                    type="text"
                    id="email-register"
                    placeholder="e-mail@email.com"
                    {...registerForm("email", { required: true })}
                />
                {registerErrors.name && (
                    <S.ErrorMessage>{registerErrors.name.message}</S.ErrorMessage>
                )}

                <S.Label htmlFor="password-register">Senha:</S.Label>
                <S.Input
                    type="password"
                    id="password-register"
                    placeholder="Senha"
                    {...registerForm("password", { required: true })}
                />
                {registerErrors.name && (
                    <S.ErrorMessage>{registerErrors.name.message}</S.ErrorMessage>
                )}

                <S.Button type="submit">Enviar</S.Button>
            </S.Form>
        </S.Main>
    );
}
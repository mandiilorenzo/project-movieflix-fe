import { useForm } from 'react-hook-form';
import * as S from './style'
import { loginUser, registerUser } from '../../services/api';
import { LoginUser, RegisterUser } from '../../types/user';

export const Form = () => {
    const { register: registerForm, handleSubmit: handleRegister, formState: { errors: registerErrors, touchedFields: touchedRegister } } = useForm<RegisterUser>();
    const { register: loginForm, handleSubmit: handleLogin, formState: { errors: loginErrors, touchedFields: touchedLogin  } } = useForm<LoginUser>();

    const onRegisterSubmit = async (data: RegisterUser) => {
        try {
            const response = await registerUser(data);
            return response;
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    const onLoginSubmit = async (data: LoginUser) => {
        try {
            const response = await loginUser(data);
            return response;
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const isValidField = (name: keyof LoginUser) => {
        return touchedLogin[name] && !loginErrors[name];
    };

    const isValidRegisterField = (name: keyof RegisterUser) => {
        return touchedRegister[name] && !registerErrors[name];
    };

    return (
        <S.Main>
            <h1>Seja bem vindo(a) ao Movie<span>flix</span> !</h1>
            
            <S.ContainerForm>
                <S.Form onSubmit={handleLogin(onLoginSubmit)}>
                <h1>Entrar</h1>
                <S.Label htmlFor="email">E-mail:</S.Label>
                <S.Input
                    type="text"
                    id="email"
                    placeholder="e-mail@email.com"
                    $isValid={isValidField("email")}
                    {...loginForm("email", { required: 'Campo obrigatório' })}
                />
                {loginErrors.email && <S.ErrorMessage>{loginErrors.email.message || '\u00A0'}</S.ErrorMessage>}

                <S.Label htmlFor="senha">Senha:</S.Label>
                <S.Input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    $isValid={isValidField("password")}
                    {...loginForm("password", { required: 'Campo obrigatório' })}
                />
                {loginErrors.password && <S.ErrorMessage>{loginErrors.password.message || '\u00A0'}</S.ErrorMessage>}

                <S.Button type="submit">Enviar</S.Button>
            </S.Form>

            <S.Form onSubmit={handleRegister(onRegisterSubmit)}>
                <h1>Cadastrar-se</h1>
                <S.Label htmlFor="name">Nome completo:</S.Label>
                <S.Input
                    type="text"
                    id="name"
                    placeholder="Nome completo"
                    $isValid={isValidRegisterField("name")}
                    {...registerForm("name", { required: 'Campo obrigatório' })}
                />
                {registerErrors.name && (
                    <S.ErrorMessage>{registerErrors.name.message}</S.ErrorMessage>
                )}

                <S.Label htmlFor="email-register">E-mail:</S.Label>
                <S.Input
                    type="text"
                    id="email-register"
                    placeholder="e-mail@email.com"
                    $isValid={isValidRegisterField("email")}
                    {...registerForm("email", { required: 'Campo obrigatório' })}
                />
                {registerErrors.name && (
                    <S.ErrorMessage>{registerErrors.name.message}</S.ErrorMessage>
                )}

                <S.Label htmlFor="password-register">Senha:</S.Label>
                <S.Input
                    type="password"
                    id="password-register"
                    placeholder="Senha"
                    $isValid={isValidRegisterField("password")}
                    {...registerForm("password", { required: 'Campo obrigatório' })}
                />
                {registerErrors.name && (
                    <S.ErrorMessage>{registerErrors.name.message}</S.ErrorMessage>
                )}

                <S.Button type="submit">Enviar</S.Button>
            </S.Form>
            </S.ContainerForm>
            
        </S.Main>
    );
}
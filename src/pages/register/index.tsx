import useForm from './useForm';
import * as S from './style'

export const Form = () => {


    return (
        <S.Main>
            <S.Form>
                <h1>Entrar</h1>
                <S.Label htmlFor="email">E-mail:</S.Label>
                <S.Input
                    type="text"
                    id="email"
                    placeholder="e-mail@email.com" />

                <S.Label htmlFor="senha">Senha:</S.Label>
                <S.Input
                    type="password"
                    id="password"
                />

                <S.Button type="submit">Enviar</S.Button>
            </S.Form>

            <S.Form>
                <h1>Cadastrar-se</h1>
                <S.Label htmlFor="nome">Nome completo:</S.Label>
                <S.Input
                    type="text"
                    id="nome"
                    placeholder="Nome completo" />

                <S.Label htmlFor="email">E-mail:</S.Label>
                <S.Input
                    type="text"
                    id="email"
                    placeholder="e-mail@email.com" />

                <S.Label htmlFor="senha">Senha:</S.Label>
                <S.Input
                    type="password"
                    id="password"
                />

                <S.Button type="submit">Enviar</S.Button>
            </S.Form>
        </S.Main>
    );
}
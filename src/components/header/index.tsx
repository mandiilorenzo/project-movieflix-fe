import * as S from './style'

export const Header = () => {
    return (
        <S.Header>
            <h1>Movieflix 🎬</h1>
            <S.Menu>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Login</a></li>
                </ul>
            </S.Menu>
        </S.Header>
    )
}
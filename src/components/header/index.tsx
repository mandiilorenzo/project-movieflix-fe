import * as S from './style'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <S.Header>
            <Link to={"/"}><h1>Movie<span>flix</span></h1></Link>
            <S.Menu>
                <ul>
                    <Link to={"/"}><li><a>Home</a></li></Link>
                    <Link to={"/register"}><li><a>Login</a></li></Link>
                </ul>
            </S.Menu>
        </S.Header>
    )
}
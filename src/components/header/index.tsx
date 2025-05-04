import * as S from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    return (
        <S.Header>
            <h1>Movieflix <FontAwesomeIcon icon={faFilm} /></h1>
            <S.Menu>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Login</a></li>
                </ul>
            </S.Menu>
        </S.Header>
    )
}
import styled from "styled-components";

export const Header = styled.header`
    background-color: #141414;
    border-bottom: 2px solid #7B2CBF;
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 35px;

    h1 {
        color: #fff;
        font-weight: 400;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        span {
            color: #33ccff;
            }
        }
    
    h1:hover {
        color:
        transition: 0.3s ease-in-out;
        transform: translateY(-2px);
        }
`

export const Menu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
    }

    li {
        color: #fff;
        font-size: 24px;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
    }

    li:hover {
    color:#33ccff;
    transform: translateY(-2px);
    }
`
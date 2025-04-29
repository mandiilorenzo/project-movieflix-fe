import styled from "styled-components";

export const Header = styled.header`
    background-color: #121212;
    border-bottom: 2px solid #7B2CBF;
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 35px;

    h1 {
        color: #fff;
        font-weight: 400;
        cursor: pointer;
        }
    
    h1:hover {
        color: #7B2CBF;
        transition: 0.3s;
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
    }

    li:hover {
    color: #7B2CBF;
    transition: 0.3s;
    }
`
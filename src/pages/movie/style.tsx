import styled from "styled-components";

export const Main = styled.main`
    background-color: #141414;
    margin: auto;
    height: 100vh;
    display: flex;
`

export const Movie = styled.div`
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1e1e1e;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    padding: 20px;
    max-width: 100%;
    height: 400px;
    margin: auto;
    gap: 20px;
    padding: 30px;

    h1 {
        font-size: 40px;
        font-weight: 400;
        letter-spacing: 2px;
        font-family: "Bebas Neue", sans-serif;
        margin-bottom: 40px;
        text-align: center;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 10px;
    }

    span {
        color: #33ccff;
        }
`
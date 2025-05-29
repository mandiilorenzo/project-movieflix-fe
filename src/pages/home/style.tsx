import styled from "styled-components";

export const Main = styled.main`
    height: 100vh;
    margin: auto;
    background-color: #141414;
    font-family: 'Roboto', sans-serif;
    padding-bpottom: 30px;

    h1 {
        color:#ffffff;
        text-align: center;
        padding-top: 40px;
        margin-bottom: 20px;
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 1px;
        font-size: 40px;
        font-weight: 400;
    }
`

export const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
    width: 900px;
    max-width: 1200px;
    margin: auto;
    padding-bottom: 20px;
`

export const MovieItem = styled.li`
    background-color: #1e1e1e;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 30px;
    justify-content: center;
    gap: 20px;
    text-align: center;
    width: 100%;
    height: 185px;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 0 20px rgba(255, 0, 255, 0.4);
    }

    h2 {
        color: #ffffff;
        font-size: 28px;
        font-weight: 400;
        letter-spacing: 1px;
        font-family: "Bebas Neue", sans-serif;
        cursor: pointer;
        margin-bottom: 8px;
        transition: 0.3s ease-in-out;

        &:hover {
            &:hover {
                color:#33ccff;
                }
        }
`

export const MovieButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;

`

export const Button = styled.button`
    background-color: #a100ff;
    border: none;
    color: #ffffff;
    padding: 8px 12px;
    width: 120px;
    border-radius: 6px;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    align-self: center;

    &:hover {
        background-color: #8800cc;
        box-shadow: 0 0 10px rgba(161, 0, 255, 0.4);
        transform: translateY(-2px)
        }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalContent = styled.div`
    background-color: #1e1e1e;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 300px;
    max-width: 100%;
    height: 300px;
    padding: 30px;
    color: #ffffff;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: 200;
    text-align: center;
`

export const Input = styled.input`
    background-color: #1e1e1e;
    border: 1px solid #a100ff;
    color: #ffffff;
    padding: 8px 12px;
    width: 100%;
    border-radius: 6px;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 0 10px rgba(161, 0, 255, 0.4);
        transform: translateY(-2px)
        }
    
    &:focus {
        outline: none;
        border: 1px solidrgb(138, 34, 132);
        box-shadow: 0 0 10px rgba(255, 0, 242, 0.4);
        transform: translateY(-2px)
    }
`
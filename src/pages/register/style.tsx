import styled from "styled-components";
import { InputProps } from "../../types/input";

export const Main = styled.div`
    background-color: #141414;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;

    h1 {
        color: #ffffff;
        font-size: 60px;
        font-weight: 300;
        letter-spacing: 1.5px;
        font-family: "Bebas Neue", sans-serif;

        span {
            color: #33ccff;
            }
        }
    }
`

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
    max-width: 1200px;
    flex-wrap: wrap;
`


export const Form = styled.form`
    background-color: #1e1e1e;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    padding: 40px;
    margin-top: 30px;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    width: 500px;
    height: 500px;

    h1 {
        color: #ffffff;
        font-size: 35px;
        font-weight: 400;
        letter-spacing: 1px;
        font-family: "Bebas Neue", sans-serif;
        text-align: center;
        }
`

export const Input = styled.input<InputProps>`
    background-color: #1e1e1e;
    border: 1px solid ${({ $isValid }) => ($isValid ? "#00ff88" : "#a100ff")};
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
        border: 1px solid ${({ $isValid }) => ($isValid ? "#00ff88" : "#a100ff")};
        box-shadow: 0 0 10px
        ${({ $isValid }) =>
        $isValid ? "rgba(0, 255, 136, 0.4)" : "rgba(161, 0, 255, 0.4)"};
        transform: translateY(-2px);
    }
`

export const Label = styled.label`
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: "Roboto", sans-serif;
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

export const ErrorMessage = styled.span`
    height: 10px;
    display: block;
    color: #ff4d4d;
    font-size: 14px;
    font-weight: 700;
    margin-top: -10px;
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
`
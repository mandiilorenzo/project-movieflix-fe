import Swal from "sweetalert2";
import { Movie } from "../types/movie";

export const getMovies = async () => {
    const response = await fetch("http://localhost:3000/movies", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    );
    return await response.json();
}

export const getMovieById = async (id: number) => {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
    return await response.json();
}

export const deleteMovieById = async (id: number) => {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
    if (!response.ok) {
        throw new Error("Erro ao deletar filme");
    }
    Swal.fire({
        title: "Pronto!",
        text: "Filme removido com sucesso!",
        icon: "success"
    });
}

export const updateMovieById = async (id: number, data: Movie) => {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error("Erro ao atualizar filme");
    }
    Swal.fire({
        title: "Pronto!",
        text: "Filme atualizado com sucesso!",
        icon: "success"
    });
}

export const createMovie = async (data: Movie) => {
    const response = await fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data)
    });
    const responseBody = await response.json().catch(() => null);
    if (!response.ok) {
        console.error("Erro ao criar filme:", response.status, responseBody);
        throw new Error(responseBody?.message || "Erro ao criar filme");
    }
    Swal.fire({
        title: "Pronto!",
        text: "Filme criado com sucesso!",
        icon: "success"
    });
}

export const registerUser = async (data: { name: string, email: string, password: string | number }) => {
    const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const responseBody = await response.json().catch(() => null);
    if (!response.ok) {
        console.error("Erro ao registrar usuário:", response.status, responseBody);
        throw new Error(responseBody?.message || "Erro ao registrar usuário");
    }
    Swal.fire({
        title: "Pronto!",
        text: "Usuário registrado com sucesso!",
        icon: "success"
    });
}

export const loginUser = async (data: { email: string, password: string | number }) => {
    const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const responseBody = await response.json().catch(() => null);
    if (!response.ok) {
        console.error("Erro ao fazer login:", response.status, responseBody);
        throw new Error(responseBody?.message || "Erro ao fazer login");
    }
    localStorage.setItem("token", responseBody.token);
    Swal.fire({
        title: "Pronto!",
        text: "Usuário logado com sucesso!",
        icon: "success"
    });

    return responseBody;
}

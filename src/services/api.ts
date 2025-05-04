export const getMovies = async () => {
    const response = await fetch("http://localhost:3000/movies", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    );
    return await response.json();
}

export const getMovieById = async (id: number) => {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

export const deleteMovieById = async (id: number) => {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        return;
    } else {
        throw new Error("Erro ao deletar filme");
    }
}


//implementar a função de atualização de filmes por id
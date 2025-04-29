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

//implementar a função de remoção de filmes por id
//implementar a função de atualização de filmes por id
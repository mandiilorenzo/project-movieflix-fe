interface Movie {
    id: number,
    title: string,
    release_date: string,
    genre_id: number,
    language_id: number,
    oscar_count: number,
    duration: number,
    genres: {
        id: number,
        name: string
    },
    languages: {
        id: number,
        name: string
    }
}

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

export const updateMovieById = async (id: number, data: Movie) => {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Erro ao atualizar filme");
    }
}

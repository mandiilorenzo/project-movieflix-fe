

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
const URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=18b674495b6e79918fbaf0f167a9d6d0&page=1';

export async function getAllMovies() {
    const response = await fetch(URL);

    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    const data = await response.json()
    return data.results
}

export async function getMovieById(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=18b674495b6e79918fbaf0f167a9d6d0`)

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    const data = await response.json()
    return data
}
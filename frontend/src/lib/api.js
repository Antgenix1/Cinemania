const URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=18b674495b6e79918fbaf0f167a9d6d0&page=1';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=';

export async function getAllMovies() {
    const response = await fetch(URL);

    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    const data = await response.json()
    return data.results
}



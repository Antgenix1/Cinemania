const URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=18b674495b6e79918fbaf0f167a9d6d0&page=1';
const ReviewURL = 'http://localhost:5000/api/v1/reviews/'
const SearchURL = 'https://api.themoviedb.org/3/search/movie?&api_key=18b674495b6e79918fbaf0f167a9d6d0&query='


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

//Review API
export async function getReviews(id) {
    const response = await fetch(`${ReviewURL}/movie/${id}`)

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    const data = await response.json()
    return data
}

export async function createReview(post) {
    const response = await fetch(`${ReviewURL}new`, {
        method: "POST",
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }


    const data = await response.json()
    console.log(data)
    return data
}

//Search API Request
export async function getSearchedMovie(query) {
    const response = await fetch(`${SearchURL}${query}`)

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    const data = await response.json()
    return data.results
}
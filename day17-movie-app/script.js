
import MOVIE_API_KEY from './config.js';

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${MOVIE_API_KEY}&page=1`
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query="`

const form = document.getElementById("form")
const search = document.getElementById('search')

const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== "") {
        getMovies( SEARCH_URL+ searchTerm)
        search.value = ""
    } else {
        window.location.reload()
    }
})

getMovies(API_URL)



import MOVIE_API_KEY from './config.js';


const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${MOVIE_API_KEY}&page=1
`

console.log(API_URL)

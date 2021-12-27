const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// const generateJoke = () => {
//     fetch("https://icanhazdadjoke.com/", config)
//         .then((response) => response.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }

const generateJoke = async () => {
    const config = {                headers: { "Accept": "application/json" } }

    const response = await fetch("https://icanhazdadjoke.com/", config)
    const data = await response.json()
    jokeEl.innerHTML = data.joke
}

jokeBtn.addEventListener('click', generateJoke)

generateJoke()
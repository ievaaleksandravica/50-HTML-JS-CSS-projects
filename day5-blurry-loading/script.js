const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0

 const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const blurring = () => {
    load ++
    if(load > 99) {
        clearInterval(int)
    }
    console.log(load)

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 1, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 1, 100, 30, 0)}px)`
}

const int = setInterval(blurring, 30)
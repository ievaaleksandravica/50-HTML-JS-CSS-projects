const password = document.getElementById("password")
const background = document.getElementById("background")
const blurStep = 2
let blurLevel = 20


password.addEventListener("keyup", (e) => {
    const length = password.value.length
    blurLevel -= blurStep
    console.log(blurLevel)
    background.style.filter = `blur(${blurLevel}px)`
})
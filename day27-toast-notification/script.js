const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = [
    "Entry Successfully Saved",
    "Login Successful",
    "Account Updated",
    "Payment Method Added"
]

const colors = [
    "#FF0D0D",
    "#FF4E11",
    "#FF8E15",
    "#FAB733",
    "#ACB334",
    "#69B34C"
]

button.addEventListener("click", () => {
    toasts.innerHTML = ""
    createNotification()
})



function createNotification() {
    const div = document.createElement("div")
    div.innerText = getRandomElement(messages) ;
    div.classList.add("toast")
    div.style.color = getRandomElement(colors)
    toasts.appendChild(div)
    setTimeout(()=>{
        toasts.innerHTML = ""
    }, 3000)
    
}

function getRandomElement(selection) {
    return selection[Math.floor(Math.random() * selection.length)]
}


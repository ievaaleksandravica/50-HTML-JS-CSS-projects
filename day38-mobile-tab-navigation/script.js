const navItems = document.querySelectorAll("nav ul li")
const images = document.querySelectorAll(".phone img")

navItems.forEach((item, idx) => {
    item.addEventListener("click", () => {
        images.forEach((image) => {
            image.classList.remove("show")
        })
        const image = images[idx]
        image.classList.add("show")

        navItems.forEach((allItems) => {
            console.log(allItems)
            allItems.classList.remove("active")

        })

        item.classList.add("active")
    })
})
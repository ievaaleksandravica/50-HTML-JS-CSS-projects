const tagsEl = document.getElementById('tags')
const textareaEl = document.getElementById('text-area')

const createTags = (input) => {
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())
    tagsEl.innerHTML = ""
    tags.forEach((tag) => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

const pickRandomTag = () => {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

const highlightTag = (tag) => {
    tag.classList.add('highlight')
}

const unhighlightTag = (tag) => {
    tag.classList.remove('highlight')
}

const randomSelect = () => {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100);
    }, times * 100);
}

textareaEl.focus()

textareaEl.addEventListener("keyup",(event) => {
    createTags(event.target.value)

    if(event.key === "Enter") {
        setTimeout(() => {
            event.target.value = ""
        }, 10)
        randomSelect()
    }
})
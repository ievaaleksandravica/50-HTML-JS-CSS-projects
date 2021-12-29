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

textareaEl.focus()

textareaEl.addEventListener("keydown",(event) => {
    createTags(event.target.value)
})
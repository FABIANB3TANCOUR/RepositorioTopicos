const body = document.querySelector('body')
const div = document.createElement('div')
div.style.height = '500px'
div.style.backgroundColor = 'purple'

const parrafo = document.createElement('p')
parrafo.textContent = 'yo soy el parrafo'

div.appendChild(parrafo)
body.appendChild(div)
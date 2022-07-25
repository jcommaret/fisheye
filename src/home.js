import './styles/main.scss'

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'home'

// Append SVG and heading nodes to the DOM
const app = document.querySelector('#home')
app.append(heading)
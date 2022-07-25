import './styles/main.scss'

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Photographers'

// Append SVG and heading nodes to the DOM
const app = document.querySelector('#photographers')
app.append(heading)
// styles
import './styles/main.scss'
import picture from './images/logo.png'

const app = document.querySelector('#home')

const header = document.createElement('header')
header.setAttribute("aria-role", "banner")
header.appendChild(indexLink)

const indexLink = document.createElement('a')
indexLink.setAttribute("href","index.html")
indexLink.appendChild(logoPicture)

const logoPicture = document.createElement('img')
logoPicture.setAttribute("src", picture)
logoPicture.setAttribute("alt", "Logo" )
logoPicture.classList.add("header-logo")

app.append(header)
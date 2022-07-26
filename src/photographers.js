// Test import of a JavaScript module
import { plop } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
const logoP = document.createElement('img')
logoP.src = webpackLogo

const headingP = document.createElement('h1')
headingP.textContent = plop()

// Test a background image url in CSS
const imageBackgroundP = document.createElement('div')
imageBackgroundP.classList.add('image')

// Test a public folder asset
const imagePublicP = document.createElement('img')
imagePublicP.src = '/assets/example.png'

const photographersP = document.getElementById('photographers')

photographersP.append(logoP, headingP, imageBackgroundP, imagePublicP)

// Imports SCSS
import '../../sass/main.scss'

// Imports JS
import { getData } from "../fetch_api"
import { photographerFactory } from "../factories/AllPhotographers"

// Display data from photographers
export async function displayData(photographers) {
    const photographersSection = 
    document.querySelector(".photographer_section")
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer)
        const userCardDOM = photographerModel.getUserCardDOM()
        photographersSection.appendChild(userCardDOM)
    })
}

// Init function
export async function init() {
    const { photographers } = await getData()
    displayData(photographers)
}

init()
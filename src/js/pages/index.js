import { getData } from "../fetch_api";
import { photographerFactory } from "../factories/photographer";

export async function renderPhotographers(){
    // assigne a photographers le tableau renvoyé par le "get photographers"
    const photographers = await getData();    
    // retourne le tableau photographers seulement une fois
}

export async function displayPhotographers(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

export function init() {
    const { photographers } = getData();
    displayPhotographers(photographers);
};

init();

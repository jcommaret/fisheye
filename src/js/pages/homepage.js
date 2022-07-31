import { photographerFactory } from "../factories/homepage";
import { getData } from "fetchApi";

export async function renderPhotographers(){
    // assigne a photographers le tableau renvoyé par le "get photographers"
    let photographers = await getData();    
    // retourne le tableau photographers seulement une fois
    return ({
        photographers: [photographers]})
}

export async function displayPhotographers(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

export async function init() {
    const { photographers } = await getData();
    displayPhotographers(photographers);
};

init();
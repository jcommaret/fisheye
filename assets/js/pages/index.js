import { getData } from "../fetch_api"
import { photographerFactory } from "../../js/factories/photographer";


export async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    const photographers = await getData();
        
    // et bien retourner le tableau photographers seulement une fois
    return ({
        photographers: [photographers]})
}

export async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

export async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();

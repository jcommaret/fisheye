// sass
import '../../sass/main.scss';

import { getData } from "../fetch_api"
import { photographerFactory } from "../factories/photographer";

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
    const { photographers } = await getData();
    displayData(photographers);
};

import getAllPhotographers from '@/js/fetch_api';

async function displayData() {
    const { photographers } = getAllPhotographers();
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

export default async function init() {
    const { photographers } = getAllPhotographers();
    // Récupère les datas des photographes
    displayData(photographers);
};

init();

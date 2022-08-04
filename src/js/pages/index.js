import '@/js/factories/profile';
require ('@/js/fetch_api');

const api_url = "https://raw.githubusercontent.com/jcommaret/fisheye/master/src/data/photographers.json";

async function getAllPhotographers() {
    // et bien retourner le tableau photographers seulement une fois
    return ({
        photographers: [photographers]})
}

getAllPhotographers();

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();

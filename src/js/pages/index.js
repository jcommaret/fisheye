import '@/js/factories/profile';
require ('@/js/fetch_api');

const api_url = "https://raw.githubusercontent.com/jcommaret/fisheye/master/src/data/photographers.json";

async function getPhotographers(api_url, name) {
    // Penser à remplacer par les données récupérées dans le json
    const photographers = getPhotographers(api_url, name)
    // et bien retourner le tableau photographers seulement une fois
    return ({
        photographers: [...photographers]})
}

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

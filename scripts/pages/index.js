
// URL du json
const api_url = "/data/photographers.json";

async function getPhotographers() {
    // fetch de l'api
    let url = api_url;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderPhotographers(){
    // assigne a photographers le tableau renvoyé par le "get photographers"
    let photographers = await getPhotographers();    
    // retourne le tableau photographers seulement une fois
    return ({
        photographers: [photographers]})
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
    
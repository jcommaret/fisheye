// URL du json
const api_url = "/data/photographers.json";

async function getData() {
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
    let photographers = await getData();    
    // retourne le tableau photographers seulement une fois
    return ({
        photographers: [photographers]})
}

async function renderMedias(){
    // assigne a medias les medias
    let media = await getData();
    return ({
        media: [media]})    
}

async function displayPhotographers(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function displayMedias(media) {
    const mediaSection = document.querySelector(".media_section");
    media.forEach((m) => {
        const mediaModel = mediaFactory(m);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });
};

async function init() {
    const { photographers, media} = await getData();
    displayPhotographers(photographers);
    displayMedias(media);
};

init();
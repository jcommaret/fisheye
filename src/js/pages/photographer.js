import { getMediaById } from "../fetch_api";
import { mediaFactory } from "../factories/media";

// Recupération de l'id du photographe
const params = new URLSearchParams(window.location.search),
    photographerId = params.get("photographerId");

async function renderMedias(){
    let media = await getMediaById();    
    return ({
        media: [media]})
}

async function displayMedias(media) {
    const mediasSection = document.querySelector(".medias_section");
    
    media.forEach((m) => {
        const mediaModel = mediaFactory(m);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);
    });
};

async function init() {
    const { media } = await getMediaById();
    displayMedias(media);
};
renderMedias();
init();

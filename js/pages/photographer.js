// Imports SCSS
import '../../sass/main.scss'; 

// Import modale et lightbox
import { Modal } from '../utils/modal';
import { LightBox } from '../utils/lightbox';

import "../utils/form"
// import JS functions
import { getMediaById } from "../fetch_api";
import { MediaFactory } from "../factories/media";

// working
export async function displayMedias(media) {
  const mediasSection = document.querySelector(".medias_section");
  const lightboxSection = document.querySelector(".lightbox_section");
  media.forEach((m) => {
    const type = m.image? "image" : "video" ;   
    const mediaModel = new MediaFactory(m, type);
    mediasSection.innerHTML+=mediaModel.render();
    lightboxSection.innerHTML+=mediaModel.render();
  });
};



const init = async () => {
  const id = new URL(document.location).searchParams.get("id");
  // const id = params.get("photographerid"); 
  const medias = await getMediaById(parseInt(id))
  displayMedias(medias);
}

init();
// Imports SCSS
import '../../sass/main.scss'; 

// Import modale et lightbox
import { Modal } from '../utils/modal';

import "../utils/form"
// import JS functions
import { getMediaById, getPhotographersById } from "../fetch_api";
import { MediaFactory } from "../factories/media";

// Working
export async function displayMedias(media) {
  const mediasSection = document.querySelector(".medias_section");
  media.forEach((m) => {
    const type = m.image? "image" : "video" ;   
    const mediaModel = new MediaFactory(m, type);
    mediasSection.innerHTML+=mediaModel.render();  
  });
};

const init = async () => {
  const id = new URL(document.location).searchParams.get("id");
  const medias = await getMediaById(parseInt(id))
  const photographer = await getPhotographersById(parseInt(id))  
  
  
  displayMedias(medias);
}

init();
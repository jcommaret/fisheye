// Imports SCSS
import '../../sass/main.scss'; 

// Import modale et lightbox
import { Modal } from '../utils/modal';

import "../utils/form"
// import JS functions
import { getMediaById, getPhotographersById } from "../fetch_api";
import { MediaFactory } from "../factories/media";
import { PhotographerFactory } from "../factories/photographer";

// Working
export async function displayMedias(media) {
  const mediasSection = document.querySelector(".medias_section");
  media.forEach((m) => {
    const type = m.image? "image" : "video" ;   
    const mediaModel = new MediaFactory(m, type);
    mediasSection.innerHTML+=mediaModel.render();  
  });
};

export async function displayPhotographer(photographers) {
  const photographerSection = document.querySelector(".photographer_section");
  photographers.forEach((p) => {
    const type = p.image? "image" : "video" ;   
    const photographerModel = new PhotographerFactory(p, type);
    photographerSection.innerHTML+=photographerModel.render();  
  });
};

const init = async () => {
  const id = new URL(document.location).searchParams.get("id");
  const medias = await getMediaById(parseInt(id))
  const photographers = await getPhotographersById(parseInt(id))    
  displayMedias(medias);
  displayPhotographer(photographers);
}


let dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', (e) => {
  if (dropdown.classList.contains('closed')) {
    dropdown.classList.remove('closed')
  } else {
  dropdown.classList.add('closed')    
  }
})

init();
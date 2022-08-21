// Imports SCSS
import '../../sass/main.scss'; 

// Import modale (se présente uniquement au clic)
import { Modal } from '../utils/modal';

// import JS functions
import { getMediaById } from "../fetch_api";
import { mediaFactory } from "../factories/media";

export async function displayMedias(media) {
  const mediasSection = document.querySelector(".medias_section");
  media.forEach((m) => {
      const mediaModel = mediaFactory(m);
      const mediaCardDOM = mediaModel.getMediaCardDOM();
      mediasSection.appendChild(mediaCardDOM);
  });
};

const init = async () => {
  const id = new URL(document.location).searchParams.get("id");
  // const id = params.get("photographerid"); 
  const medias = await getMediaById(parseInt(id))
  displayMedias(medias); 

  
}

init();
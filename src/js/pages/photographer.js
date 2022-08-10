import { getData } from "../fetch_api";
import { mediaFactory } from "../factories/media";

export async function renderMedias(){
  // assigne a medias le tableau renvoyé par le "get medias"
  const media = await getMedias();    
  // retourne le tableau photographers seulement une fois
}

export async function displayMedias(media) {
  const mediasSection = document.querySelector(".medias_section");
  media.forEach((m) => {
      const mediaModel = mediaFactory(m);
      const mediaCardDOM = mediaModel.getMediaCardDOM();
      mediasSection.appendChild(mediaCardDOM);
  });
};

export async function init() {
  const { media } = await getData();
  displayMedias( media );
};

init();

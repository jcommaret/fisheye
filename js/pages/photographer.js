// sass
import '../../sass/main.scss';

// js
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
  
  console.log(medias);
  console.log(id);
}

init();

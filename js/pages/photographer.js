// Imports SCSS
import '../../sass/main.scss'; 
import '../utils/fa';

// Import modale
import * as modalForm from '../utils/modal';
import * as lightbox from '../utils/lightbox';
import * as ChangeSlide from '../utils/slider';

import "../utils/form";
// import JS functions
import { getMediaById, getPhotographersById } from "../fetch_api";
import { MediaFactory } from "../factories/media";
import { PhotographerFactory } from "../factories/photographer";

import { Dropdown } from '../utils/dropdown';
import { CopyPhotographerName, CopyPrice } from '../utils/copyPhotographerName';
import { sortbyDate, sortbyLikes, sortbyTitle } from '../utils/filters';
import { getTotalLikes, IncrementLikes } from '../utils/likes';


// Display medias
export async function displayMedias(media) {
  const mediasSection = document.querySelector(".medias_section");
  mediasSection.innerHTML=" "; 
  media.forEach((m) => {
    const type = m.image? "image" : "video" ;   
    const mediaModel = new MediaFactory(m, type);
    mediasSection.innerHTML+=mediaModel.render(); 
  });
};

// Display photographers
export async function displayPhotographer(photographers) {
  const photographerSection = document.querySelector(".photograph");
  const type = photographers.portrait? "image" : "video" ;   
  const photographerModel = new PhotographerFactory(photographers, type);
  photographerSection.innerHTML+=photographerModel.render(); 
  modalForm.init(); 
  lightbox.init();
  ChangeSlide.init();
};

const init = async () => {
  const id = new URL(document.location).searchParams.get("id");
  const medias = await getMediaById(parseInt(id));
  const photographers = await getPhotographersById(parseInt(id));
  displayMedias(medias);
  displayPhotographer(photographers);
  Dropdown();
  CopyPhotographerName();
  CopyPrice();
  getTotalLikes(medias);  
  sortbyDate(medias);
  sortbyLikes(medias);
  sortbyTitle(medias);
  IncrementLikes()
};

init();
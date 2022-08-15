import '@/sass/main.scss';
import { getMediaById, getPhotographerById } from './js/fetch_api';

const url = document.location.href 
const params = new URLSearchParams(window.location.search);
const id = params.get("photographerId");

if (url.includes("photographer.html")){
  getPhotographerById(id);
  getMediaById(id);
};




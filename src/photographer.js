import '@/sass/main.scss';
import { getPhotographerById } from "./js/fetch_api";

const params = new URLSearchParams(window.location.search);
const id = params.get("photographerId");
console.log(id);

getPhotographerById(id);


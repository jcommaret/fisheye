import { displayMedias } from "../pages/photographer";

export async function sortbyDate(medias){
  const btnDate = document.querySelector('.btn.date');
  btnDate.addEventListener('click', (e) => {
    medias.sort(function(a, b)
    { return new Date(b.date) - new Date(a.date)});;
    displayMedias(medias);
})};

export async function sortbyLikes(medias){
  const btnLikes = document.querySelector('.btn.likes');
  btnLikes.addEventListener('click', (e) => {
    medias.sort(function(a, b)
    { return b.likes - a.likes })
    displayMedias(medias);
})};

export async function sortbyTitle(medias){
  const btnTitle = document.querySelector('.btn.title');
  btnTitle.addEventListener('click', (e) => {   
    medias.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    }
  );
  displayMedias(medias);
})};
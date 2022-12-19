// Description: Slider de médias, avec titre, et bouton next/previous

// Variables globales
let medias = [];
let mediasTitle = [];

// TODO : Numéro du slide (a updater avec le numero du slide courant quand on click sur une image)
let numero = 0;

// Changement de slide
export function ChangeSlide(sens) {
  // Datas récupérées dans le DOM
  let slide = [...medias];
  let slideTitle = [...mediasTitle];
  
  // Changement de slide
  numero = numero + sens;

  if (numero < 0)
      numero = slide.length - 1

  if (numero > slide.length - 1)
      numero = 0;
  
  // Récupération des données du slide
  const media = slide[numero];
  const mediaTitle = slideTitle[numero];

  // Construction du slide
  const mediaContent = buildMedia(media.tagName, media.src, mediaTitle.innerHTML);
  
  // Affichage du slide
  document.getElementById("slide").innerHTML = mediaContent;
}

// Construction du slide
function buildMedia(tagName, source, title) {
  if (tagName.toLowerCase() === "img"){
    return `<img src="${source}" alt=""/><h2>${title}</h2>`;

  }else if (tagName.toLowerCase() === "video"){
    return `<video src="${source}" controls></video><h2>${title}</h2>`;
  }
}

// Initialisation du slider
export function init() {
  // Récupération des médias et des titres dans le DOM
  medias =  Array.from(document.querySelectorAll(".media-media"));
  mediasTitle =  Array.from(document.querySelectorAll(".media-title"));
  // Récupération des boutons next/previous
  const next = document.querySelector(".next");
  const previous = document.querySelector(".previous");
  // Ajout des évènements
  next.addEventListener("click", () => ChangeSlide(1));
  previous.addEventListener("click", () => ChangeSlide(-1));
}
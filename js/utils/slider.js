// Description: Slider de médias, avec titre, et bouton next/previous

// Variables globales
let medias = [];
let mediasTitle = [];;
// TODO : Numéro du slide (a updater avec le numero du slide courant quand on click sur une image)
let numero = [];

// Changement de slide
export function ChangeSlide(sens) {
  // Datas récupérées dans le DOM
  let slide = [...medias];
  let slideTitle = [...mediasTitle];
  
  if (numero < 0)
      numero = slide.length - 1

  if (numero > slide.length - 1)
      numero = 0;
  
  // Récupération des données du slide
  const media = slide[numero-1];
  const mediaTitle = slideTitle[numero-1];
  console.log(media, mediaTitle);

  // Construction du slide
  const mediaContent = buildMedia(media.tagName, media.src, mediaTitle.innerHTML);
  
  // Affichage du slide
  document.getElementById("slide").innerHTML = mediaContent;
  
  // Changement de slide
  numero = numero + sens;
}

// Récupération du média courant
export function setCurrentMedia(event){
  const node=event.target;
  if(node.tagName.toLowerCase()=== "img" || node.tagName.toLowerCase()=== "video" ){
    // Récupération du numéro du slide
    numero = medias.findIndex(media => media===node)
    if(numero){
      ChangeSlide(0)
      console.log(numero);
    }
  }
}

// Construction du slide
function buildMedia(tagName, source, title) {
  // Si le tagname est une image, on retourne une balise img
  if (tagName.toLowerCase() === "img"){
    return `<img src="${source}" alt=""/><h2>${title}</h2>`;
  }
  // Si le tagname est une video, on retourne une balise video
  else if (tagName.toLowerCase() === "video"){
    return `<video src="${source}" controls></video><h2>${title}</h2>`;
  }
}

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
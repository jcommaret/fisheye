// Description: Slider de médias, avec titre, et bouton next/previous

// Variables globales
let medias = [0];
let mediasTitle = [0];;
// TODO : Numéro du slide (a updater avec le numero du slide courant quand on click sur une image)
let numero = [0];

// Changement de slide
export function ChangeSlide(sens) {
  // Récupération du slide courant
  let slide = [...medias];
  let media = slide[numero];
  // recupération du titre du slide courant
  let slideTitle = [...mediasTitle];  
  let mediaTitle = slideTitle[numero];
  // Récupération des données du slide
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
      ChangeSlide(1)
    }
  }
}

// Construction du slide
function buildMedia(tagName, source, title) {
  // Si le tagname est une image, on retourne une balise img
  console.log(tagName);
  if (tagName.toLowerCase() === "img"){
    return `<img src="${source}" alt=""/><h2>${title}</h2>`;
  }
  else if(tagName.toLowerCase() == undefined){
    return `<p>No Media</p>`;
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
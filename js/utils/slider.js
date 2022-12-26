// Description: Slider de médias, avec titre, et bouton next/previous

// Variables globales
let medias = []
let mediasTitle = []
// TODO : Numéro du slide (a updater avec le numero du slide courant quand on click sur une image)
let numero = 0

// Changement de slide
export function ChangeSlide(sens) {
  // Changement de slide
  numero = numero + sens
  // Si on arrive au bout du tableau, on revient au début
  if (numero >= medias.length) {
    numero = 0
  }
  else if (numero < 0) {
    numero = medias.length - 1
  }
  let media = medias[numero]
  // recupération du titre du slide courant  
  let mediaTitle = mediasTitle[numero]
  // Récupération des données du slide
  // Construction du slide
  const mediaContent = buildMedia(
    media.tagName, 
    media.src, 
    mediaTitle.innerHTML
  )
  // Affichage du slide
  document.getElementById("slide").innerHTML = mediaContent
}

// Récupération du média courant
export function setCurrentMedia(event){
  const node=event.target
  if( node.tagName.toLowerCase()=== "img" || 
      node.tagName.toLowerCase()=== "video" 
    )
  {
    // Récupération du numéro du slide
    numero = medias.findIndex(media => media===node)
    if(numero != undefined ){
      ChangeSlide(0)
    }
  }
}

// Construction du slide
function buildMedia(tagName, source, title) {
  // Si le tagname est une image, on retourne une balise img
  console.log(tagName)
  if (tagName.toLowerCase() === "img"){
    return `<img src="${source}" alt=""/><h2>${title}</h2>`
  }
  else if(tagName.toLowerCase() === undefined){
    return `<p>No Media</p>`
  }
  // Si le tagname est une video, on retourne une balise video
  else if (tagName.toLowerCase() === "video"){
    return `<video src="${source}" controls></video><h2>${title}</h2>`
  }
}

export function init() {
  // Récupération des médias et des titres dans le DOM
  medias =  Array.from(
    document.querySelectorAll(".media-media")
  )
  mediasTitle =  Array.from(
    document.querySelectorAll(".media-title")
  )
  
  // Récupération des boutons next/previous
  const next = document.querySelector(".next")
  const previous = document.querySelector(".previous")
  
  // Ajout des évènements
  next.addEventListener("click", () => ChangeSlide(1))
  previous.addEventListener("click", () => ChangeSlide(-1))
}
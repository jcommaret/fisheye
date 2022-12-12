let medias = [];
let numero = 0;

export function ChangeSlide(sens) {
  let slide = [...medias];
  numero = numero + sens;
  if (numero < 0)
      numero = slide.length - 1;
  
  if (numero > slide.length - 1)
      numero = 0;
      
  document.getElementById("slide").src = slide[numero].src;
}


export function init() {
  medias =  Array.from(document.querySelectorAll(".media-media"));
  const next = document.querySelector(".next");
    const previous = document.querySelector(".previous");
    next.addEventListener("click", () => ChangeSlide(1));
    previous.addEventListener("click", () => ChangeSlide(-1));
}
let medias = [];
let numero = 0;

export function ChangeSlide(sens) {
  let slide = [...medias];
  numero = numero + sens;
  if (numero < 0)
      numero = slide.length - 1;
  if (numero > slide.length - 1)
      numero = 0;
  const media = slide[numero];
  const node_= buildMedia(media.tagName, media.src);
  document.getElementById("slide").innerHTML = node_;
}

function buildMedia(tagName, source) {
  if (tagName.toLowerCase() === "img"){
    return `<img src="${source}" alt=""/> `;
  }else if (tagName.toLowerCase() === "video"){
    return `<video src="${source}" controls></video>`;
  }
}

export function init() {
  medias =  Array.from(document.querySelectorAll(".media-media"));
  const next = document.querySelector(".next");
  const previous = document.querySelector(".previous");
  next.addEventListener("click", () => ChangeSlide(1));
  previous.addEventListener("click", () => ChangeSlide(-1));
}
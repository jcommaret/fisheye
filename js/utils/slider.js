export function ChangeSlide(sens) {
  const medias = document.querySelectorAll("#medcont").src;
  

  let numero = 0;  
  let slide = "plop";
  numero = numero + sens;
  if (numero < 0)
      numero = slide.length - 1;
  
  if (numero > slide.length - 1)
      numero = 0;
  document.getElementById("slide").src = slide[numero];
}
export function init() {
    const next = document.querySelector(".next");
    const previous = document.querySelector(".previous");
    next.addEventListener("click", () => ChangeSlide(1));
    previous.addEventListener("click", () => ChangeSlide(-1));
}
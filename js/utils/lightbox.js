
import { ChangeSlide, getCards } from "./slider"
import { setCurrentMedia } from "./slider"

// Modal function : check if modal has class open and add it if not, remove it if this is the case 
export function lightboxwindow(event) {
  // modal window
  const lightbox = document.querySelector(".lightbox")
  if (!lightbox.classList.contains("open")){
    
    lightbox.classList.remove("hide")
    lightbox.classList.add("open")
    getCards()
  }
  else{
    lightbox.classList.replace("open","hide")
  }
  setCurrentMedia(event)
}

export function init() {
  const lightboxBtn = document.querySelectorAll(".lightbox-toogle")
  const lightbox = document.querySelector(".lightbox")
  
  lightboxBtn.forEach(
  (button) => button.addEventListener(
    "click", (e) => lightboxwindow(e)
    )
  )
  
  document.addEventListener('keyup', function(event){
    // Close modale au moment de l'escape
    if(event.key === "Escape"){
      lightbox.className = "lightbox hide"
      setTimeout(()=>{
        lightbox.className = "lightbox hide"
      },200)
    }
    if (event.key === "ArrowRight"){
      ChangeSlide(1)
    }
    if (event.key === "ArrowLeft"){
      ChangeSlide(-1)
    }
  })
}


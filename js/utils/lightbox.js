////////////// START MODALE /////////////
const lightboxBtn = document.querySelectorAll(".lightbox-toogle");
// modal window
const lightbox = document.querySelector(".lightbox");
// launch modal function on every click on Modal btn
lightboxBtn.forEach((btn) => btn.addEventListener("click", LightBox));

// Modal function : check if modal has class open and add it if not, remove it if this is the case 
export function LightBox() {
    if (!lightbox.classList.contains("open")){
      lightbox.classList.remove("hide");
      lightbox.classList.add("open");
    }
    else{
      lightbox.classList.replace("open","hide");
    }
    
    // Close modal if keyup on escape
    document.addEventListener('keyup', function(event){
	  if(event.key === "Escape"){
		  lightbox.className = "modal hide";
      setTimeout(()=>{
        lightbox.style.display = 'none';
      },200)
	  }
  });
}

////////////// END Lightbox /////////////
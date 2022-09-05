// Global DOM var
const $body = document.getElementById('#photographer');
const $openModalBtn = document.getElementsByClassName('.modal-toogle');
const $mainWrapper = document.getElementsByClassName('.main-wrapper');
const $modal = document.getElementsByClassName('.modal');
const $modalTitle = document.getElementsByClassName('.modal-title');
const $modalCloseBtn = document.getElementsByClassName('.modal-close-btn');
 
// Func
const onOpenModal = () => {
   $mainWrapper.attr('aria-hidden', 'true');
   $modal.attr('aria-hidden', 'false');
   $body.addClass('no-scroll');
   $modal.css('display', 'flex');
   $modalCloseBtn.focus();
}
 
const onCloseModal = () => {
   $mainWrapper.attr('aria-hidden', 'false');
   $modal.attr('aria-hidden', 'true');
   $body.removeClass('no-scroll');
   $modal.css('display', 'none');
   $openModalBtn.focus();
}

////////////// START MODALE /////////////

// modal button
const modalBtn = document.querySelectorAll(".modal-toogle");
// modal window
const modal = document.querySelector(".modal");
// launch modal function on every click on Modal btn
modalBtn.forEach((btn) => btn.addEventListener("click", Modal));

// Modal function : check if modal has class open and add it if not, remove it if this is the case 
export function Modal() {
    if (!modal.classList.contains("open")){
      modal.classList.remove("hide");
      modal.classList.add("open");
    }
    else{
      modal.classList.replace("open","hide");
    }
    
    // Close modal if keyup on escape
    document.addEventListener('keyup', function(event){
	  if(event.key === "Escape"){
		  modal.className = "modal hide";
      setTimeout(()=>{
        modal.style.display = 'none';
      },200)
	  }
  });
}
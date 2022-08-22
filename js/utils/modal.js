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
}
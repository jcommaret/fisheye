// modal button
const modalBtn = document.querySelectorAll(".modal-toogle");
// modal window
const modal = document.querySelector(".modal");
const fields = Array.of(modal.querySelectorAll(".fields"));

console.log(fields);

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

    modal.addEventListener('keyup', function(event){
      // close modal on escape
      if(event.key === "Escape"){
        modal.className = "modal hide";
        setTimeout(()=>{
          modal.style.display = 'none';
      },200)

      // actions sur le tab
      if(event.key === "Tab"){
         const current = event.target;
         if (current===fields[fields.length-1]){
            fields[0].focus();
         };
      };

      // actions sur le shift + tab
      if(event.shiftKey && event.key === "Tab"){
        const current = event.target;
        if (current===fields[fields.length-1]){
           fields[0].focus();
        };
      };




	  }
  });
}

// tab // shift // shift tab
// event listener keyup


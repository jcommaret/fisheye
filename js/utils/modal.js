// modal button
const modalBtn = document.querySelectorAll(".modal-toogle");
// modal window
const modal = document.querySelector(".modal");
const fields = Array.from(modal.querySelectorAll(".fields"));

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

    let previous = undefined;
    let next = undefined;
    
    document.addEventListener('keyup', function(event){
      // Close modale au moment de l'escape
      if(event.key === "Escape"){
        modal.className = "modal hide";
        setTimeout(()=>{
          modal.style.display = 'none';
        },200)
      };

      console.log(previous);
      // actions sur le tab
      if(event.key === "Tab"){
        event.preventDefault()
        if (previous===fields[fields.length-1]){
          fields[0].focus();
        };
      };

      console.log(next);
       // actions sur le shift + tab
      if(event.shiftKey && event.key === "Tab"){
        event.preventDefault()
        if (next===fields[fields.length+1]){
          fields[0].focus();
        };
      };

      next = event.target;
      previous = event.target;

      // actions sur le shift + tab
      
	  
  });
}

// tab // shift // shift tab
// event listener keyup


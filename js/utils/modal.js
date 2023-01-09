// Modal function : check if modal has class open and add it if not, remove it if this is the case 
export function modalwindow() {
  // modal window
  const modal = document.querySelector(".modal")
  const fields = Array.from(modal.querySelectorAll(".fields"))
  
  if (!modal.classList.contains("open")){
      modal.classList.remove("hide")
      modal.classList.add("open")
      fields[0].focus()
    }
    
    else{
      modal.classList.replace("open","hide")
    }

    let previous = undefined
    // let next = undefined
    
    document.addEventListener('keyup', function(event){
      // Close modale au moment de l'escape
      if(event.key === "Escape"){
        modal.className = "modal hide"
        setTimeout(()=>{
          modal.className = "modal hide"
        },200)
      }
      if(event.shiftKey){
        if(event.key === "Tab"){
          event.preventDefault()
          if (previous===fields[0]){
            fields[fields.length-1].focus()

          }    
        }
      } else{
        if(event.key === "Tab"){
          event.preventDefault()
          if (previous===fields[fields.length-1]){
            fields[0].focus()
          }
        }
      }
      // actions sur le tab
      previous = event.target
      // next = event.target
  })
}

export function init() {
  const modalBtn = document.querySelectorAll(".modal-toogle")
  modalBtn.forEach(
    (button) => button.addEventListener(
      "click", () => modalwindow()
    )
  )
}


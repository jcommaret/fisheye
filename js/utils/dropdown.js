export function Dropdown() { 
  let dropdown = document.querySelector(".dropdown")
  dropdown.onclick = function(e) {
      dropdown.classList.toggle("active")
      const field = document.querySelector("#search-input")
      field.placeholder=e.target.textContent
  }
}
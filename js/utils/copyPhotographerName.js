export function CopyPhotographerName(){
  const textOrigin = document.querySelector('h1.photographerName').textContent;
  const textDestination = document.querySelector('#modalTitle');  
  textDestination.innerHTML="Contactez-moi" + " " + textOrigin;
};

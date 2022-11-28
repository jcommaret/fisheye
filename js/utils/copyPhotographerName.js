export function CopyPhotographerName(){
  const textOrigin = document.querySelector('h1.photographerName').textContent;
  const textDestination = document.querySelector('#modalTitle');  
  textDestination.innerHTML="Contactez-moi" + " " + textOrigin;
};

export function CopyPrice(){
  const textOrigin = document.querySelector('.photograph .price').textContent;
  const textDestination = document.querySelector('.bar .price');  
  textDestination.innerHTML= textOrigin + '/Jour';
};

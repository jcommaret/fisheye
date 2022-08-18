export function mediaFactory(data) {
  const { photographerId, id, title, image, like } = data;
  const photo = require (`../../images/images/${image}`);
  function getMediaCardDOM() {

      const article = document.createElement( 'div' );       
      article.classList.add("media");
      // Crée l'element image
      const img = document.createElement( 'img' );
      img.setAttribute("src", photo)
      img.setAttribute("alt", title )
      img.classList.add("media_photo");
      article.appendChild(img);
      
      // Crée l'element heading
      const h2 = document.createElement( 'h2' );
      h2.textContent = title;
      article.appendChild(h2);    
      return (article);
  }
  return { id, photographerId, title, image, like, getMediaCardDOM }
}


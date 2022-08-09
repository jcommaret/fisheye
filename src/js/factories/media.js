export function mediaFactory(data) {
  const { id, title, images, like } = data;

  const photo = require (`images/photographers/${images}`);
  
  function getMediaCardDOM() {
      const article = document.createElement( 'article' );       
      article.classList.add("article");
      
      // Crée l'element image
      const img = document.createElement( 'img' );
      img.setAttribute("src", photo)
      img.setAttribute("alt", title )
      img.classList.add("pdpeoepreprop");
      article.appendChild(img);
      
      // Crée l'element heading
      const h2 = document.createElement( 'h2' );
      h2.textContent = title;
      article.appendChild(h2);    
      return (article);
  }
  return { id, title, images, like, getMediaCardDOM }
}
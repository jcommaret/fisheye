export function mediaFactory(data) {
  const { photographerId, id, title, image, likes } = data;
  const photo = require (`../../images/images/${image}`);
  function getMediaCardDOM() {

      const article = document.createElement( 'div' );       
      article.classList.add("media");
      // Crée l'element image
      const img = document.createElement( 'img' );
      img.setAttribute("src", photo)
      img.setAttribute("alt", "titre de l'image :" + title )
      img.classList.add("media_photo");
      article.appendChild(img);
      
      const div = document.createElement('div');
      div.setAttribute("class", "picinfo");
      article.appendChild(div);
      // Crée l'element heading
      const h2 = document.createElement( 'h2' );
      h2.textContent = title;
      div.appendChild(h2);    
      
      const people_likes = document.createElement ('p');
      people_likes.textContent = "♥" + likes;
      div.appendChild(people_likes);

      return (article);
  }
  return { id, photographerId, title, image, likes, getMediaCardDOM }
}


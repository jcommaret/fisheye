export function mediaFactory(data) {
  const { photographerId, id, title, image, likes } = data;
  const photo = `../../images/images/${image}`;
  
  
  
  function getMediaCardDOM() {

      const article = document.createElement( 'div' );       
      article.classList.add("media");

      const btn = document.createElement('btn');
      btn.classList.add("lightbox-toogle");
      
      // Crée l'element image
      const img = document.createElement( 'img' );
      img.setAttribute("src", photo)
      img.setAttribute("alt", "titre de l'image :" + title )
      img.classList.add("media_photo");
      img.classList.add("lightbox-toogle");
      btn.appendChild(img)
      article.appendChild(btn);
      
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

// modal button
const lightboxBtn = document.querySelectorAll(".lightbox-toogle");
// modal window
const lightbox = document.querySelector(".lightbox");
// launch modal function on every click on Modal btn
lightboxBtn.forEach((btn) => btn.addEventListener("click", Lightbox));

// Modal function : check if modal has class open and add it if not, remove it if this is the case 
export function Lightbox() {
  if (!lightbox.classList.contains("open")){
    lightbox.classList.remove("hide");
    lightbox.classList.add("open");
    }
    else{
      lightbox.classList.replace("open","hide");
    }
}
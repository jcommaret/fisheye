const params = new URLSearchParams(window.location.search);
const id = params.get("userId");
const surname = params.get("userName");
const city = params.get("city");
const country = params.get("country");
const tagline = params.get("tagline");
const portrait = params.get("portrait");
const portrait_with_path = `assets/photographers/${portrait}`;
// bloc informations photographes
const photographe = document.querySelector(".photograph-informations");

// nom du photographe
const h1 = document.createElement( 'h1' );
h1.textContent = surname;   
photographe.appendChild(h1);

// localisation
const locate = document.createElement( 'p' );
locate.textContent = city + ", " + country ;
locate.classList.add("location");
photographe.appendChild(locate);

// tagline
const tag = document.createElement( 'p' );
tag.textContent = tagline;
tag.classList.add("tagline");
photographe.appendChild(tag);

// image du photographe
const image_photographe = document.querySelector(".photo");

const portrait_img = document.createElement( 'img' );
portrait_img.setAttribute("src", portrait_with_path);
portrait_img.setAttribute("alt", "portrait de "+ surname )
portrait_img.classList.add("portrait");
image_photographe.appendChild(portrait_img)

      

function mediaFactory(data) {
  const { image, title, likes } = data;
  const picture = `assets/images/small/${image}`;
  function getMediaCardDOM() {
      // Crée l'element article
      const article = document.createElement( 'article' );       
      const img = document.createElement( 'img' );
      const div = document.createElement( 'div' );
      img.setAttribute("src", picture);
      img.setAttribute("loading", "lazy");
      img.classList.add("portrait");
      article.appendChild(img);
      div.classList.add("picinfo");
      article.appendChild(div);

      const h2 = document.createElement( 'h2' );
      h2.textContent = title;
      div.appendChild(h2);

      const p = document.createElement( 'p' );
      p.textContent = likes + "♥";
      div.appendChild(p);

      return (article);
  }
  return { image, title, likes, getMediaCardDOM }
}

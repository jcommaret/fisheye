function mediaFactory(data) {
  const { image, title, likes } = data;
  const picture = `assets/images/${image}`;

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
function mediaFactory(data) {
  const { image, title, like } = data;
  const picture = `assets/images/${image}`;
  
  function getMediaCardDOM() {
      // Crée l'element article
      const article = document.createElement( 'article' );       
      const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.classList.add("portrait");
        article.appendChild(img);
      return (article);
  }
  return { image, title, like, getMediaCardDOM }
}
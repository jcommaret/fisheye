function photographerFactory(data) {
    const { id, name, city, country, portrait, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // Crée l'element article
        const article = document.createElement( 'article' );
        article.setAttribute("user", id);
        // Crée les différents éléments à l'interieur d'article
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const location = document.createElement( 'p' );
        const intro = document.createElement( 'p' );
        const rate = document.createElement( 'p' );

        // Récupère le contenu qui va aller peupler les éléments
        img.setAttribute("src", picture)
        h2.textContent = name;
        location.textContent = city + ", " + country;
        intro.textContent = tagline;
        rate.textContent = price + "€/jour ";
        
        location.classList.add("location");
        intro.classList.add("tagline");
        rate.classList.add("rate");

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(intro);
        article.appendChild(rate);

        return (article);
    }
    return { id, name, city, country, price, picture, tagline, getUserCardDOM }
}
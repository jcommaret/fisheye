import { getPhotographers } from "../fetch_api";

getPhotographers();

export function photographerFactory(data) {
    const { id, name, portrait } = data;

    const picture = `../images/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.addEventListener("click", ( ) => { goTo (id) } );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return {id, name, picture, getUserCardDOM }
}

const goTo = (id) => {
    location.href="photographer.html?id="+id;
}
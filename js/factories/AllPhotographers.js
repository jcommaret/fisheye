import { getPhotographers } from "../fetch_api"

getPhotographers()

export function photographerFactory(data) {
    const { 
        id, 
        name, 
        city, 
        country, 
        portrait, 
        tagline, 
        price 
    } = data
    
    const picture = `../images/photographers/${portrait}`

    function getUserCardDOM() {
        const article = document.createElement( 'a' )       
        article.addEventListener("click", function () { goTo(id) })
        article.classList.add("article")
        article.setAttribute("tabindex", 0)
        
        // Crée l'element image
        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        img.setAttribute("alt", "portrait de "+ name )
        img.classList.add("portrait")
        article.appendChild(img)
        
        // Crée l'element heading
        const h2 = document.createElement( 'h2' )
        h2.textContent = name
        article.appendChild(h2)
        
        // Crée p .location
        const location = document.createElement( 'p' )
        location.textContent = city + ", " + country
        location.classList.add("location")
        article.appendChild(location)
        
        // Crée l'element p .tagline
        const intro = document.createElement( 'p' )
        intro.textContent = tagline
        intro.classList.add("tagline")
        article.appendChild(intro)
        
        // Crée l'element p .price
        const rate = document.createElement( 'p' )
        rate.textContent = price + "€/jour "
        rate.classList.add("rate")
        article.appendChild(rate)

        return (article)
    }
    return { 
        id, 
        name, 
        city,
        country, 
        price, 
        picture, 
        tagline, 
        getUserCardDOM 
    }
}

const goTo = (id) => {
    location.href="photographer.html?id="+id
}


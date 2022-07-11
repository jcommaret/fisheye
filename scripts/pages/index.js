async function renderPhotographers(){
    // assigne a photographers le tableau renvoyé par le "get photographers"
    let photographers = await getData();    
    // retourne le tableau photographers seulement une fois
    return ({
        photographers: [photographers]})
}

async function displayPhotographers(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    const { photographers } = await getData();
    displayPhotographers(photographers);
};

function goTo(id, name) {
    const photographerId = id;
    const photographerName = name;  
    
    var params = new URLSearchParams();

    params.append("photographerId", photographerId);       
    params.append("photographerName", photographerName);       

    var url = "photographer.html?" + params.toString();
    location.href = url;
}

init();
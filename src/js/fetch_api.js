// api url
const api_url = "https://raw.githubusercontent.com/jcommaret/fisheye/master/src/data/photographers.json";
// Defining async function

export async function getData() {
    // fetch de l'api
    let url = api_url;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// Medias by id
export async function getMediaById(id){
    const medias = await getData();
    const mediaFiltered = medias.filter(media => { 
        return media.photographerId === id }
    );
    console.log(mediaFiltered);
}

export async function getPhotographerById(id){
    const photographers = await getData();
    const photographerFiltered = photographers.find(photographer => {
        return photographer.id === id;
    });
    
    console.log(photographerFiltered);   
}




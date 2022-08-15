import jsonData from 'data/photographers.json';

export async function getData() {
    // fetch de l'api
    let url = jsonData;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
    
}
console.log(getData);
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




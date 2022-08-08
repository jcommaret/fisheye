// api url
const api_url = "https://raw.githubusercontent.com/jcommaret/fisheye/master/src/data/photographers.json";
// Defining async function

// GetAllPhotographers
export function getPhotographers(){
    fetch(api_url)
    .then(response => response.json())
    .then(data => { data.photographers })
};

export default function GetAllPhotographers(){
    const GAPhotographer = getPhotographers();
    return GAPhotographer; 
}

// GetMedias
function getMedias(){
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        console.log(data.media);
    })
};

// GetMediasByID
function getMediaById(id){
    const medias = getMedias();
    return medias.filter(media => { return media.photographerId === id });
}
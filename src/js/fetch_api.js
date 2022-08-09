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

// GetMedias
function getMedias(){
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        console.log(data.media);
    })
};

// GetMediasByID
export function getMediaById(id){
    const medias = getMedias();
    return medias.filter(media => { return media.photographerId === id });
}
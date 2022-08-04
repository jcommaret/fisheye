// api url
const api_url = "https://raw.githubusercontent.com/jcommaret/fisheye/master/src/data/photographers.json";
// Defining async function
function getPhotographers(api_url){
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        console.log(data.photographers);
    })
};
getPhotographers(api_url);


function getMedias(api_url){
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        console.log(data.media);
    })
};
getMedias(api_url);

// api url
const api_url = "https://raw.githubusercontent.com/jcommaret/fisheye/master/src/data/photographers.json";
// Defining async function
async function getData(api_url) {
    const response = await fetch(api_url);
    let data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}

const photographer_url = "https://raw.githubusercontent.com/jcommaret/fisheye/master/src/data/photographers.json/photographers/" 
async function getPhotographers(photographer_url){
  // Storing response
  const response = await fetch(photographer_url);
  // Storing data in form of JSON
  let data = await response.json();
  console.log(data);
  if (response) {
      hideloader();
  }
  show(data);
}


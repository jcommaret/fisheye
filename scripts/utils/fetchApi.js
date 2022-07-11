// URL du json
const api_url = "data/photographers.json";
//const api_url = "fisheyes/data/photographers.json";


async function getData() {
    // fetch de l'api
    let url = api_url;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
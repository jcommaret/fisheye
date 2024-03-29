const url = "./../data/photographers.json"

export async function getData() {
    // fetch de l'api
    try {
        let res = await fetch(url)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

// Medias by id
export async function getMediaById(id){
    const { media } = await getData()
    return media.filter(m => m.photographerId === id )
}

// Tout les photographes
export async function getPhotographers(){
    const photographers = await getData()
    return photographers
}

// Photographes par id
export async function getPhotographersById(id){
    const { photographers } = await getData()
    return photographers.find(p => p.id === id )
}
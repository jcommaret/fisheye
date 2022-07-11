async function renderMedias(){
    // assigne a photographers le tableau renvoyé par le "get photographers"
    let media = await getData();    
    // retourne le tableau photographers seulement une fois
    return (
    {media: [media]}
    )
}
  
async function displayMedias(media) {
    const mediasSection = document.querySelector(".medias_section");
    media.forEach((m) => {
        const mediaModel = mediaFactory(m);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);
    });
};

async function init() {
    const { media } = await getData();
    displayMedias(media);
};

init();


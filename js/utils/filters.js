
export async function sortbyDate(medias){
  const btnDate = document.querySelector('.btn.date');
  btnDate.addEventListener('click', (e) => {
    medias.date.sort(function(a, b)
    {return new Date(b.date) - new Date(a.date)});;
})};

export async function sortbyLikes(medias){
  const btnLikes = document.querySelector('.btn.likes');
  btnLikes.addEventListener('click', (e) => {
    medias.likes.sort(function(a, b)
    { return b.likes - a.likes })
})};

export async function sortbyTitle(medias){
  const btnTitle = document.querySelector('.btn.title');
  btnTitle.addEventListener('click', (e) => {   
  medias.title.sort(function(a, b){return a-b});
  { return b.title - a-title };
})};


export function getTotalLikes(data){
  let totalLikes = 0;
  data.forEach((media) => {
    totalLikes +=media.likes;
  });
  document.querySelector('.compteurLikes').innerHTML = `${totalLikes}` + `♥`
} 
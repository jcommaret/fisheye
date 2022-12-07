export function getTotalLikes(data){
  let totalLikes = 0;
  data.forEach((media) => {
    totalLikes +=media.likes;
  });
  document.querySelector('.compteurLikes').innerHTML = `${totalLikes} `+ `<i class="fa-solid fa-heart"></i>`
};

export function IncrementLikes(){
  // Increment
  const hearts = document.querySelectorAll(".likes-btn");
  Array.from(hearts).forEach(heart => {
    heart.addEventListener("click", (e)=>{
      let nbLike = heart.querySelector("#count").textContent
      const nodeLike = heart.querySelector("#count")
      const attribut = heart.getAttribute("data-like")
      if(!attribut){
        nbLike = parseInt(nbLike) + 1
        heart.setAttribute("data-like",true)
        nodeLike.innerHTML = `${nbLike} ` + `<i class="fa-solid fa-heart"></i>`
      }
      else{
        nbLike = parseInt(nbLike) - 1
        heart.removeAttribute("data-like")
        nodeLike.innerHTML = `${nbLike} ` + `<i class="fa-regular fa-heart"></i>`
      }
    })
  })
}

export function getTotalLikes(data){
  let totalLikes = 0;
  data.forEach((media) => {
    totalLikes +=media.likes;
  });
  document.querySelector('.compteurLikes').innerHTML = 
  `${totalLikes} `+ `<i class="fa-solid fa-heart"></i>`
}

export function IncrementLikes(){
  // get all likes buttons
  const hearts = document.querySelectorAll(".likes-btn");
  // add event listener on each button
  Array.from(hearts).forEach(heart => {
    heart.addEventListener("click", (e)=>{
      // get the number of likes
      let nbLike = heart.querySelector("#count").textContent
      // get the icon
      const nodeLike = heart.querySelector("#count")
      // get the data-like attribute
      const attribut = heart.getAttribute("data-like")
      // if the button is not liked, add 1 like and change the icon
      if(!attribut){
        nbLike = parseInt(nbLike) + 1
        heart.setAttribute("data-like",true)
        nodeLike.innerHTML = 
        `${nbLike} ` + `<i class="fa-solid fa-heart"></i>`
      }
      // if the button is liked, remove 1 like and change the icon
      else{
        nbLike = parseInt(nbLike) - 1
        heart.removeAttribute("data-like")
        nodeLike.innerHTML = 
        `${nbLike} ` + `<i class="fa-regular fa-heart"></i>`
      }
    })
  })
}

// TODO:

// Dans l'idée 
export function IncrementTotalLikes(){
  const nodeLike = heart.querySelector("#count").textContent
  const arr = Array.from(nodeLike);
  console.log(arr);
  const sum = arr.reduce((accumulator, value) => {
    return accumulator + value;
  
  }, 0);
  console.log(sum);
  document.querySelector('.compteurLikes').innerHTML = 
  `${sum} `+ `<i class="fa-solid fa-heart"></i>`
}


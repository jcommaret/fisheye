
export function getTotalLikes(data){
  let totalLikes = 0
  data.forEach((media) => {
    totalLikes +=media.likes
  })
  document.querySelector('.compteurLikes').innerHTML = 
  `${totalLikes} `+ `<i class="fa-solid fa-heart"></i>`
}

export function IncrementLikes(){
  // get all likes buttons
  let hearts = document.querySelectorAll(".likes-btn")
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

export function AddTotalLikes(){
  const nbLike = document.querySelectorAll(".count")
  const countnBLike = nbLike.textContent
  console.log("like :", countnBLike)
  const nbLikeInt = parseInt(countnBLike)
  console.log("int :", nbLikeInt)
  const arrayFromLikes = Array.from(nbLikeInt)
  const sum = arrayFromLikes.reduce((total, item) => total + item, 0)
  console.log("sum :", sum)
  return sum
}   

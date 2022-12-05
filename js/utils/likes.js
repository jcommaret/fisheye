export function getTotalLikes(data){
  let totalLikes = 0;
  data.forEach((media) => {
    totalLikes +=media.likes;
  });
  document.querySelector('.compteurLikes').innerHTML = `${totalLikes}` + `♥`
};

export function IncrementLikes(){
  // Increment
  const incrementBtn = document.getElementById("likes-btn");
  const totalCountByMedia = document.getElementById("count");
  const decrementBtn = document.getElementsByClassName("decrement-btn");
  // Variable to track count
  var count = 0;
  // Display initial count value
  totalCountByMedia.innerHTML = count;
  // Function to increment count and add a decrement-btn
  const handleIncrement = () => {
    count++;
    totalCountByMedia.innerHTML = count;
    incrementBtn.classList.add("decrement-btn");
  };

  // se decrement btn to decrement count
  //const handleDecrement = () => {
  //  count--;
  //  totalCountByMedia.innerHTML = count;
  //  btnLike.classList.remove("decrement-btn");
  //};

  // Add click event to buttons
  incrementBtn.addEventListener("click", handleIncrement);
  // decrementBtn.addEventListener("click", handleDecrement);
};


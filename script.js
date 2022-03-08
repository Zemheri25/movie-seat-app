let movie = document.getElementById("movie");
let count = document.getElementById("count");
let film = document.getElementById("film");
let total = document.getElementById("total");

let container = document.querySelector(".container");

window.addEventListener("load", () => {
  film.innerHTML = "Avengers: Endgame"
})


container.addEventListener("click", (e) => {
   let seat = e.target;
   if(seat.classList.contains("seat") && !seat.classList.contains("occupied") && !seat.classList.contains("selected")) {
     seat.classList.add("selected");
    count.innerHTML ++;
    total.innerHTML = Number(movie.value) * Number(count.innerHTML)
    } 
    else if (seat.classList.contains("seat") && !seat.classList.contains("occupied") && seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      count.innerHTML --;
      total.innerHTML = Number(movie.value) * Number(count.innerHTML)
    }
    localStorage(count, film, total)

 });


 movie.addEventListener("change", () => {
  if(movie.value == 10) {
    film.innerText = "Avengers: Endgame"
  }
  else if(movie.value == 12) {
    film.innerText = "Joker"
  }
  else if(movie.value == 8) {
    film.innerText = "Toy Story 4"
  }
  else if(movie.value == 9) {
    film.innerText = "The Lion King"
  }
  total.innerHTML = Number(movie.value) * Number(count.innerHTML)
  localStorage(count, film, total)
 })

 function localStorage(count, film, total) {
   localStorage.setItem("count", count);
   localStorage.setItem("film", film);
   localStorage.setItem("total", total)
 }
  














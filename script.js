let movie = document.getElementById("movie");
let count = document.getElementById("count");
let film = document.getElementById("film");
let total = document.getElementById("total");

let row = document.querySelectorAll(".row");

window.addEventListener("load", () => {
  let text = movie.options[movie.selectedIndex].text;
  let firstindex = text.indexOf("(");
  let newtext = text.slice(0, firstindex);
  film.innerHTML = newtext;
});

for (let i of row) {
  i.addEventListener("click", (e) => {
    let seat = e.target;
    !seat.classList.contains("selected") && !seat.classList.contains("occupied")
      ? seat.classList.add("selected")
      : seat.classList.remove("selected");
    if (
      seat.classList.contains("selected") &&
      !seat.classList.contains("occupied")
    ) {
      count.innerHTML++;
    } else if (
      !seat.classList.contains("selected") &&
      !seat.classList.contains("occupied")
    ) {
      count.innerHTML--;
    }

    total.innerHTML = Number(count.innerHTML) * Number(movie.value);
  });
}

movie.addEventListener("change", (e) => {
  let text = movie.options[movie.selectedIndex].text;
  let firstindex = text.indexOf("(");
  let newtext = text.slice(0, firstindex);
  film.innerHTML = newtext;

  total.innerHTML = Number(count.innerHTML) * Number(movie.value);
});

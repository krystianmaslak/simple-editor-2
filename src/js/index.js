import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const textarea = document.querySelector(".textarea--js"); //pobranie textarea
const save = document.querySelector(".save--js"); //pobranie save
const load = document.querySelector(".load--js"); //pobranie load

// sprawdzenie czy coś już jest w kluczu + informacja
const currentValue = localStorage.getItem("entry");

if (currentValue) {
  // jeśli coś jest
  document.querySelector(".info--js").innerHTML = "🔣";
}

//akcja - po kliknieciu w save - zapisało
save.addEventListener("click", (e) => {
  e.preventDefault(); // formularz bez odswiezania
  localStorage.setItem("entry", textarea.value); // klucz entry

  if (textarea.value) {
    // jesli nie jest puste
    document.querySelector(".info--js").innerHTML = "🔣";
  } else {
    document.querySelector(".info--js").innerHTML = " ";
  }
});

//akcja - po kliknieciu w load - wczytało
load.addEventListener("click", (e) => {
  e.preventDefault(); // formularz bez odswiezania
  textarea.value = localStorage.getItem("entry"); // szukamy pod pozycja entry
});

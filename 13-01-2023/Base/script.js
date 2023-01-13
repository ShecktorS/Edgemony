// Importo il mio Array
import { images } from "./mocks.js";

// Creo una funzione che setti le classi dei disks ai loro valori standard
const SetStandardClass = (disk1, disk2, disk3) => {
  disk1El.className = disk1;
  disk2El.className = disk2;
  disk3El.className = disk3;
};

//Creo le costanti che mi serviranno
const imgSliderEl = document.querySelector(".img__slider");
const disk1El = document.querySelector(".disk1");
const disk2El = document.querySelector(".disk2");
const disk3El = document.querySelector(".disk3");
const textSliderEl = document.querySelector("h1");

//Imposto l'url dell'immagine dell'html uguale al primo elemento del mio Array
imgSliderEl.setAttribute("src", images[0]);

//Aggiungo gli eventi relativi al click di ciascun disco
disk1El.addEventListener("click", () => {
  SetStandardClass("disk1", "disk2", "disk3"); //Qui richiamo la funzione che ho creato a riga 5
  imgSliderEl.setAttribute("src", images[0]);
  disk1El.className = "diskSelected";
});
disk2El.addEventListener("click", () => {
  SetStandardClass("disk1", "disk2", "disk3"); //Qui richiamo la funzione che ho creato a riga 5
  imgSliderEl.setAttribute("src", images[1]);
  disk2El.className = "diskSelected";
});
disk3El.addEventListener("click", () => {
  SetStandardClass("disk1", "disk2", "disk3"); //Qui richiamo la funzione che ho creato a riga 5
  imgSliderEl.setAttribute("src", images[2]);
  disk3El.className = "diskSelected";
});

// Qui un piccolo Easter Egg :)
textSliderEl.addEventListener("click", () => {
  if (
    disk1El.className === "diskSelected" ||
    disk2El.className === "diskSelected" ||
    disk3El.className === "diskSelected"
  ) {
    SetStandardClass("disk1", "disk2", "disk3");
    alert("Easter EGG! Hai deselezionato tutti i pallini!");
  } else null;
});

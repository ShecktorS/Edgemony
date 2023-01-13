import { images } from "./mocks.js";

const SetStandardClass = (disk1, disk2, disk3) => {
  disk1El.className = disk1;
  disk2El.className = disk2;
  disk3El.className = disk3;
};

//Creo le costanti che mi serviranno
const sliderEl = document.createElement("div");
const textSliderEl = document.createElement("h1");
const imgSliderEl = document.createElement("img");
const disksContainer = document.createElement("div");
const disk2El = document.createElement("div");
const disk1El = document.createElement("div");
const disk3El = document.createElement("div");

// Imposto l'url dell'immagine dell'html uguale al primo elemento del mio Array e il contenuto del testo
imgSliderEl.setAttribute("src", images[0]);
textSliderEl.textContent = "Dinamic Slider";

// Associo le classi agli elementi
sliderEl.className = "slider";
textSliderEl.className = "slider__text";
imgSliderEl.className = "slider__img";
disksContainer.className = "disks";
disk1El.className = "disk1";
disk2El.className = "disk2";
disk3El.className = "disk3"; //provare con class list e selezionare una sola classe su css

//Appendo gli elementi facendo attenzione alla gerarchia
document.body.appendChild(sliderEl);
sliderEl.append(textSliderEl, imgSliderEl, disksContainer);
disksContainer.append(disk1El, disk2El, disk3El);

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

// Qui il piccolo Easter Egg di prima :D
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

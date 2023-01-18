const containerForm = document.querySelector("#containerForm");
const titleForm = document.querySelector("#titleForm");
const priceForm = document.querySelector("#priceForm");
const categoryIdForm = document.querySelector("#categoryIdForm");
const imageForm = document.querySelector("#imageForm");
const descriptionForm = document.querySelector("#descriptionForm");

containerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const obj = {
    title: titleForm.value,
    price: priceForm.value,
    description: descriptionForm.value,
    categoryId: categoryIdForm.value,
    images: [imageForm.value],
  };

  if (obj.price >= 1) {
    console.log("title: " + obj.title);
    console.log(`price: € ${obj.price},00`);
    console.log("description: " + obj.description);
    console.log("category ID: " + obj.categoryId);
    console.log("images: " + obj.images);

    postFunction(obj);

    alert("Hai mandato la tua richiesta!");
  } else {
    alert("Mi dispiace ma le offerte partono da € 1!");
  }
});

const postFunction = (objPost) => {
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objPost),
  })
    .then((res) => res.json())
    .then((data) => console.log("Risposta POST: " + data))
    .catch((e) => console.log("Errore: " + e));
};

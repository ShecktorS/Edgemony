// --------------------RELATIVO AL FORM DEL PRODOTTO----------------------------
const containerFormProduct = document.querySelector("#containerFormProduct");
const titleForm = document.querySelector("#titleForm");
const priceForm = document.querySelector("#priceForm");
const categoryIdForm = document.querySelector("#categoryIdForm");
const imageForm = document.querySelector("#imageForm");
const descriptionForm = document.querySelector("#descriptionForm");

// -------------------RELATIVO AL FORM DELLA CATEGORIA-----------------------------

const containerFormcategory = document.querySelector("#containerFormcategory");
const catNameForm = document.querySelector("#catName");
const catImageForm = document.querySelector("#catImage");

containerFormProduct.addEventListener("submit", (event) => {
  event.preventDefault();
  eventProductButton;
});

containerFormcategory.addEventListener("submit", (event) => {
  event.preventDefault();
  eventCategoryButton();
});

const eventProductButton = () => {
  const obj = {
    title: titleForm.value,
    price: priceForm.value,
    description: descriptionForm.value,
    categoryId: categoryIdForm.value,
    images: [imageForm.value],
  };

  if (obj.price >= 1 && obj.categoryId >= 1) {
    console.log("title: " + obj.title);
    console.log(`price: € ${obj.price},00`);
    console.log("description: " + obj.description);
    console.log("category ID: " + obj.categoryId);
    console.log("images: " + obj.images);

    postFunction(obj, "products");

    alert("Hai mandato la tua richiesta!");
  } else {
    alert("Mi dispiace ma l'offerta non può essere accettata!");
  }
};

const eventCategoryButton = () => {
  if (catNameForm.value.length < 8) {
    const catObj = {
      catName: catNameForm.value,
      catImage: catImageForm.value,
    };
    console.log("category name: " + catObj.catName);
    console.log("category image: " + catObj.catImage);

    postFunction(catObj, "categories");

    alert("Hai mandato la tua richiesta!");
  } else {
    alert("Inserisci un nome più breve");
  }
};

const postFunction = (objPost, typePost) => {
  fetch("https://api.escuelajs.co/api/v1/" + typePost, {
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

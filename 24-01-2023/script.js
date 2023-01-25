// fetch("https://dummyjson.com/users?limit=10")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
const cE = (type) => document.createElement(type);
let searchedValue = "";
const bodyEl = document.body;

const cardsDelete = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.remove);
};

const GET = async () => {
  const res = await fetch("https://dummyjson.com/users?limit=10");
  const data = await res.json();
  const { users } = data;
  return users; //immagine, nome, cognome, anni, telefono, email
};

GET().then((users) => {
  const people = users.map((user) => user);
  people.forEach((people) => {
    const cardEl = cE("div");
    const imgEl = cE("img");
    const infoEl = cE("div");
    const firstNameEl = cE("h2");
    const lastNameEl = cE("h2");
    const ageEl = cE("h1");
    const phoneEl = cE("p");
    const emailEl = cE("p");
    const nameEl = cE("div");

    cardEl.className = "card";
    imgEl.className = "user_image";
    infoEl.className = "info";
    nameEl.className = "name_container";
    firstNameEl.className = "firstname";
    lastNameEl.className = "lastname";
    ageEl.className = "age";
    phoneEl.className = "phone";
    emailEl.className = "email";

    imgEl.setAttribute("src", people.image);
    firstNameEl.textContent = people.firstName;
    lastNameEl.textContent = people.lastName;
    ageEl.textContent = `${people.age} anni`;
    phoneEl.textContent = people.phone;
    emailEl.textContent = people.email;

    bodyEl.appendChild(cardEl);
    cardEl.append(imgEl, infoEl);
    nameEl.append(firstNameEl, lastNameEl);
    infoEl.append(nameEl, ageEl, phoneEl, emailEl);
  });
});

const searchBarEl = cE("input");
searchBarEl.setAttribute("id", "searchInput");
searchBarEl.className = "searchInputClass";

searchBarEl.addEventListener("input", (e) => {
  cardsDelete();
  searchedValue = e.target.value;

  GET().then((users) => {
    users.forEach((user) => console.log(user.title));
  });
});

bodyEl.appendChild(searchBarEl);

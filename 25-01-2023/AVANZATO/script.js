// https://dummyjson.com/users

const GET = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data;
};

const colorHairBarGen = (value, userHair, classColor) => {
  const wrapperEl = cE("div");
  const typeHairTextEl = cE("h3");
  const statusEl = cE("div");

  wrapperEl.className = "hair-status-bar";
  typeHairTextEl.textContent = value;
  statusEl.className = "hair-status-bar-status";
  statusEl.classList.add(classColor);

  statusEl.style.height = `${userHair * 15}px`;

  wrapperEl.append(typeHairTextEl, statusEl);
  return wrapperEl;
};

const findColorHair = (elementUsers, colorHair) =>
  elementUsers.filter((hair) => hair.color == colorHair);

const cE = (element) => document.createElement(element);

const wrapperEl = document.querySelector(".wrapper");

// wrapperEl.appendChild(colorHairBarGen("Black hair", 10));
let blondHairUsers,
  blackHairUsers,
  brownHairUsers,
  auburnHairUsers,
  chestnutHairUsers;

let hairPeople = [];
GET()
  .then(({ users }) => {
    const hairUsers = users.map((user) => user.hair);
    blackHairUsers = {
      color: findColorHair(hairUsers, "Black"),
      textColor: "Capelli neri",
      classColor: "addBlack",
    };
    blondHairUsers = {
      color: findColorHair(hairUsers, "Blond"),
      textColor: "Capelli biondi",
      classColor: "addBlond",
    };
    brownHairUsers = {
      color: findColorHair(hairUsers, "Brown"),
      textColor: "Capelli marroni",
      classColor: "addBrown",
    };
    auburnHairUsers = {
      color: findColorHair(hairUsers, "Auburn"),
      textColor: "Capelli ramati",
      classColor: "addAuburn",
    };
    chestnutHairUsers = {
      color: findColorHair(hairUsers, "Chestnut"),
      textColor: "Capelli castani",
      classColor: "addChestnut",
    };

    hairPeople.push(
      blackHairUsers,
      blondHairUsers,
      brownHairUsers,
      auburnHairUsers,
      chestnutHairUsers
    );
  })
  .then(() => {
    console.log(hairPeople.length);
    hairPeople.map((hairPerson) =>
      wrapperEl.appendChild(
        colorHairBarGen(
          hairPerson.textColor,
          hairPerson.color.length,
          hairPerson.classColor
        )
      )
    );
  });

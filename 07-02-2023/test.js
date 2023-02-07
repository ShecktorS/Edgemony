const { urlencoded } = require("express");
const express = require("express");
const test = express();
const { users } = require("./users");
const PORT = 3345;

test.use(express.static("./public"));
test.use(express.urlencoded({ extended: true }));
test.use(express.json());

test.get("/api/users", (req, res) => {
  res.status(200).json({ success: true, data: users });
});

test.post("/api/users", (req, res) => {
  const { id, name, username } = req.body;
  if (!id || !name || !username) {
    return res.status(400).json({ success: false, msg: "Non trovo il dato!" });
  }
  return res
    .status(200)
    .json({ success: true, user: { id: id, name: name, username: username } });
});

test.listen(PORT, () => {
  console.log(`Server operativo sulla porta: ${PORT}`);
});

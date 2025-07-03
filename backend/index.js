const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 5000;
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, welcome to Express and Node.js!");
});

app.get("/about", (req, res) => {
  res.send("Hellow How are you");
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  return res.json(user);
});

app.get("/users", (req, res) => {
  const userData = users
    .map((user) => {
      return `<li>${user.first_name}</li>`;
    })
    .join("");

  const html = `<ul>${userData}</ul>`;
  res.send(html);
});

// Post Api

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "pending" });
  });
});

// Delete Api
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const deleteUser = users.splice(index, 1);
    res.json({ message: "send Data", deleteUser });
  } else {
    res.status(404).json({ status: "error", message: "not found message" });
  }
});

// PUT Api
app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const Data = { ...req.body, id };
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = Data;
  } else {
    users.push(Data);
  }
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) return res.status(505).json({ message: "show error" });
    else {
      res.json({ message: "Result recieved" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

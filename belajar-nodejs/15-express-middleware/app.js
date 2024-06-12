const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs"); // ejsnya langsung di declare disini (tidak perlu pake require)

// Third-party Middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// Built in middleware
app.use(express.static("public"));

// Application Level Middleware
app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next(); // ini yg bikin nge-hang kalo lupa
});

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Budi Santoso",
      email: "budi@gmail.com",
    },
    {
      nama: "Sinta Sintaan",
      email: "sinta@gmail.com",
    },
    {
      nama: "Fachrian",
      email: "jambu@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Budi Santoso",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID: ${req.params.id} <br> Category ID: ${req.query.category}`
  );
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404<h1/>");
});

app.listen(port, () => {
  console.log(`This app listening to port ${port}`);
});

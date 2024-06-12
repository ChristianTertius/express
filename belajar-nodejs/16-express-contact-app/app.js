const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact } = require("./utils/contacts");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs"); // ejsnya langsung di declare disini (tidak perlu pake require)

// Third-party Middleware
app.use(expressLayouts);

// Built in middleware
app.use(express.static("public"));

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
  const contacts = loadContact();
  console.log(contacts);
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404<h1/>");
});

app.listen(port, () => {
  console.log(`This app listening to port ${port}`);
});

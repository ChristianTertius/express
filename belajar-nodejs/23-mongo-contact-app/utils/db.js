const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/budi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: "Sinta",
//   nohp: "084234123",
//   email: "sinta@gmail.com",
// });

// // simpan ke collection
// contact1.save().then((contact) => console.log(contact));

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "budi";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("Koneksi gagal");
  }

  // pilih database
  const db = client.db(dbName);

  // Menambahkan 1 data ke collection mahasiswa
  // db.collection("mahasiswa").insertOne({
  //   nama: "Gloria",
  //   email: "gloria@gmail.com",
  // },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Gagal menambahkan data");
  //     }
  //     console.log(result);
  //   }
  // )

  // menambhakan lebih dari 1 data
  db.collection("mahasiswa").insertMany([
    {
      nama: "Kaori Miyazono",
      email: "kaori@gmail.com",
    },
    {
      nama: "Aldean Tegar",
      email: "aldean@gmail.com"
    },
    {
      nama: "Arif Musadi",
      email: "arif@gmail.com"
    }
  ]);
});
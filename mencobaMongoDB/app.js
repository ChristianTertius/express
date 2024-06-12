const { MongoClient, ObjectID } = require("mongodb");
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

  // Menambahkan 0 data ke collection mahasiswa
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
  db.collection("mahasiswa").insertMany(
    [
      {
        nama: "Kaori Miyazono",
        email: "kaori@gmail.com",
      },
      {
        nama: "Aldean Tegar",
        email: "aldean@gmail.com",
      },
      {
        nama: "Arif Musadi",
        email: "arif@gmail.com",
      },
    ],

    (error, result) => {
      if (error) {
        return console.log("Data gagla di tambahkan");
      }
      console.log(result);
    }
  );

  // menampilkan semua data
  // console.log(
  //   db
  //     .collection("mahasiswa")
  //     .find()
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  // menampilkan data berdasarkan kriteria
  // console.log(
  //   db
  //     .collection("mahasiswa")
  //     .find({ _id: ObjectID("6666ab9ec607b53d67cdcdf6") })
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  // Mengubah data berdasarkan ID
  // const updatePromise = db.collection("mahasiswa").updateOne(
  //   {
  //     _id: ObjectID("6666ab9ec607b53d67cdcdf6"),
  //   },
  //   {
  //     $set: {
  //       email: "email@gmail.com",
  //     },
  //   }
  // );

  // updatePromise.then((result) => {
  //   console.log(result);
  // }).catch(error);

  // ubah data lebih dari satu
  // db.collection("mahasiswa").updateMany(
  //   {
  //     nama: 'Aldean Tegar'
  //   },
  //   {
  //     $set: {
  //       nama: 'Deankt Gaming'
  //     }
  //   }
  // );

  // Menghapus 1 data
  // db.collection('mahasiswa').deleteOne( //   { //     _id: "6666ab9ec607b53d67cdcdf6" //   }, // ).then((result) => { //   console.log(result) // }).catch((error) => {
  //   console.log(error);
  // })

  // menghapus >1 data
  db.collection("mahasiswa")
    .deleteMany({ nama: "Arif Musadi" })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

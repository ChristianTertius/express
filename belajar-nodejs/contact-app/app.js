const yargs = require("yargs");
const contacts = require("./contacts");

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: "String",
        type: "string",
      },
      email: {
        describe: "Email",
        demnadOption: "false",
        type: "string",
      },
      noHP: {
        describe: "Nomor HP",
        demandOption: "true",
        type: "string",
      },
    },
    handler(argv) {
      contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

// Menampilkan daftar semua nama contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua naam & no HP contact",
  handler() {
    contacts.listContact();
  },
});

// Menampilkan detail sebuah kontak
yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: "String",
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

// Menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: "String",
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  },
});
yargs.parse();

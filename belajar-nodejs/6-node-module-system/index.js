// console.log('selamat siang dunia');
// const nama = 'budi';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));
// const fs = require('fs'); // core module
// const moment = require('moment') // third party module / npm module

// console.log('selamat siang dunia')

// const PI = require('./coba')
// const cetakNama = require('./coba') // local module


const coba = require("./coba");
console.log(coba.mahasiswa.cetakMhs(), new coba.Orang());

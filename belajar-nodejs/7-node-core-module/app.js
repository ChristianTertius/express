// Core Module
// File System
const fs = require("fs");

// menuliskan string ke file (Synchronous)
// try{
//   fs.writeFileSync("data/test.txt", "Hello World2! secara synchronous!");
// } catch(e){
//   console.log(e);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile("data/test.txt", "Hello World secara Asynchrounous", (err) => {
//   console.log(err);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// membaca isi file (asynchronous)
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Readline
const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Masukkan nama anda: ', (nama) => {
  rl.question('Masukkan no Hp anda: ', (noHP) => {
    const contact = {nama, noHP}
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file)
   
    contacts.push(contact);
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terima Kasih sudah memasukkan data');
    
    
    rl.close();
  })
})
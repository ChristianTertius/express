const fs = require("fs");
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
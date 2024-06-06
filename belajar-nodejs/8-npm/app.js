const validator = require("validator");
const chalk = require('chalk');

// console.log(validator.isEmail('fasjdkfasdf@a.co'));
// console.log(validator.isMobilePhone('0812345324', 'id-ID'));
// console.log(validator.isNumeric('08123441234'));

// console.log(chalk.italic.bgBlue('Hello World!'));
const pesan = chalk `Lorem ipsum dolor {blue.bgRed.bold sit amet}, consectetur adipisicing elit. {bgGreen.red.bold Tenetur}, aliquid?`;
console.log(pesan);
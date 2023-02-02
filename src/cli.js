import readlineSync from 'readline-sync';
const getName = (name) => {
name = readlineSync.question('May I have your name? ');//Get name user
return console.log(`Hello, ${name}!`);
};
export default getName;


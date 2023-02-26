import readlineSync from 'readline-sync';

const getName = () => {
  const nameUser = readlineSync.question('May I have your name? '); // Get name user
  return console.log(`Hello, ${nameUser}!`);
};
export default getName;

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const nameUser = readlineSync.question('May I have your name? '); // Get name user
console.log(`Hello, ${nameUser}!`);
const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Max and Min includ
  }
  for (let i = 0; i < 3; i++) {
    const question = getRandom(1, 100); // setting the range of random numbers
    console.log(`Question: ${question}`);
    let answerCorrect = '';
    if (question % 2 === 0) {
      answerCorrect = 'yes'; // check the remainder of the division by 2
    } else {
      answerCorrect = 'no';
    }
    const answer = readlineSync.question('Your answer: '); // Get answer
    if (answer === answerCorrect) {
      if (i === 2) {
        console.log('Correct!');
        console.log(`Congratulations, ${nameUser}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(`\'yes\' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, ${nameUser}!`);
      break;
    }
  }
};
export default even;

import roundGames from '../index.js';
import getRandom from '../getRandom.js';

const prime = () => {
  const resultPrime = [
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  ];
  for (let i = 0; i < 3; i += 1) {
    let answerCorrect = 'yes';
    let questionPrime = '';
    const numberPrime = getRandom(2, 101); // setting the range of random number 1
    questionPrime = numberPrime;
    for (
      let startNumber = 2;
      startNumber <= Math.sqrt(numberPrime);
      startNumber += 1
    ) {
      if (numberPrime % startNumber === 0) {
        answerCorrect = 'no';
      }
    }
    resultPrime.push([questionPrime, answerCorrect]);
  }

  return resultPrime;
};
export default prime;
roundGames(prime());

import roundGames from "../src/index.js";
import getRandom from "../src/getRandom.js";

const prime = () => {
  let resultPrime = [
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  ];
  for (let i = 0; i < 3; i++) {
    let answerCorrect = "yes";
    let questionPrime = "";
    const numberPrime = getRandom(2, 101); // setting the range of random number 1
    questionPrime = numberPrime;
    for (
      var startNumber = 2;
      startNumber <= Math.sqrt(numberPrime);
      ++startNumber
    ) {
      if (numberPrime % startNumber === 0) {
        answerCorrect = "no";
      }
    }
    resultPrime.push([questionPrime, answerCorrect]);
  }

  return resultPrime;
};
export default prime;
roundGames(prime());

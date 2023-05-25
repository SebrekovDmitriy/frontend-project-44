import roundGames from "../src/index.js";
import getRandom from "../src/getRandom.js";

const prime = () => {
  let answerCorrect = "";
  let resultPrime = [
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  ];
  for (let i = 0; i < 3; i++) {
    let questionPrime = "";
    const numberPrime = 57;//getRandom(1, 100); // setting the range of random number 1
    questionPrime = numberPrime;
    for (
      var startNumber = 2;
      startNumber <= Math.sqrt(numberPrime);
      ++startNumber
    ) {
      if (numberPrime % startNumber === 0) {
        answerCorrect = "no"; // check the remainder of the division by 2
      } else {
        answerCorrect = "yes";
      }
    }
    resultPrime.push([questionPrime, answerCorrect]);
    
  }
  console.log(resultPrime);
  return resultPrime;
};
export default prime;
roundGames(prime());

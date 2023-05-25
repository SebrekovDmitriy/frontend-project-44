import roundGames from "../src/index.js";
import getRandom from "../src/getRandom.js";
import nod from "../src/nod.js";

const gcd = () => {
  let answerCorrect = "";
  let questionGcd = "";
  let resultGcd = ["Find the greatest common divisor of given numbers."];
  for (let i = 0; i < 3; i++) {
    const numberOneGcd = getRandom(1, 100); // setting the range of random number 1
    const numberTwoGcd = getRandom(1, 100); // setting the range of random number 2
    questionGcd = `${numberOneGcd} ${numberTwoGcd}`;
    answerCorrect = String(nod(numberOneGcd, numberTwoGcd));
    resultGcd.push([questionGcd, answerCorrect]);
  }
  return resultGcd;
};

roundGames(gcd());

export default gcd;

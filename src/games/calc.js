import roundGames from '../index.js';
import getRandom from '../getRandom.js';

const calc = () => {
  let answerCorrect = '';
  let questionCalc = '';
  const resultCalc = ['What is the result of the expression?'];
  for (let i = 0; i < 3; i += 1) {
    const baseOperator = ['+', '-', '*'];
    const numberOneCalc = getRandom(1, 30); // setting the range of random number 1
    const numberTwoCalc = getRandom(1, 30); // setting the range of random number 2
    const numberOperIndxCalc = getRandom(0, 2); // setting the range of random index operator
    const numberOperatorCalc = baseOperator[numberOperIndxCalc];
    // setting the range of random index operator
    if (numberOperIndxCalc === 0) {
      answerCorrect = String(numberOneCalc + numberTwoCalc);
      questionCalc = `${numberOneCalc} ${numberOperatorCalc} ${numberTwoCalc}`;
    }
    if (numberOperIndxCalc === 1) {
      answerCorrect = String(numberOneCalc - numberTwoCalc);
      questionCalc = `${numberOneCalc} ${numberOperatorCalc} ${numberTwoCalc}`;
    }
    if (numberOperIndxCalc === 2) {
      answerCorrect = String(numberOneCalc * numberTwoCalc);
      questionCalc = `${numberOneCalc} ${numberOperatorCalc} ${numberTwoCalc}`;
    }
    resultCalc.push([questionCalc, answerCorrect]);
  }

  return resultCalc;
};
roundGames(calc());

export default calc;

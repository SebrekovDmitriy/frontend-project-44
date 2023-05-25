import roundGames from "../src/index.js";
import getRandom from "../src/getRandom.js";

const even = () => {
  let answerCorrect = "";
  let resultEven = [
    'Answer "yes" if the number is even, otherwise answer "no".',
  ];
  for (let i = 0; i < 3; i++) {
    const questionEven = getRandom(1, 100); // setting the range of random numbers
    if (questionEven % 2 === 0) {
      answerCorrect = "yes"; // check the remainder of the division by 2
    } else {
      answerCorrect = "no";
    }
    resultEven.push([questionEven, answerCorrect]);
  }

  return resultEven;
};

roundGames(even());

export default even;

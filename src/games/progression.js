import roundGames from '../index.js';
import getRandom from '../getRandom.js';

const progression = () => {
  let answerCorrect = '';
  const resultProgression = ['What number is missing in the progression?'];
  for (let i = 0; i < 3; i += 1) {
    const questionProgression = [];
    const numberOneP = getRandom(1, 100); // setting the range of random number 1
    let baseProgression = numberOneP;
    const stepProg = getRandom(1, 20); // setting the range of random step progression
    const indexProg = getRandom(0, 9); // setting the range of random index progression
    for (let p = 0; p <= 9; p += 1) {
      questionProgression.push(baseProgression);
      baseProgression = baseProgression + stepProg;
    }
    answerCorrect = String(questionProgression[indexProg]);
    questionProgression.splice(indexProg, 1, '..');
    resultProgression.push([questionProgression.join(' '), answerCorrect]);
  }
  return resultProgression;
};

roundGames(progression());

export default progression;

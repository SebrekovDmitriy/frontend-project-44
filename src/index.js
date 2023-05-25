import readlineSync from 'readline-sync';

function roundGames(baseQuestion) {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? '); // Get name user
    console.log(`Hello, ${nameUser}!`);
    const nameGame = baseQuestion[0];
    console.log(nameGame);
    for (let i = 0; i < 3; i++) {
      const baseRound = baseQuestion[i + 1];
      const questionRound = baseRound[0];
      const answerRound = baseRound[1];
        console.log(`Question: ${questionRound}`);
    const answer = readlineSync.question('Your answer: '); // Get answer
    if (answer === answerRound) {
      if (i === 2) {
        console.log('Correct!');
        console.log(`Congratulations, ${nameUser}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerRound}'.\nLet\'s try again, ${nameUser}!`);
      break;
    }
    }
};
export default roundGames;
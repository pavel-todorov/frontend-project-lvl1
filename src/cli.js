import promptly from 'promptly';

const requestName = async () => {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const requestYesNoAnswer = async (number) => {
    console.log(`Question: ${number}`);
    const answer = await promptly.prompt('Your answer: ');
    const isEven = (number % 2) === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    return { answerString: answer, correctAnswer: correctAnswer, isCorrect: correctAnswer === answer };
}

const MAX_RANDOM = 99;
const getRandomInt = () => Math.floor(Math.random() * Math.floor(MAX_RANDOM));
  
const requestYesNoAnswers = async (questionsCount) => {
    const name = await promptly.prompt('May I have your name? ');
    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let correctAnswers = 0;
    while(correctAnswers < questionsCount) {
        const result = await requestYesNoAnswer(getRandomInt());
        if (result.isCorrect) {
            console.log('Correct!');
            correctAnswers += 1;
        } else {
            console.log(`'${result.answerString}' is wrong answer ;(. Correct answer was '${result.correctAnswer}'.\nLet's try again, ${name}!`)
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}

export { requestName, requestYesNoAnswers };

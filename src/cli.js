import promptly from 'promptly';

const requestName = async () => {
	const name = await promptly.prompt('May I have your name? ');
	console.log(`Hello, ${name}!`);
	return name;
};

const requestCycle = async (questionsCount, rules, functionality) => {
	const name = await requestName();
	console.log(rules);
	let correctAnswers = 0;
	/* eslint-disable no-await-in-loop */
	while (correctAnswers < questionsCount) {
		const question = functionality();
		console.log(`Question: ${question.questionString}`);
		const result = await promptly.prompt('Your answer: ');
		if (result === question.correctAnswer) {
			console.log('Correct!');
			correctAnswers += 1;
		} else {
			console.log(`'${result}' is wrong answer ;(. Correct answer was '${question.correctAnswer}'.\nLet's try again, ${name}!`);
			return;
		}
	}
	console.log(`Congratulations, ${name}!`);
};

export { requestName, requestCycle };

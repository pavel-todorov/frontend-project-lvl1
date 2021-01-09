#!/usr/bin/env node
import { requestCycle } from '../src/cli.js';
import { getRandomInt, isPrime } from '../src/mathUtils.js';

const NUMBER_OF_QUESTIONS = 3;

const makeQuestion = () => {
	const number = getRandomInt();
	const correctAnswer = isPrime(number) ? 'yes' : 'no';
	return {
		questionString: `${number}`,
		correctAnswer,
	};
};

(async () => {
	console.log('Welcome to the Brain Games!');
	await requestCycle(NUMBER_OF_QUESTIONS, 'Answer "yes" if given number is prime. Otherwise answer "no".', makeQuestion);
})();

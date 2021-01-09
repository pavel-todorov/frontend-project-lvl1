#!/usr/bin/env node
import { requestCycle } from '../src/cli.js';
import { getRandomInt, getMaxDivisor } from '../src/mathUtils.js';

const NUMBER_OF_QUESTIONS = 3;
const MAX_ARGUMENT = 100;

const makeQuestion = () => {
  const arg1 = getRandomInt(MAX_ARGUMENT);
	const arg2 = getRandomInt(MAX_ARGUMENT);
	const correctAnswer = getMaxDivisor(arg1, arg2);
	return {
		questionString: `${arg1} ${arg2}`,
		correctAnswer: `${correctAnswer}`,
	};
};

(async () => {
	console.log('Welcome to the Brain Games!');
	await requestCycle(NUMBER_OF_QUESTIONS, 'Find the greatest common divisor of given numbers.', makeQuestion);
})();

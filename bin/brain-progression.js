#!/usr/bin/env node
import { requestCycle } from '../src/cli.js';
import { getRandomIntFromDiapazone, generateProgression } from '../src/mathUtils.js';

const NUMBER_OF_QUESTIONS = 3;
const MIN_START_NUMBER = 2;
const MAX_START_NUMBER = 10;
const MIN_DELTA = 2;
const MAX_DELTA = 6;
const MIN_NUMBER_OF_PROGRESSION = 5;
const MAX_NUMBER_OF_PROGRESSION = 10;

const makeQuestion = () => {
  const start = getRandomIntFromDiapazone(MIN_START_NUMBER, MAX_START_NUMBER);
  const delta = getRandomIntFromDiapazone(MIN_DELTA, MAX_DELTA);
  const count = getRandomIntFromDiapazone(MIN_NUMBER_OF_PROGRESSION, MAX_NUMBER_OF_PROGRESSION);
  const progression = generateProgression(start, delta, count);
  const maskedItem = getRandomIntFromDiapazone(0, progression.length - 1);
  const questionStringStart = progression.slice(0, maskedItem).join(' ');
  const questionStringEnd = progression.slice(maskedItem + 1).join(' ');
  return {
    questionString: `${questionStringStart} .. ${questionStringEnd}`,
    correctAnswer: `${progression[maskedItem]}`,
  };
};

(async () => {
	console.log('Welcome to the Brain Games!');
	await requestCycle(NUMBER_OF_QUESTIONS, 'What number is missing in the progression?', makeQuestion);
})();

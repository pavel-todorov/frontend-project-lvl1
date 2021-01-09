#!/usr/bin/env node
import { requestCycle } from '../src/cli.js';
import { getRandomInt } from '../src/mathUtils.js';

const NUMBER_OF_QUESTIONS = 3;
const MAX_VALUES = 25;
const operations = ['+', '-', '*'];

const getOperation = () => operations[getRandomInt(operations.length - 1)];
const computeOperation = (arg1, arg2, operation) => {
  if (operation === '+') {
    return `${arg1 + arg2}`;
  }
  if (operation === '-') {
    return `${arg1 - arg2}`;
  }
  if (operation === '*') {
    return `${arg1 * arg2}`;
  }
  return 'NaN';
};

const makeQuestion = () => {
  const arg1 = getRandomInt(MAX_VALUES);
  const arg2 = getRandomInt(MAX_VALUES);
  const operation = getOperation();
  const correctAnswer = computeOperation(arg1, arg2, operation);
  return {
    questionString: `${arg1} ${operation} ${arg2}`,
    correctAnswer,
  };
};

(async () => {
  console.log('Welcome to the Brain Games!');
  await requestCycle(NUMBER_OF_QUESTIONS, 'What is the result of the expression?', makeQuestion);
})();

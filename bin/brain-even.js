#!/usr/bin/env node
import promptly from 'promptly';
import { requestCycle } from '../src/cli.js';
import { getRandomInt } from '../src/mathUtils.js'

const NUMBER_OF_QUESTIONS = 3;

const makeQuestion = () => {
    const number = getRandomInt();
    const isEven = (number % 2) === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    return { questionString: `${number}`, correctAnswer: correctAnswer };
}

(async () => {
    console.log('Welcome to the Brain Games!');
    await requestCycle(NUMBER_OF_QUESTIONS, 'Answer "yes" if the number is even, otherwise answer "no".', makeQuestion);
})();

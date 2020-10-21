#!/usr/bin/env node
import { requestYesNoAnswers } from '../src/cli.js';

const NUMBER_OF_QUESTIONS = 3;

console.log('Welcome to the Brain Games!');
requestYesNoAnswers(NUMBER_OF_QUESTIONS);

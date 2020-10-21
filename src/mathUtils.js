const MAX_RANDOM = 99;
const getRandomInt = (max = MAX_RANDOM) => Math.round(Math.random() * Math.floor(max));

export { getRandomInt };
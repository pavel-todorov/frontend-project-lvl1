const MAX_RANDOM = 99;

export default function getRandomInt(max = MAX_RANDOM) {
    return Math.round(Math.random() * Math.floor(max));
}

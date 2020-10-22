const DEFAULT_MAX_RANDOM = 99;

const getRandomInt = (max = DEFAULT_MAX_RANDOM) => Math.round(Math.random() * Math.floor(max));

function getRandomIntFromDiapazone(min = 0, max = DEFAULT_MAX_RANDOM) {
    return Math.round(min + Math.random() * Math.floor(max - min));
}

const getMaxDivisor = (arg1, arg2) => {
    let res = 1;
    for (let i = 2; i < Math.min(arg1, arg2); i += 1) {
        if ((arg1 % i === 0) && (arg2 % i === 0)) {
            res = i;
        }
    }
    return res;
};

const generateProgression = (start, delta, count) => {
    const res = [];
    let current = start;
    while (res.length < count) {
        res.push(current);
        current += delta;
    }
    return res;
};

export {
    getRandomInt,
    getMaxDivisor,
    getRandomIntFromDiapazone,
    generateProgression,
};

const DEFAULT_MAX_RANDOM = 99;

const getRandomInt = (max = DEFAULT_MAX_RANDOM) => Math.round(Math.random() * Math.floor(max));

const getMaxDivisor = (arg1, arg2) => {
    let res = 1;
    for (let i = 2; i < Math.min(arg1, arg2); i += 1) {
        if ((arg1 % i === 0) && (arg2 % i === 0)) {
            res = i;
        }
    }
    return res;
};

export { getRandomInt, getMaxDivisor };

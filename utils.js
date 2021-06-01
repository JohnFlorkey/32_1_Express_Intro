function notANumber(array) {
    return array.filter(x => isNaN(parseInt(x, 10)));
}

function mean(array) {
    return array
            .map((element) => parseInt(element))
            .reduce((acc, curr) => (acc + curr))
            / array.length;
}

function median(array) {
    const sortedNums = array
                        .map((element) => parseInt(element))
                        .sort();
    if(sortedNums.length % 2 === 0) {
        const mid = Math.floor(sortedNums.length / 2);
        median = (sortedNums[mid - 1] + sortedNums[mid]) / 2;
    } else {
        const mid = Math.floor(sortedNums.length / 2);
        median = sortedNums[mid];
    }
    return median
}

function mode(array) {
    const freqMap = array
                        .reduce((acc, curr) => {
                            if(acc.has(curr)) {
                                acc.set(curr, acc.get(curr) + 1);
                            } else {
                                acc.set(curr, 1);
                            }
                            return acc;
                        }, new Map());
    let maxFreq = 0;
    freqMap.forEach((value, key) => {
        if (value > maxFreq) {
            maxFreq = value;
        }
    });
    mode = [];
    freqMap.forEach((value, key) => {
        if (value === maxFreq) {
            mode.push(key);
        }
    });
    return mode;
}

module.exports = {
    notANumber,
    mean,
    median,
    mode
}
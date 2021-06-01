const { mean, median, mode } = require('./utils');

const nums = [1,3,3,5,5,7]
test('mean computed correctly', () => {
    expect(mean(nums)).toEqual(4);
    
})

test('median computed correctly', () => {
    expect(median(nums)).toEqual(4);
})

test('mode computed correctly', () => {
    expect(mode(nums)).toEqual([3,5]);
})
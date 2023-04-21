const fb = require('./fizz-buzz');

describe('fizzBuzz', () => {
    it ('should return `Fizz` when number is divisible by 3, `Buzz` when divisible by 5 and `FizzBuzz` by both 3 and 5', () => {
        let result = fb.fizzBuzz([1, 2, 3, 4, 5]);
        expect(result).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);

        result = fb.fizzBuzz([1, 3, 5, 10, 30]);
        expect(result).toStrictEqual(['1', 'Fizz', 'Buzz', 'Buzz', 'FizzBuzz']);
    });
});

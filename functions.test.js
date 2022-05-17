import { length, push, pop } from './functions.js';

describe('Given the function length', () => {
    const arr = [2, 3];
    let result;
    const expectedResult = 2;
    beforeAll(() => {
        result = length(arr);
    });
    describe('When it receives an array [2, 3]', () => {
        test('Then it should return 2', () => {
            expect(result).toBe(expectedResult);
        });
    });
});

describe('Given the function push', () => {
    const arr = [2, 3];
    const item = 4;
    let result;
    const expectedResult = 3;
    beforeAll(() => {
        result = push(arr, item);
    });
    describe('When it receives an array [2, 3] and an item 4', () => {
        test('Then it should return 3', () => {
            expect(result).toBe(expectedResult);
        });
    });
});

describe('Given the function pop', () => {
    const arr = [2, 3, 4, 5];
    let result;
    const expectedResult = 5;
    beforeAll(() => {
        result = pop(arr);
    });
    describe('When it receives an array [2, 3, 4, 5]', () => {
        test('Then it should return array 5', () => {
            expect(result).toBe(expectedResult);
        });
        test('Then it shoul remove the last element of the array', () => {
            expect(arr).not.toContain(5);
        });
    });
    describe('When it receives an array []', () => {
        const arr = [];
        let result;
        const expectedResult = undefined;
        beforeAll(() => {
            result = pop(arr);
        });
        test('Then it should return array undefined', () => {
            expect(result).toBe(expectedResult);
        });
    });
    describe('When it doesnt recibe an array', () => {
        const arr = 'Pepe';
        test('Then it should throw an error', () => {
            expect(() => {
                pop(arr);
            }).toThrow('Is not an array');
        });
    });
});

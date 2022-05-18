import { length, push, pop, shift, unshift } from './functions.js';

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
    describe('When it receives an  empty array []', () => {
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
        const arr = 'pepe';
        test('Then it should throw an error', () => {
            expect(() => {
                pop(arr);
            }).toThrow('Is not an array');
        });
    });
    describe('When it recibes a function', () => {
        test('Then it should throw an error', () => {
            let prueba = () => {};
            expect(() => {
                pop(prueba);
            }).toThrowError('Is a function');
        });
    });
});

describe('Given the function shift', () => {
    describe('When it receives an array [2, 3, 4]', () => {
        const arr = [2, 3, 4, 5];
        let result;
        const expectedResult = 2;
        beforeAll(() => {
            result = shift(arr);
        });
        test('Then it should return 2', () => {
            expect(result).toBe(expectedResult);
        });
        test('Then it shoul remove the first element of the array', () => {
            expect(arr).not.toContain(2);
        });
    });
    describe('When it receives an  empty array []', () => {
        const arr = [];
        let result;
        const expectedResult = undefined;
        beforeAll(() => {
            result = shift(arr);
        });
        test('Then it should return array undefined', () => {
            expect(result).toBe(expectedResult);
        });
    });
    describe('When it doesnt recibe an array', () => {
        const arr = 'pepe';
        test('Then it should throw an error', () => {
            expect(() => {
                shift(arr);
            }).toThrow('Is not an array');
        });
    });
});

describe('Given the function unshift', () => {
    describe('When it receives ar array [1, 2] and a primitive', () => {
        const arr = [1, 2];
        let item = 3;
        let result;
        const expectedResult = 3;
        beforeAll(() => {
            result = unshift(arr, item);
        });
        test('Then it should return the array length', () => {
            expect(result).toBe(expectedResult);
        });
        test('Then it shoul add the item as idex 0 of the array', () => {
            expect(arr).toContain(item);
        });
    });
});

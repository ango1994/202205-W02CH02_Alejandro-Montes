export function length(arr) {
    return arr.length;
}
export function push(arr, item) {
    arr[arr.length] = item;
    return arr.length;
}
export function pop(arr) {
    const poped = arr[arr.length - 1];
    if (typeof arr === 'function') {
        throw new Error('Is a function');
    }
    if (typeof arr !== 'object') {
        throw new Error('Is not an array');
    }
    if (arr.length === 0) {
        return undefined;
    }
    arr.length = arr.length - 1;
    return poped;
}
export function shift(arr) {
    if (typeof arr !== 'object') {
        throw new Error('Is not an array');
    }
    const removed = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    return removed;
}
export function unshift(arr, item) {
    for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1];
        if (i === 0) {
            arr[0] = item;
        }
    }
    return arr.length;
}
export function some(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            return true;
        }
    }
}
export function every(arr, func) {
    let itemsInside = 0;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            itemsInside++;
        }
    }
    if (itemsInside === arr.length) {
        return true;
    }
    return false;
}

export function find(arr, func, index) {
    for (let i = index || 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            return arr[i];
        }
    }
}

export function filter(arr, func, index) {
    const returnedArray = [];
    for (let i = index || 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            push(returnedArray, arr[i]);
        }
    }
    return returnedArray;
}

export function length(arr) {
    return arr.length;
}

export function push(arr, item) {
    arr[arr.length] = item;
    return arr.length;
}

export function pop(arr) {
    const poped = arr[arr.length - 1];
    if (arr.length === 0) {
        return undefined;
    }
    if (typeof arr !== 'object') {
        throw new Error('Is not an array');
    }
    if (Object.is(arr, 'function')) {
        throw new Error('Is a function');
    }

    arr.length = arr.length - 1;
    return poped;
}
export function shift(arr) {
    const removed = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    return removed;
}

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

    if (!Array.isArray(arr)) {
        throw new Error('Is not an array');
    }
    arr.length = arr.length - 1;
    return poped;
}

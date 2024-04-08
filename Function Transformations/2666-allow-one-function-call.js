function once(fn) {
    let hasBeenCalled = false;
    let result;

    return function(...args) {
        if (!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result;
        } else {
            return undefined;
        }
    };
}

function add(a, b) {
    return a + b;
}

const addOnce = once(add);

console.log(addOnce(2, 3)); 
console.log(addOnce(4, 5)); 

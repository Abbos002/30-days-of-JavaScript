function filterArray(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];

function isEven(x) {
    return x % 2 === 0;
}

const filteredArr = filterArray(arr, isEven);
console.log(filteredArr); // Output: [2, 4]

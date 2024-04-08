/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const returnedArray = [];
 for (let i = 0; i < arr.length; i++) {
     returnedArray[i] = fn(arr[i], i);
 }
 return returnedArray;
}
const arr = [1, 2, 3, 4, 5];

function increment(x) {
 return x + 1;
};
const mappedArray = map(arr, increment);
console.log(mappedArray); // Output: [2, 3, 4, 5, 6]
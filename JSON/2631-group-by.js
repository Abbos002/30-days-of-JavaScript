/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const grouped = {};

    // Iterate over the array
    this.forEach(item => {
        const key = fn(item); // Get the key using the callback function
        if (!grouped[key]) {
            grouped[key] = []; // Initialize an empty array if key doesn't exist
        }
        grouped[key].push(item); // Push the item to the corresponding key
    });

    return grouped;
};

// Example usage:
const arr = [1, 2, 3, 4, 5];

// Define a callback function to extract even and odd numbers
const keyExtractor = (num) => num % 2 === 0 ? 'even' : 'odd';

// Call groupBy method on the array with the callback function
const grouped = arr.groupBy(keyExtractor);

console.log(grouped);

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
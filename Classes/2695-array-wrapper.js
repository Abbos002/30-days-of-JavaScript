class ArrayWrapper {
    constructor(arr) {
        this.arr = arr;
    }

    // Overloading the addition operator (+) to sum the elements of two instances
    static addArrays(arr1, arr2) {
        const sumArray = [];
        const maxLength = Math.max(arr1.length, arr2.length);

        for (let i = 0; i < maxLength; i++) {
            const num1 = arr1[i] || 0;
            const num2 = arr2[i] || 0;
            sumArray.push(num1 + num2);
        }

        return new ArrayWrapper(sumArray);
    }

    // Overriding the toString() function to return a comma-separated string surrounded by brackets
    toString() {
        return `[${this.arr.join(',')}]`;
    }
}

// Example usage:
const array1 = new ArrayWrapper([1, 2, 3]);
const array2 = new ArrayWrapper([4, 5, 6]);

const sumArray = ArrayWrapper.addArrays(array1.arr, array2.arr);
console.log(sumArray.toString()); // Output: [5,7,9]

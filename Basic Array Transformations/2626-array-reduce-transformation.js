function customReduce(nums, fn, init) {
    let val = init;
    
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    
    return val;
}


const nums = [1, 2, 3, 4, 5];

function sum(prev, current) {
    return prev + current;
}

const initValue = 0;
const result = customReduce(nums, sum, initValue);
console.log(result); // Output: 15 (1 + 2 + 3 + 4 + 5)

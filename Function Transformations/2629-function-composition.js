function composeFunctions(functions) {
    if (functions.length === 0) {
        // If the array of functions is empty, return the identity function
        return function(x) {
            return x;
        };
    } else if (functions.length === 1) {
        // If there's only one function in the array, return it
        return functions[0];
    } else {
        // Recursively compose the functions
        return function(x) {
            // Start with the last function in the array
            let result = functions[functions.length - 1](x);
            // Compose it with the result of composing the rest of the functions
            for (let i = functions.length - 2; i >= 0; i--) {
                result = functions[i](result);
            }
            return result;
        };
    }
}


const f1 = function(x) {
    return x * 2;
};
const f2 = function(x) {
    return x + 3;
};
const f3 = function(x) {
    return x - 1;
};

const composedFn = composeFunctions([f1, f2, f3]);
console.log(composedFn(5)); 

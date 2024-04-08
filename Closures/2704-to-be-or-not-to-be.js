/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                console.log("Equal");
            } else {
                console.error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                console.log("Not Equal");
            } else {
                console.error("Equal");
            }
        }
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
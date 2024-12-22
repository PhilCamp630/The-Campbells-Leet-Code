/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // Edge case for empty array

    let write = 0; // Pointer for the position of unique elements

    for (let read = 1; read < nums.length; read++) {
        if (nums[read] !== nums[write]) {
            write++; // Move write pointer
            nums[write] = nums[read]; // Overwrite with unique element
        }
    }

    return write + 1; // k is the number of unique elements
};
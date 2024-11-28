/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    numHash = {}
    for (let i = 0; i < nums.length; i++){
        let diff = target - nums[i];

        if(numHash.hasOwnProperty(diff)) {
            return [i, numHash[diff]]
        }
        numHash[nums[i]] = i;
    }
    return null

};


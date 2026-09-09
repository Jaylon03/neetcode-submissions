class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let numSet = new Set(nums)
        let n = nums.length;

        for(let i = 0; i <= n; i++){
            if(!numSet.has(i)){
                return i
            }
        }
    }
}

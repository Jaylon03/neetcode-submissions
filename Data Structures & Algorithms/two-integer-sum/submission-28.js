class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const contain = new Map()

        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(contain.has(diff)){
               return [contain.get(diff), i]
            }

            contain.set(nums[i], i)
        }

        return []
    }
}

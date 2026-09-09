class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let contain = new Map()
        

        for(let i = 0; i < nums.length; i++){
            let numNeed = target - nums[i]
            if(contain.has(numNeed)){
                return [contain.get(numNeed), i]
            }

            contain.set(nums[i], i)
        }

        return []
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = new Map()

        for(let i = 0; i < nums.length; i++){
            let needed = target - nums[i]
            if(res.has(needed)){
                return [res.get(needed), i]
            }

            res.set(nums[i], i)
        }

        return []
    }
}

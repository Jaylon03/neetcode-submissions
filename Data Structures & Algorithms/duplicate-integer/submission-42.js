class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let container = new Set();

        for(let num of nums){
            if(container.has(num)){
                return true
            }

            container.add(num)
        }

        return false
    }
}

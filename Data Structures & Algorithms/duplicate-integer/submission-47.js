class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let container = new Set();

        for(let n of nums){
            if(container.has(n)){
                return true
            }

            container.add(n)
        }

        return false
    }
}

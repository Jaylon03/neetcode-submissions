class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Map();

        for(let n of nums){
            if(seen.has(n)){
                return true
            }
            seen.set(n)
        }

        return false
    }
}


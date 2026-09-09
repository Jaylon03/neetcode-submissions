class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let res = new Set()

        for (let n of nums){
            if(res.has(n)){
                return true
            }

            res.add(n)
        }
        return false
    }
}

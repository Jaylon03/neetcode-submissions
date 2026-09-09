class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let contain = new Map()

        for(let n of nums){
            if(contain.has(n)){
                return true
            }

            contain.set(n)
        }

        return false
    }
}

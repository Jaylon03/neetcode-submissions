class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let contain = new Set()

        for(let n of nums){
            if(contain.has(n)){
                return true
            }

            contain.add(n)
        }

        return false
    }
}

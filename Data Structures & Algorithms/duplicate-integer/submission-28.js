class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numSorted = nums.sort((a,b) => (a - b))


        for (let i = 1; i < numSorted.length; i++){
            if(numSorted[i] === numSorted[i - 1]){
                return true
            }

        }

        return false
    }
}

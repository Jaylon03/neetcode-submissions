class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const box = new Array(n).fill(1)

        for(let i = 1; i < n; i++){
            box[i] = box[i - 1] * nums[i - 1]
        }


        let postfix = 1
        for(let i = n - 1; i >= 0; i--){
            box[i] *= postfix
            postfix *= nums[i]
        }

        return box
    }

}

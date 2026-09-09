class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {   
        let nums = numbers;

        let l = 0,
            r = nums.length - 1;


        while(l < r){

            const curSum = nums[l] + nums[r]

            if(curSum > target){
                r--;
            }else if(curSum < target){
                l++
            } else{
                return [l + 1, r + 1];
            }
        }

        return []

        
    }
}

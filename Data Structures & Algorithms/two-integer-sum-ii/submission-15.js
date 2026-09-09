class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0,
            j = numbers.length - 1;

        while(i < j){
            const cursum = numbers[i] + numbers[j]

            if(cursum > target){
                j--
            }else if(cursum < target){
                i++
            }else{
                return [i + 1, j + 1]
            }
        }

        return []
    }
}

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let array = matrix.flat()

        let l = 0,
            r = array.length - 1;

        while(l <= r){
            let mid = l + Math.floor((r - l) / 2)

            if(array[mid] < target){
                l = mid + 1
            }else if(array[mid] > target){
                r = mid - 1
            }else{
                return true
            }
        }

        return false
    }
}

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length
        let COLS = matrix[0].length

        let l = 0,
            r = ROWS * COLS - 1;

        while(l <= r){
            let m = Math.floor(l + (r - l) / 2)
            let rows = Math.floor(m / COLS),
                cols = m % COLS

            if(target > matrix[rows][cols]){
                l = m + 1
            } else if(target < matrix[rows][cols]){
                r = m - 1
            }else{
                return true
            }
        }

        return false
    }
}

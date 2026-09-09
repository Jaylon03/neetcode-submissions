class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROW = matrix.length,
        COLS = matrix[0].length;

        let l = 0,
            r = ROW * COLS;
            while (l < r){

                let m = l + Math.floor((r-l) / 2)
                let rows = Math.floor(m / COLS),
                    cols = m % COLS
                
                if(matrix[rows][cols] > target){
                    r = m 

                } else {
                    l = m + 1
                }
                if (matrix[rows][cols] === target) {
                    return true;
                }

            }

        return false
    }
}

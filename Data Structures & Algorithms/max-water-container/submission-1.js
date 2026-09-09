class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0; // left pointer at start
        let r = heights.length - 1;  // right pointer at end
        let res = 0; // stores max area

        // keep shrinking the window until the two pointers meet
        while(l < r){
            // calculate area using current pair of lines
            const area = Math.min(heights[l], heights[r]) * (r - l)

            res = Math.max(res, area); // update result if this area is larger

            // move the pointer at the shorter line
            if(heights[l] <= heights[r]){
                l++
            } else {
                r--
            }

            



        }

        return res;
    }
}

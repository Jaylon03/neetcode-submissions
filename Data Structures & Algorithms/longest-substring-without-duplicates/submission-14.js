class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seen = new Map();
        let l = 0;
        let res = 0


        for(let r = 0; r < s.length; r++){
            if(seen.has(s[r])){
                l = Math.max(seen.get(s[r]) + 1, l)
            }
            seen.set(s[r], r)
            res = Math.max(res, r - l + 1)
        }

        return res
    }
}

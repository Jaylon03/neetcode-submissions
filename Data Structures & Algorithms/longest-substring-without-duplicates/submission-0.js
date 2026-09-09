class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;

        for(let i = 0; i < s.length; i++){
            let seen = new Set;
            for(let j = i; j < s.length; j++){
                if(seen.has(s[j])){
                    break;
                }

                seen.add(s[j])
            }

            res = Math.max(res, seen.size)
        }

        return res
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count ={}
        let l = 0;
        let maxFreq = 0;
        let char;
        let res = 0;

        for(let r = 0; r < s.length; r++){
            char = s[r]
            count[char] = (count[char] || 0) + 1

            maxFreq = Math.max(maxFreq, count[char])


            while((r - l + 1) - maxFreq > k){
                count[s[l]]--
                l++
            }

            res = Math.max((r - l + 1), res)

        }

        return res
    }
}

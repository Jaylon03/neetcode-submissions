class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let container = new Set()
        let start = 0;
        let output = 0;

        for(let end = 0; end < s.length; end++){
           while(container.has(s[end])){
                container.delete(s[start])
                start++      
           } 
            container.add(s[end])
            output = Math.max(output, end - start + 1)
        }

        return output
    }
}

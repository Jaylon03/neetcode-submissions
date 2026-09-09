class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let l = 0,
            r = s.length - 1
        
        while(l < r){
            let left = s[l]
            let right = s[r]

            if(!(/[a-z0-9]/i.test(left))){
                l++
                continue
            }
            if(!(/[a-z0-9]/i.test(right))){
                r--
                continue
                
            }
            if(left.toLowerCase() !== right.toLowerCase()){
                return false
            }

            l++
            r--
        }

        return true
    }
}

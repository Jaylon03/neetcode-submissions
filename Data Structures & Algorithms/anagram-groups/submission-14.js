class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}

        for(let s of strs){
           const ssorted = s.split('').sort().join()
           if(!res[ssorted]){

                res[ssorted] = []
           } 

           res[ssorted].push(s)
        }

        return Object.values(res)
    }
}

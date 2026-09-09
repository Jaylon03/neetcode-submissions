class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map()

        for (let s of strs){
            let sSorted = s.split('').sort().join()

            if(!res[sSorted]){
                res[sSorted] = []
            }
            res[sSorted].push(s)
        }

        return Object.values(res)
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let container = {}

        

        for (let s of strs){
            let sSorted = s.split('').sort().join()
            if(!container[sSorted]){
                container[sSorted] = [];
            }
            container[sSorted].push(s)
        }

        return Object.values(container)
    }
    
}

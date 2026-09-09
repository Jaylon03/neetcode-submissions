class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let container = new Map();

        for(let n of strs){
            let sortedKey = n.split('').sort().join('')
            if(!container.has(sortedKey)){
                container.set(sortedKey, [])
            }

            container.get(sortedKey).push(n)
        }

        return Array.from(container.values())
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}

        for(let n of nums){
            count[n] = (count[n] || 0) + 1
        }

        let heap = new MinPriorityQueue((a) => a[1])
        for(let [num, values] of Object.entries(count)){

            heap.enqueue([num, values])
            if(heap.size() > k) heap.dequeue()
        }

        let res = []

        for(let i = 0; i < k; i++){
            let [num, values] = heap.dequeue()
            res.push(num)

        }

        return res

    }
}

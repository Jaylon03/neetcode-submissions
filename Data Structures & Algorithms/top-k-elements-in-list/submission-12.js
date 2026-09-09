class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}

        for(const n of nums){
            count[n] = (count[n] || 0) + 1
        }

        let heap = new MinPriorityQueue((x) => (x[1]))

        for(let [nums, cnt] of Object.entries(count)){
            heap.enqueue([nums, cnt])

            if(heap.size() > k) heap.dequeue()
        }

        let res = []

        for(let i = 0; i < k; i++){
            let [nums, cnt] = heap.dequeue()
            res.push(nums)
        }

        return res

    }
}

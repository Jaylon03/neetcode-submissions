class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        for(let n of nums){
            count[n] = (count[n] || 0 ) + 1
        }

        let heap = new MinPriorityQueue((x) => (x[1]))
        for(const [num, cnt] of Object.entries(count)){
            heap.enqueue([num, cnt])

            if(heap.size() > k) heap.dequeue();

        }

        let res = []
        for(let i = 0; i < k; i++){

            let [num, cnt] = heap.dequeue()
            res.push(num)
        }
        return res;

    }
}

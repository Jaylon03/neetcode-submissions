class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let before = 0;
        let after = 0;
        let res = 0
        

        for(let i = 0; i < prices.length; i++){
            before = prices[i]
            for(let j = i + 1; j < prices.length; j++){
                after = prices[j]
                res = Math.max(res, after - before)
                
            }
        }

        return res
    }
}

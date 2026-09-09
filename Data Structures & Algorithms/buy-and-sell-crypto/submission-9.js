class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0

        for(let i = 0; i < prices.length; i++){
            for(let j = i; j < prices.length; j++){
                let profit = prices[j] - prices[i]
                maxP = Math.max(maxP, profit)
            }
        }

        return maxP
    }
}

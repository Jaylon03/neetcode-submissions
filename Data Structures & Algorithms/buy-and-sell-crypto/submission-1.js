class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let to_buy = 0;
        let to_sell = 0;
        let res = 0;


        for(let i = 0; i < prices.length; i++){
            to_buy = prices[i]
            for(let j = i + 1; j < prices.length; j++){
                to_sell = prices[j]

              res =  Math.max(res, to_sell - to_buy)
            }

             
        }

        return res
    }
}

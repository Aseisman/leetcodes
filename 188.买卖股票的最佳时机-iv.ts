/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
function maxProfit(k: number, prices: number[]): number {
    // dp[i][k][0] 第i天没有股票的利润，还可以交易k次,
    // dp[i][k][1] 第i天持有股票的利润，还可以交易k次,

    // dp[i][k][0] 第i天没有股票的利润, 还可以交易k次,
    // dp[i][k][1] 第i天持有股票的利润, 还可以交易k次,

    // 前一天也没持有股票  or 前一天持有股票，然后今天卖掉
    // dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])

    //前一天没有股票然后买入，or 前一天本来就有股票
    // dp[i][k][1] = max(dp[i-1][k-1][0]-prices[i], dp[i-1][k][1])

    interface Profit {
        buy: number,
        sell: number
    }

    // 优化成二维
    let n = prices.length;
    let profit = [] as Profit[];//和123题一样 求出所有k的状态
    for (let i = 0; i <= k; i++) {
        profit[i] = {
            buy: -prices[0],//持有股票
            sell: 0,//没股票
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            profit[j] = {
                sell: Math.max(profit[j].sell, profit[j].buy + prices[i]),
                buy: Math.max(profit[j].buy, profit[j-1].sell - prices[i]),
            }
        }
    }
    return profit[k].sell;
};
// @lc code=end


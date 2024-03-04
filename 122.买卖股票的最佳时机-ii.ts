/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    // dp[i][0] 第i天没有股票的利润， dp[i][1] 第i天持有股票的利润；
    // dp[i][0] = max(dp[i-1][1]+prices[i],dp[i-1][0])//前一天持有股票，然后今天卖掉， or 前一天也没持有股票
    // dp[i][1] = max(dp[i-1][0]-prices[i],dp[i-1][1])//前一天没有股票然后买入，or 前一天本来就有股票

    // 优化成一维
    // dp[0] 表示 没有股票的利润，dp[1] 表示有股票的利润
    // 最后返回dp[o],因为肯定要卖出去
    let dp = [0, -prices[0]];
    for (let i = 1; i < prices.length; i++) {
        dp[0] = Math.max(dp[0], dp[1] + prices[i]);
        dp[1] = Math.max(dp[1], dp[0] - prices[i]);
    }
    return dp[0];
};
// @lc code=end


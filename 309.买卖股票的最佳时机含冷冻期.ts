/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 买卖股票的最佳时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {

    // dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
    //冷却时间1天，所以要从 i - 2 天转移状态
    // dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 2][k - 1][0] - prices[i])

    // 不限制k
    // dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    // dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])

    // 降维
    // dp[0] = Math.max(dp[0], dp[1] + prices[i]) 
    // dp[1] = Math.max(dp[1], freezeDay  - prices[i])
    // freezeDay 是上个循环中的dp[0]

    let dp = [0, -prices[0]];
    let freezeDay = 0;
    for (let i = 1; i < prices.length; i++) {
        let temp = dp[0];
        dp[0] = Math.max(dp[0], dp[1] + prices[i]);
        dp[1] = Math.max(dp[1],freezeDay - prices[i]);
        freezeDay = temp;
    }
    return dp[0];
};
// @lc code=end


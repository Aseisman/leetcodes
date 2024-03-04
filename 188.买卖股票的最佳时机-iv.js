/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    // 套状态转移方程
    // dp[i][1][0] = max(dp[i-1][1][0],dp[i-1][1][1]+price[i]);
    // dp[i][1][1] = max(dp[i-1][1][1],dp[i-1][0][0]-price[i]);
};
// @lc code=end


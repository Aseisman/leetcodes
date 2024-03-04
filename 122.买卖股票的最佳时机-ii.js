/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 套状态转移方程
    // dp[i][k][0 or 1]表示 第i天 交易的第k次，手中是否持有股票状态下 的获得的多少利润
    // dp[i][1][0] = max(dp[i-1][1][0],dp[i-1][1][1]+price[i]); 第i天 第1次交易 手中没持有股票= max(上一天没持有，上一天持有了然后卖出去，即+price[i])
    // dp[i][1][1] = max(dp[i-1][1][1],dp[i-1][0][0]-price[i]); 第i天，第1次交易 手中持有股票 = max(上一天仍然持有，上一天没买呢，没持有，即-price[i]) 有种早知道就不买的那种状态，迷途知返
    // 因为k为任意值；
    // dp[i][0]=max(dp[i-1][0],dp[i-1][1]+price[i]);
    // dp[i][1]=max(dp[i-1][1],dp[i-1][0]-price[i])

    // base 
    // dp[i][k][0]=0; 0<=i<=prices.length; 0<=k<=多少次交易;
    // dp[i][k][1]=infinity; 0<=i<=prices.length; 0<=k<=多少次交易;

    let n = prices.length;
    let sell = 0;
    let buy = -prices[0];
    for(let i =1 ;i<n;i++){
        sell = Math.max(sell,buy+prices[i]);
        buy = Math.max(buy,sell-prices[i]);
    }
    return sell;
};
// @lc code=end


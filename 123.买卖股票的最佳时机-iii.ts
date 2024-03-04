/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    // dp[i][k][0] 第i天没有股票的利润，还可以交易k次,
    // dp[i][k][1] 第i天持有股票的利润，还可以交易k次,
    
    // dp[i][k][0] 第i天没有股票的利润, 还可以交易k次,
    // dp[i][k][1] 第i天持有股票的利润, 还可以交易k次,
    
    // 前一天也没持有股票  or 前一天持有股票，然后今天卖掉
    // dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])

    //前一天没有股票然后买入，or 前一天本来就有股票
    // dp[i][k][1] = max(dp[i-1][k-1][0]-prices[i], dp[i-1][k][1])


    // 优化成一维
    let buy_1 = -prices[0], sell_1 = 0; // buy_1 表示买了第一次股票,并在手里的利润, sell_1 表示没有股票的利润 
    let buy_2 = -prices[0], sell_2 = 0; // bug_2 表示买了第二次股票,并在手里的利润, sell_2 表示没有股票的利润
    // 最后返回sell_2,因为肯定要卖出去

    for (let i = 1; i < prices.length; i++) {
        // 这里要注意顺序,
        // 必须是从买了两次开始算起,因为两次的会依赖到只买了一次的时候的值;
        // 必须从sell算起,因为sell依赖于买了没;
        sell_2 = Math.max(sell_2, buy_2 + prices[i]);
        buy_2 = Math.max(sell_1 - prices[i], buy_2);//引用了sell_1
        sell_1 = Math.max(sell_1, buy_1 + prices[i]);
        buy_1 = Math.max(0 - prices[i], buy_1);//引用了0
    }
    return sell_2;
};
// @lc code=end


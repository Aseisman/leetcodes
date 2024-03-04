/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
function change(amount: number, coins: number[]): number {
  // dp[i]表示 金额i 有多少种组合方式;
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  // 背包问题:求组合数,外层遍历物品,内层遍历背包;  
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[amount];
}
// @lc code=end

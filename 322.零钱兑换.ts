/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
// function coinChange(coins: number[], amount: number): number {
//   // 回溯，dfs
//   // 硬币无限，说明不用visited
//   // 会超时，需要用memo进行优化；
//   const memo = {};
//   const backTrack = (sum: number) => {
//     if (sum == amount) return 0;
//     if (sum > amount) return -1;
//     if (memo[sum]) return memo[sum];
//     let res = Infinity;
//     for (let i = coins.length - 1; i >= 0; i--) {
//       const sub = backTrack(sum + coins[i]);
//       if (sub == -1) continue;
//       res = Math.min(res, sub + 1);
//     }
//     memo[sum] = res == Infinity ? -1 : res;
//     return memo[sum];
//   };
//   return backTrack(0);
// }
function coinChange(coins: number[], amount: number): number {
  // dp,动态规划
  // dp[i]表示面额为i 所需要最少的硬币
  const dp = new Array(amount+1).fill(Infinity);
  dp[0] = 0;
  // 背包问题:求排列数,外层遍历背包,内层遍历物品;  
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      i - coin >= 0 && (dp[i] = Math.min(dp[i], dp[i - coin] + 1));
    }
  }
  return dp[amount] == Infinity ? -1 : dp[amount];
}

// @lc code=end

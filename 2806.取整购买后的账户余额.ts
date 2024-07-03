/*
 * @lc app=leetcode.cn id=2806 lang=typescript
 *
 * [2806] 取整购买后的账户余额
 */

// @lc code=start
function accountBalanceAfterPurchase(purchaseAmount: number): number {
  return 100 - Math.round(purchaseAmount / 10) * 10;
}
// @lc code=end
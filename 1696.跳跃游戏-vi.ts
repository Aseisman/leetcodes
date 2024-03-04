/*
 * @lc app=leetcode.cn id=1696 lang=typescript
 *
 * [1696] 跳跃游戏 VI
 */

// @lc code=start
function maxResult(nums: number[], k: number): number {
  // dp
  const len = nums.length;
  const dp: number[] = new Array(len).fill(0);
  const queue: number[] = [0];
  dp[0] = nums[0];
  for (let i = 1; i < len; i++) {
    // 排除区间之外的点
    while (queue.length && queue[0] < Math.max(i - k, 0)) queue.shift();
    dp[i] = dp[queue[0]]+nums[i];
    // 维护队列单调性
    while(queue.length && dp[queue[queue.length - 1]] < dp[i])queue.pop();
    queue.push(i);
  }
  return dp[len - 1];
}
// @lc code=end

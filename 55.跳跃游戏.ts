/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start

// // 贪心
// function canJump(nums: number[]): boolean {
//   if(nums.length == 1) return true;
//   let step = nums[0];
//   for(let i = 1; i < nums.length; i++){
//     if(step < i)return false;
//     step = Math.max(i + nums[i], step);
//   }
//   return step >= nums.length -1;
// }
// // 贪心
// function canJump(nums: number[]): boolean {
//   if(nums.length == 1) return true;
//   let step = nums[0];
//   for(let i = 1; i < nums.length; i++){
//     if(step < i)break;
//     if(step >= nums.length - 1) return true;
//     step = Math.max(step, nums[i] + i );
//   }
//   return false;
// }

// 动态规划
function canJump(nums: number[]): boolean {
  // dp[i]表示到第i步时可以跳的最远的距离
  // dp[0] = nums[0]
  // 可以优化成上面的贪心
  const len = nums.length;
  const dp = [] as number[];
  for(let i = 0; i < len; i++){
    if(dp[i-1] < i) return false;
    dp[i] = Math.max(i, nums[i] + i);
  }
  return dp[len-1] >= len-1;
}


// @lc code=end

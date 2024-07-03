/*
 * @lc app=leetcode.cn id=2786 lang=typescript
 *
 * [2786] 访问数组中的位置使分数最大
 */

// @lc code=start
function maxScore(nums: number[], x: number): number {
  let ans = 0;
  //dp[i][0]表示到num[i]时不选的最大值 
  //dp[i][1]表示到num[i]时选的最大值 
  //dp[i][0] = max(dp[i-1][1],dp[i-1][0]) 
  // 如果是奇数偶数相反，那么就是 nums[i] - x
  //dp[i][1] = max(dp[i-1][1]+num[i], dp[i-1][0]+num[i])  
  
  // dp[i][0] 表示 偶数(nums[i]%2==0)的情况；
  // dp[i][1] 表示 奇数的情况；
//   dp[i][0] = dp[i-1]+nums[i]
//   dp[i][1] = dp[]
  let res = nums[0];
    let dp = [-Infinity, -Infinity];
    dp[nums[0] % 2] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let parity = nums[i] % 2;
        let cur = Math.max(dp[parity] + nums[i], dp[1 - parity] - x + nums[i]);
        res = Math.max(res, cur);
        dp[parity] = Math.max(dp[parity], cur);
    }
    return res;

}
// @lc code=end

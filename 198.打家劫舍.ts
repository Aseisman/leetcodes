/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
    // 入门级动态规划
    // dp表示偷到第i个房子时,钱怎样最多
    // dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
    
    // let dp:number[] = Array.from({length:nums.length},()=>{
    //     return 0;
    // })
    // dp[0]=nums[0];
    // for(let i = 1; i<nums.length; i++){
    //     dp[i] = Math.max(dp[i-1],(dp[i-2] || 0)+nums[i]);
    // }
    // return Math.max(...dp);

    // 优化一下,变成一维的
    
    let max1:number = 0,
        max2:number = nums[0];
    let ans:number = Math.max(max1,max2);
    for(let i = 1; i < nums.length; i++){
        let temp = max2;
        max2 = Math.max(max2,max1+nums[i]);
        max1=temp;
        ans = Math.max(max2,ans);
    }
    return ans;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    // 贪心算法
    let ans = - Infinity;
    let money = 0;
    for(let i = 0; i< nums.length; i++){
        money+=nums[i];
        ans = Math.max(ans,money);
        // 从前面加到这里的总数还小于0，那么就把前面的值全给抛弃掉，从下一个开始算起；
        if(money < 0) money = 0;
    }
    return ans;
};

// function maxSubArray(nums: number[]): number {
//     // 动态规划
//     // dp 表示 第i个的前面 添加起来的 最大的值;
//     const dp = [nums[0]];
//     let ans = nums[0];
//     for(let i = 1; i<nums.length; i++){
//         // 这里 如果dp[i-1]加上当前的nums[i]反而小了,那么dp[i]就应该是nums[i]
//         dp[i] = Math.max(dp[i-1]+nums[i],nums[i]);
//         ans = Math.max(dp[i],ans);
//     }
//     return ans;
// }
// @lc code=end


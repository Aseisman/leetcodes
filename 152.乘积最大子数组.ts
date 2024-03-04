/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
// function maxProduct(nums: number[]): number {
//     let ans = -Infinity,imax = 1,imin = 1;
//     for(const num of nums) {
//         if(num < 0) [imax,imin] = [imin,imax]
//         imax = Math.max(imax*num,num);
//         imin = Math.min(imin*num,num);
//         ans = Math.max(ans,imax)
//     }
//     return ans;
// };
function maxProduct(nums: number[]): number {
    // 正常思路: dp[i] = Math.max(dp[i-1]*num[i],num[i]);
    // [5,6,−3,4,−3] 的 dp 则为 [5,30,−3,4,−3] 这里30是最大的

    // 这种思路是错误的,因为 负负还可以得正,所以 30不是最大的

    // 我们可以根据当前值去判断正负性,
    // 如果nums[i]是正的,那么我们需要的dp[i-1]肯定需要是正的才能算的最大值;
    // 如果nums[i]是负的,那么我们需要的dp[i-1]肯定需要是负的才能算的最大值;

    // 所以有 dpmax[i] = Math.max(dpmax[i-1]*nums[i], dpmin[i-1]*nums[i] ,nums[i])
    //       dpmin[i] = Math.min(dpmin[i-1]*nums[i], dpmax[i-1]*nums[i] ,nums[i])

    let maxF:number[] = [] , minF:number[] = [];
    for(let i = 0; i < nums.length; i++){
        maxF[i] = Math.max((maxF[i-1]||1)*nums[i],(minF[i-1]||1)*nums[i],nums[i])
        minF[i] = Math.min((maxF[i-1]||1)*nums[i],(minF[i-1]||1)*nums[i],nums[i])
    }
    // return Math.max(...maxF,...minF);

    // 可以优化一下,我们只需要dp中最大的数 , 维护一个max 来替代dp数组
    let maxF = 1, minF = 1,ans = -Infinity;
    for(let i = 0; i < nums.length; i++){
        maxF = Math.max(maxF*nums[i],minF*nums[i],nums[i]);
        minF = Math.min(maxF*nums[i],minF*nums[i],nums[i]);
        ans = Math.max(ans,maxF);
    }
    return ans;
}
// @lc code=end
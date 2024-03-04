/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0]=0;
    dp[1]=nums[0];
    for(let i=2;i<=nums.length;i++){
        // 做选择，不拿， 拿
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i-1])
    }
    return dp[nums.length];
};

var rob = function(nums){
    let num1 = 0,num2=nums[0];
    for(let i=2;i<=nums.length;i++){
        let temp =num2;
        num2= Math.max(num2,num1+nums[i-1]);
        num1=temp;
    }
    return num2;
}
// @lc code=end


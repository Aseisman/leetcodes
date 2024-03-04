/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    // dp[i]表示，以num[i]为结尾的最长递增子序列的长度
    for(let i = 0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i]=Math.max(dp[i],dp[j]+1);
            }
        }
    }
    let res = 0;
    dp.map(item=>{
        res = Math.max(res,item);
    })
    return res;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
// @lc code=end


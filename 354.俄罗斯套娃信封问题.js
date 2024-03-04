/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    // 一维升序，二维降序
    envelopes.sort((a,b)=>{
        return  a[0]==b[0]?b[1]-a[1]:a[0]-b[0];
    })
    let height = envelopes.map(v=>{
        return v[1];
    })
    const lengthOfLIS = (nums)=>{
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
    }
    return lengthOfLIS(height);
};
console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]));
// @lc code=end


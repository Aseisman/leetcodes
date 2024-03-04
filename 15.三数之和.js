/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
      // 三个数相加为0 输出这3个数
      // 先排序，用双指针法
      let res = [];
      nums.sort((a, b) => a - b);
      
      if(nums[0]>0||nums.length<3)return res;

      for (let i = 0; i < nums.length - 2; i++) {
        let temp = nums[i];

        if(temp>0)break;
        if(nums[i]==nums[i-1])continue;

        let left = i+1,right=nums.length-1;
        while(left<right){
          if(temp+nums[left]+nums[right]>0){
            right--;
          }else if(temp+nums[left]+nums[right]<0){
            left++;
          }else{
            res.push([temp,nums[left],nums[right]])
            while(nums[left]==nums[left+1])left++;
            while(nums[right]==nums[right+1])right--;
            right--;
            left++;
          }
        }
      }
      return res;
};
// @lc code=end


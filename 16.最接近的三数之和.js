/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
      // 最接近target
      // 双指针
      nums.sort((a, b) => a - b);
      let res = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < nums.length - 2; i++) {
        let left =i+1,right=nums.length-1;
        while(left<right){
          let sum = nums[i]+nums[left]+nums[right];
          if(Math.abs(sum-target)<Math.abs(res-target)){
            res=sum;
          }
          if(sum==target){
            return sum;
          }else if(sum<target){
            left++;
          }else if(sum>target){
            right--;
          }
        }
      }
      return res;
};
// @lc code=end


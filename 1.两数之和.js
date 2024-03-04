/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 1 暴力 o(n*(n-1))
    for(let i =0 ;i<nums.length-1;i++){
        for(let j =i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j];
            }
        }
    }
    return [];
};
var twoSum = function(nums, target) {
    // 2 哈希解法
    let map = new Map();
    for(let i = 0; i<nums.length;i++){
        if(map.has(nums[i])){
            return [map.get(nums[i]),i];
        }else{
            map.set(target-nums[i],i);
        }
    }
    return [];
};
// @lc code=end


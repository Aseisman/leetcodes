/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    // let copyNums = JSON.parse(JSON.stringify(nums));
    // copyNums.sort((a,b)=>b-a);
    // let N = 0;
    // for(let i = 1; i < nums.length; i += 2){
    //     nums[i] = copyNums[N++];
    // }
    // for(let i = 0; i < nums.length;i += 2){
    //     nums[i]=copyNums[N++];
    // }
    // return nums;
    let r = nums.length,l = nums.length + 1 >>> 1;
    nums.slice().sort((a,b)=>a-b).forEach((_,i,a)=>nums[i]=i&1?a[--r]:a[--l]);
    console.log(nums);
};
// @lc code=end

console.log(wiggleSort([1,5,1,1,2,6,4]));
/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==1)return nums[0];
    // 两种情况 取第一个不取最后一个 不取第一个取最后一个
    let res =0;
    let start=0,end=0;
    for(let i=2;i<=nums.length;i++){
        let temp = end;
        end= Math.max(end,start+nums[i-1]);
        start =temp;
    }
    res = end;
    start =0,end=nums[0];
    for(let i=2;i<nums.length;i++){
        let temp =end;
        end = Math.max(end,start+nums[i-1]);
        start =temp;
    }
    return res>end?res:end;
};
var rob = function(nums) {
    if(nums.length==1)return nums[0];
    let start1=0,start2=0,end1=0,end2=nums[0];
    for(let i=2;i<=nums.length;i++){
        [start1,end1]=[end1,Math.max(end1,start1+nums[i-1])];
        if(i!=nums.length){
            [start2,end2]=[end2,Math.max(end2,start2+nums[i-1])];
        }
    }
    return end1>end2?end1:end2;
}
// @lc code=end

console.log(rob([1,2,3,4,5,6]));
/*
 * @lc app=leetcode.cn id=100341 lang=javascript
 *
 * [剑指 Offer 61] 扑克牌中的顺子
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    // 这里的顺子不是斗地主的顺子，就是单纯的数字连续
    // 技巧：
    // 1. 张牌连在一起，最大值和最小值的差必须小于5 
    // 2. 不能有重复牌
    let map = new Map();
    let max =0,min = 14;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]==0)continue;
        if(map.has(nums[i])){
            return false;
        }
        map.set(nums[i],1);
        max = Math.max(max,nums[i]);
        min = Math.min(min,nums[i]);
    }
    return max- min <5;
};

var isStraight = function(nums) {
    let arr = nums.filter(num=>num!==0);
    if(arr.length!== new Set(arr).size){
        return false;
    }
    let max = 0,min =14;
    arr.forEach(v=>{
        max = Math.max(max,v);
        min = Math.min(min,v);
    })
    return max -min < 5;
}
// @lc code=end

console.log(isStraight([0,0,2,2,5]));
console.log(isStraight([10,11,0,12,6]));
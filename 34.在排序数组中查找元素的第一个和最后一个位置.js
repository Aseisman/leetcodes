/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0 ,right=nums.length-1;
    let rer=-1,ref=-1;
    while(left<=right){
        let mid =(left+right)>>1;
        if(nums[mid]==target){
            ref = mid;
            rer = mid;
            while((ref-1)>=0&&nums[ref]==nums[ref-1])ref--;
            while((rer+1)<nums.length&&nums[rer]==nums[rer+1])rer++;
            return [ref,rer];
        }else if(nums[mid]<target){
            left =mid+1;
        }else if(nums[mid]>target){
            right = mid -1;
        }
    }
    return [ref,rer];
};
// @lc code=end
console.log(searchRange([5,7,7,8,8,10],8));

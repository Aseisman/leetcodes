/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    // 二分法
    let left = 0;
    let right = nums.length -1;
    while(left <= right){
        const mid = (left + right) >> 1;
        if(nums[mid]==target){
            let l = mid, r = mid;
            while(nums[l-1]==nums[l])l--;
            while(nums[r+1]==nums[r])r++;
            return [l,r];
        }else if(nums[mid]<target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return [-1,-1];
};
// @lc code=end


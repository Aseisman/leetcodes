/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
    // 时间复杂度为O(logn) 二分法
    let start = 0;
    let end = nums.length -1;
    while(start <= end){
        let mid = (start+end)>>1;
        if(nums[mid] === target){
            return mid;
        }
        // 判断哪一部分是有序的;
        // 1. mid < end 则右半段是有序的
        // 2. mid > start 则左半段是有序的
        if(nums[mid]<nums[end]){
            if(nums[mid]<target && target <=nums[end]){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }else{
            if(nums[start] <= target &&target <= nums[mid]){
                end = mid -1;
            }else{
                start = mid + 1;
            }
        }
    }
    return -1;
    
};
// @lc code=end


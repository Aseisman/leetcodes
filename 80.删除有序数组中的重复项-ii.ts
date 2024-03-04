/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let i = 2;
    for(let j = 2; j < nums.length; j++){
        if(nums[j] !== nums[i - 2]){
            nums[i++] = nums[j];
        }
    }
    return i;
};
// @lc code=end
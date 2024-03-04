/*
 * @lc app=leetcode.cn id=2765 lang=typescript
 *
 * [2765] 最长交替子序列
 */

// @lc code=start
function alternatingSubarray(nums: number[]): number {
    let res = -1, arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (arr[arr.length - 1] + (-1) ** (arr.length + 1) == nums[i]) {
            arr.push(nums[i]);
            res < arr.length && (res = arr.length);
        } else {
            i = i - arr.length + 1;
            arr = [nums[i]];
        }
    }
    return res;
};
// @lc code=end


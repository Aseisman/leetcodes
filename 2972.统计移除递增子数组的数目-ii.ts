/*
 * @lc app=leetcode.cn id=2972 lang=typescript
 *
 * [2972] 统计移除递增子数组的数目 II
 */

// @lc code=start
function incremovableSubarrayCount(nums: number[]): number {
    const n = nums.length;
    let left = 0;
    while (left < n - 1 && nums[left] < nums[left + 1]) {
        left++;
    } // 计算左边的递增序列位置
    if (left === n - 1) return n * (n + 1) / 2; // 说明整个序列都是递增的，直接计算返回
    let ans = left + 2; // 计算已经有序的数组可以移除的子数组数量
    let right = n - 1;
    while (right === n - 1 || nums[right] < nums[right + 1]) { // 当右边有两个数时需要保证两个数递增，如果只有一个数（right = n - 1）也需要判断该数是否符合要求
        while (left >= 0 && nums[left] >= nums[right]) { // 查找左边的有序数列里是否有数小于 nums[right]
            left--;
        }
        ans += left + 2;
        right--;
    }
    return ans;
}
// @lc code=end

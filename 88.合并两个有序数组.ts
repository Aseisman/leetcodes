/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // 从后往前进行赋值;因为两个数组本身就是升序的;
    let len1 = m - 1, len2 = n - 1;
    let len = m + n - 1;
    while(len2 >= 0){
        if(len1<0){
            nums1[len--] = nums2[len2--];
        }
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
}
// @lc code=end

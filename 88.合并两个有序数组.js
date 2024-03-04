/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 2 O(m+n) 从后面往前
    // 很明显就能猜出出题者的意图，那就是考查 原地修改 ，将空间复杂度降低到 O(1)O(1)。
    // 因为这样不需要使用额外的数组空间了，我们完全可以把 nums2 也放入 nums1 中。
    // 原地修改时，为了避免从前往后遍历导致原有数组元素被破坏掉，我们要选择从后往前遍历！
    let len1 = m-1,len2 = n-1;
    let len = m+n-1;
    // 四种情况： nums1循环完了（len1<0）; nums2循环完了(len2<0) ; nums1大于nums2 ； nums2 大于nums1；
    while(len2>=0){
        if(len1<0){
            nums1[len--]=nums2[len2--];
        }
        nums1[len--]=nums1[len1]>=nums2[len2]?nums1[len1--]:nums2[len2--];
    }
    return nums1;
};

var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 || j >= 0) {
        if(i < 0) nums1[k--] = nums2[j--];
        else if(j < 0) nums1[k--] = nums1[i--];
        else if(nums1[i] < nums2[j]) nums1[k--] = nums2[j--];
        else nums1[k--] = nums1[i--];
    }
    return nums1;
};
// @lc code=end

console.log(merge([1,2,3],3,[2,5,6],3));
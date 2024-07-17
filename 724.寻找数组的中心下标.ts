/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
    let left = 0, right = 0;
    const len = nums.length;
    right = nums.reduce((pre,cur)=>pre+cur, 0);
    for(let i = 0; i < len; i++){
        right -= nums[i];
        if(left == right)return i;
        left += nums[i];
    }
    return -1;
};
// @lc code=end


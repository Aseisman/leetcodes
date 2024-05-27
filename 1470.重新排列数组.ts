/*
 * @lc app=leetcode.cn id=1470 lang=typescript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
function shuffle(nums: number[], n: number): number[] {
    const len = nums.length / 2;
    const ans = [] as number[];
    for(let i = 0; i < len; i++){
        ans.push(nums[i], nums[len + i]);
    }
    return ans;
};
// @lc code=end
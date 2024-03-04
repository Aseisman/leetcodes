/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    let nums = ''+x,end = nums.length-1;
    for(let i = 0 ; i< nums.length; i++){
        if(nums[i]!=nums[end-i])return false;
    }
    return true;
};
// @lc code=end
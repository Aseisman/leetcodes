/*
 * @lc app=leetcode.cn id=3099 lang=typescript
 *
 * [3099] 哈沙德数
 */

// @lc code=start
function sumOfTheDigitsOfHarshadNumber(x: number): number {
    const sum = (''+x).split('').reduce((pre,cur)=>pre+Number(cur),0);
    return x % sum == 0 ? sum : -1;   
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=2729 lang=typescript
 *
 * [2729] 判断一个数是否迷人
 */

// @lc code=start
function isFascinating(n: number): boolean {
    let newn = ('' + n + 2*n + 3*n).split('').sort((a:any,b:any)=>a-b).join('');
    return newn == '123456789';
};
// @lc code=end


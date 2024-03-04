/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    const re = new RegExp(/^(-|\+)?\d+/);//匹配 + - 多个，?表示匹配 0 or 1 次 \d表示匹配数字，后面的+表示 匹配 1次 or n次
    let str = s.trim().match(re);//trim去除空格
    let res = str ? Number(str[0]) : 0;
    return res >= 0 ? Math.min(res, 2**31 - 1) : Math.max(res, -(2**31))
};
// @lc code=end


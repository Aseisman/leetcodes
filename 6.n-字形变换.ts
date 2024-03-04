/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
    if(numRows == 1) return s;
    let arr = new Array(numRows).fill("");
    let index = -1;
    let flag = true;// true 向下,false 向上
    for(let i = 0; i < s.length; i++){
        flag ? index++ : index--;
        arr[index] += s[i];
        index == numRows - 1 && (flag = false)
        index == 0 && (flag = true)
    }
    return arr.join('');
};
// @lc code=end
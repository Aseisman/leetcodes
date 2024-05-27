/*
 * @lc app=leetcode.cn id=1880 lang=typescript
 *
 * [1880] 检查某单词是否等于两单词之和
 */

// @lc code=start
function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    const getVal = (str:string)=>+[...str].reduce((p,c)=>p + (c.charCodeAt(0) - 'a'.charCodeAt(0)), '')
    return getVal(firstWord) + getVal(secondWord) == getVal(targetWord);
};
// @lc code=end


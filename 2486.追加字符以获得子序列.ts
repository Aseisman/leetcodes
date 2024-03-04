/*
 * @lc app=leetcode.cn id=2486 lang=typescript
 *
 * [2486] 追加字符以获得子序列
 */

// @lc code=start
function appendCharacters(s: string, t: string): number {
    let i = 0;
    for(let j = 0; j < s.length; j++){
        if(s[j] == t[i])i++;
    }
    return t.length - i;
};
// @lc code=end


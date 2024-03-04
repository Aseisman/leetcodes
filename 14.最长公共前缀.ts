/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    let res = '';
    let reference = strs[0];
    for(let i = 0; i < reference.length; i++){
        let j = 1;
        while(j != strs.length && reference[i] == strs[j][i]) j++;
        if(j != strs.length) return res;
        res += reference[i];
    }
    return res;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
    if(s.length<=0)return true;
    if(t.length<=0)return false;
    let si = 0;
    for(let i = 0; i < t.length; i++){
        if(si == s.length) return true;
        if(t[i] == s[si])si++;
    }
    return si == s.length;
};
// @lc code=end
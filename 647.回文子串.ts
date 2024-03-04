/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 */

// @lc code=start
function countSubstrings(s: string): number {
    const len = s.length;
    let ans = 0;
    for(let i=0; i < len; i++){
        for(let j = 0; j<=1; j++){ // j=0,中心是一个点，j=1,中心是两个点
            let l = i;
            let r = i+j;
            while(l>=0 && r<len && s[l--] == s[r++])ans++;
        }
    } 
    return ans;
};
// @lc code=end
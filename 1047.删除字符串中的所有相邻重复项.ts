/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
    let i = 1;
    while(i < s.length){
        if(s[i] == s[i - 1]){
            s=s.slice(0,i - 1)+s.slice(i + 1);
            i--;
        }else{
            i++;
        }
    }
    return s;
};
// @lc code=end


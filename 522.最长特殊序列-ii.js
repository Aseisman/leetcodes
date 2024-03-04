/*
 * @lc app=leetcode.cn id=522 lang=javascript
 *
 * [522] 最长特殊序列 II
 */
// 题目翻译：给
// 出一个字符串数组，
// 在里面找出字符串满足 当前字符串不是字符串数组中 其他字符串 的子序列，
// 返回满足条件的字符串中 最长的字符串的长度
// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    // 如果一个字符串的子序列如果不是其他字符串的子序列，那么这个字符串本身也一定不是
    // 因为包含这个字符串本身的，一定也能包含它的任意子序列
    // 所以题目变为从字符串数组中找最长的一个原字符串，该字符串不是其他字符串的子序列
    let ans = -1;
    for(let i = 0; i < strs.length; i++){
        let str = strs[i],flag=true;
        if(str.length<ans)continue;
        for(let j = 0; j<strs.length; j++){
            if(j!==i&&isSub(str,strs[j])){
                // 如果str[i]是str[j]的子序列，str[i]就不成立是那啥了，直接下一个
                flag= false;
                break;
            }
        }
        flag&&(ans = str.length);
    }
    return ans;
};
/**
 * 判断 a是不是b的子序列
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
var isSub = function(a, b){
    if(a.length>b.length){
        return false;
    }
    if(a===b){
        return true;
    }
    let i = 0, j = 0;
    while(a[i]&&b[j]){
        if(a[i]===b[j]){
            i++;j++;
        }else{
            j++;
        }
    }
    return i>a.length-1;
}
// @lc code=end


/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    // 滑动窗口
    // left和right组成的窗口，每次right++,
    // 然后一旦每次遍历到的这个值大于2，那么就left一直++，直到这个值变成1
    let window:any = {};
    let left = 0,right =0;
    let res = 0;
    while(right<s.length){
        let c = s[right++];
        window[c]?window[c]++:window[c]=1;
        while(window[c]>1){
            let d = s[left];
            left++;
            window[d]--;
        }
        res = Math.max(res,right-left);
    }
    return res;
};
// @lc code=end

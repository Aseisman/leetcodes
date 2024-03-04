/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    let arr = s.split(' ');
    let n = arr.length - 1;
    while(n >= 0){        
        let len = arr[n].length;
        if(len) return len;
        n--;
    }
    return 0;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=524 lang=typescript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
function findLongestWord(s: string, dictionary: string[]): string {
    // 排序 + 贪心
    dictionary.sort((a, b) => {
        if (a.length !== b.length) return b.length - a.length;
        return a.localeCompare(b);
    });//['monkey', 'apple', 'plea', 'ale']
    const n = s.length;
    for (const word of dictionary) {
        const m = word.length;
        let i = 0, j = 0;
        while (i < n && j < m) {
            if (s[i] === word[j]) j++;
            i++;
        }
        if (j === m) return word;
    }
    return "";
};
// @lc code=end
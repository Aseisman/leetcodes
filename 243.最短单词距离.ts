// Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

// Example 1:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3

// Example 2:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1

// Constraints:
// 2 <= wordsDict.length <= 3 * 104
// 1 <= wordsDict[i].length <= 10
// wordsDict[i] consists of lowercase English letters.
// word1 and word2 are in wordsDict.
// word1 != word2

/*
 * @lc app=leetcode.cn id=243 lang=typescript
 *
 * [243] 最短单词距离
 */

// @lc code=start
function wordShortLength(
  wordsDict: string[],
  word1: string,
  word2: string
): number {
  let ans = Infinity;
  let index1 = -1;
  let index2 = -1;
  wordsDict.forEach((word, index) => {
    if (word == word1) index1 = index;
    if (word == word2) index2 = index;
    ~index1 && ~index2 && (ans = Math.min(Math.abs(index1 - index2),ans));
  });
  return ans;
}
console.log(wordShortLength(["practice", "makes", "perfect", "coding", "makes"],"coding","practice"));
console.log(wordShortLength(["practice", "makes", "perfect", "coding", "makes"],"makes","coding"));

// @lc code=end

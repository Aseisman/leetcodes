// Given an array of strings wordsDict and two strings that already exist in the array word1 and word2, return the shortest distance between the occurrence of these two words in the list.

// Note that word1 and word2 may be the same. It is guaranteed that they represent two individual words in the list.

// Example 1:

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1
// Example 2:

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "makes"
// Output: 3

/*
 * @lc app=leetcode.cn id=244 lang=typescript
 *
 * [244] 最短单词距离-ii
 */

// @lc code=start
function wordShortLength(
  wordsDict: string[],
  word1: string,
  word2: string
): number {
  if (word1 == word2) {
    let words: number[] = wordsDict.reduce((pre, cur, index) => {
      if (cur == word1) {
        pre.push(index);
        return pre;
      }
      return pre;
    }, [] as number[]);
    return words.reduce((pre, word, index) => {
      if (index < words.length - 1) {
        return Math.min(Math.abs(word - words[index + 1]), pre);
      } else {
        return pre;
      }
    }, Infinity);
  }
  let ans = Infinity;
  let index1 = -1;
  let index2 = -1;
  wordsDict.forEach((word, index) => {
    if (word == word1) index1 = index;
    if (word == word2) index2 = index;
    ~index1 && ~index2 && (ans = Math.min(Math.abs(index1 - index2), ans));
  });
  return ans;
}
console.log(
  wordShortLength(
    ["practice", "makes", "perfect", "coding", "makes"],
    "coding",
    "practice"
  )
);
console.log(
  wordShortLength(
    ["practice", "makes", "perfect", "coding", "makes"],
    "makes",
    "makes"
  )
);

// @lc code=end

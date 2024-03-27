// Design a data structure that will be initialized with a string array, and then it should answer queries of the shortest distance between two different strings from the array.

// Implement the WordDistance class:

// WordDistance(String[] wordsDict) initializes the object with the strings array wordsDict.
// int shortest(String word1, String word2) returns the shortest distance between word1 and word2 in the array wordsDict.

// Example 1:

// Input
// ["WordDistance", "shortest", "shortest"]
// [[["practice", "makes", "perfect", "coding", "makes"]], ["coding", "practice"], ["makes", "coding"]]
// Output
// [null, 3, 1]

// Explanation
// WordDistance wordDistance = new WordDistance(["practice", "makes", "perfect", "coding", "makes"]);
// wordDistance.shortest("coding", "practice"); // return 3
// wordDistance.shortest("makes", "coding");    // return 1

// Constraints:

// 1 <= wordsDict.length <= 3 * 104
// 1 <= wordsDict[i].length <= 10
// wordsDict[i] consists of lowercase English letters.
// word1 and word2 are in wordsDict.
// word1 != word2
// At most 5000 calls will be made to shortest.

/*
 * @lc app=leetcode.cn id=244 lang=typescript
 *
 * [244] 最短单词距离-ii
 */

// @lc code=start
class WordDistance {
  map: Map<string, number[]>;
  constructor(wordsDict: string[]) {
    wordsDict.forEach((word, index) => {
      let indexs = this.map.get(word) || [];
      indexs.push(index);
      this.map.set(word, indexs);
    });
  }
  shortest(word1: string, word2: string) {
    let ans = Infinity;
    const index1: number[] = this.map.get(word1) || [];
    const index2: number[] = this.map.get(word2) || [];
    // for (let i = 0; i < index1.length; i++) {
    //   for (let j = 0; j < index2.length; j++) {
    //     ans = Math.min(Math.abs(index1[i] - index2[j]), ans);
    //   }
    // }
    let i = 0,
      j = 0;
    while (i < index1.length && j < index2.length) {
      ans = Math.min(Math.abs(index1[i] - index2[j]), ans);
      if (index1[i] <= index2[j]) {
        i++;
      } else {
        j++;
      }
    }
    return ans;
  }
}
// @lc code=end

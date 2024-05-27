/*
 * @lc app=leetcode.cn id=506 lang=typescript
 *
 * [506] 相对名次
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
  const arr = [...score];
  arr.sort((a, b) => b - a);
  const map = {};
  arr.forEach((s, i) => {
    map[s] =
      i < 3 ? ["Gold Medal", "Silver Medal", "Bronze Medal"][i] : "" + (i + 1);
  });
  return score.map((s) => map[s]);
}
// @lc code=end

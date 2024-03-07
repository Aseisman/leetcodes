/*
 * @lc app=leetcode.cn id=2575 lang=typescript
 *
 * [2575] 找出字符串的可整除数组
 */

// @lc code=start
function divisibilityArray(word: string, m: number): number[] {
  if (!word.length) return [];
  // ( a × 10 + b ) % m = ( a % m × 10 + b ) % m
  // moda = a % m ;
  const div: number[] = [];
  let moda = 0;
  for (let b of word) {
    moda = (moda * 10 + parseInt(b)) % m;
    div.push(moda === 0 ? 1 : 0);
  }
  return div;
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=1652 lang=typescript
 *
 * [1652] 拆炸弹
 */

// @lc code=start
function decrypt(code: number[], k: number): number[] {
  const len = code.length;
  return code.map((c, i) => {
    let ans = 0;
    if (k == 0) return 0;
    let end = k > 0 ? k: -k;
    for(let j = 1 ; j <= end; j++){
        ans += code[(k > 0 ? i + j: i + len - j) % len];
    }
    return ans;
  });
}
// @lc code=end

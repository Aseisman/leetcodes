/*
 * @lc app=leetcode.cn id=2007 lang=typescript
 *
 * [2007] 从双倍数组中还原原数组
 */

// @lc code=start
function findOriginalArray(changed: number[]): number[] {
  const ans = [] as number[];
  const map = {} as any;
  changed.forEach((c) => {
    map[c] = (map[c] || 0) + 1;
  });
  changed.sort((a, b) => a - b);
  for (let c of changed) {
    if (map[c] == 0) continue;
    // 存在
    map[c]--;
    if (!map[c * 2]) return [];
    map[c * 2]--;
    ans.push(c);
  }
  return ans;
}
// @lc code=end

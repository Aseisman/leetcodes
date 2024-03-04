/*
 * @lc app=leetcode.cn id=791 lang=typescript
 *
 * [791] 自定义字符串排序
 */

// @lc code=start
function customSortString(order: string, s: string): string {
  let map = {};
  let news = "";
  for (let ss of s) {
    map[ss] = (map[ss] || 0) + 1;
  }
  for (let o of order) {
    if (map[o]) {
      news += o.repeat(map[o]);
      map[o] = 0;
    }
  }
  Object.keys(map).forEach((m) => {
    if (map[m] > 0) {
      news += m.repeat(map[m]);
    }
  });
  return news;
}
// @lc code=end

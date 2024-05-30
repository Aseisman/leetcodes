/*
 * @lc app=leetcode.cn id=939 lang=typescript
 *
 * [939] 最小面积矩形
 */

// @lc code=start
function minAreaRect(points: number[][]): number {
  let ans = Infinity;
  const m = new Map();

  //   按X轴排序
  points.sort((a, b) => a[0] - b[0]);

  for (let [x, y] of points) {
    if (!m.has(x)) m.set(x, new Set());
    m.get(x).add(y);
  }

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let [x1, y1] = points[i];
      let [x2, y2] = points[j];
      if (x1 < x2 && y1 < y2) {
        // 判断对角处，是否有对应两个点
        // [x1, y2], [x2, y1]
        if (m.get(x1).has(y2) && m.get(x2).has(y1)) {
          ans = Math.min(ans, (x2 - x1) * (y2 - y1));
        }
      }
    }
  }
  return ans === Infinity ? 0 : ans;
}
// @lc code=end

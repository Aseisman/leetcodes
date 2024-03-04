/*
 * @lc app=leetcode.cn id=149 lang=typescript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
function maxPoints(points: number[][]): number {
  // 暴力,每个点,算斜率,相同斜率,证明在同一条线上
  const len = points.length;
  if (len === 1) return 1;
  let max = 0;

  for (let i = 0; i < len; i++) {
    let map = new Map(); //存储斜率相同的数值;
    const itemI = points[i];
    for (let j = i + 1; j < len; j++) {
      const itemJ = points[j];
      let key;
      if (itemI[0] == itemJ[0]) {
        // 
        key = `${itemJ[0]}/0`;
      } else {
        key = (itemJ[1] - itemI[1]) / (itemJ[0] - itemI[0]);
      }
      const val = map.has(key) ? map.get(key) + 1 : 2;
      map.set(key, val);
      max = Math.max(max, val);
    }
  }
  return max;
}
// @lc code=end

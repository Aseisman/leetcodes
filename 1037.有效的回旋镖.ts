/*
 * @lc app=leetcode.cn id=1037 lang=typescript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
function isBoomerang(points: number[][]): boolean {
    // 公式：y1-y0/x1-x0 = 斜率 = y2-y0/x2-x0 交叉相乘
    //  (y2-y0)*(x1-x0) == (y1-y0)*(x2-x0)
    // 判断斜率是否相等
    const x0 = points[0][0], x1 = points[1][0], x2 = points[2][0];
    const y0 = points[0][1], y1 = points[1][1], y2 = points[2][1];
    return (y2-y0) * (x1-x0) != (y1-y0) * (x2-x0);
};
// @lc code=end


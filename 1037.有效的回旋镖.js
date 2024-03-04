/*
 * @lc app=leetcode.cn id=1037 lang=javascript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    // 公式：y1-y0/x1-x0 = 斜率 = y2-y-/x2-x0 交叉相乘
    //  (y2-y0)*(x1-x0) == (y1-y0)*(x2-x0)
    // 判断斜率是否相等
    return (points[2][1] - points[1][1]) * (points[1][0] - points[0][0]) !=
    (points[1][1] - points[0][1]) * (points[2][0] - points[1][0]);
};
// @lc code=end
console.log(isBoomerang([[22,33],[37,27],[67,15]]));

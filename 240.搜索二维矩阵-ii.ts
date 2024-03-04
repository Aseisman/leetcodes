/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  // 直接查找O(nm)
  // 每一行单独二分O(nlogm)
  // 用z字法查找O(m+n); 从右上角出发，往下找，大了y++； 小了 x--;
  const width = matrix[0].length;
  const height = matrix.length;
  let x = width - 1;
  let y = 0;
  while (x >= 0 && y < height) {
    if (matrix[y][x] == target) return true;
    else if (matrix[y][x] > target) {
      x--;
    } else {
      y++;
    }
  }
  return false;
};
// @lc code=end


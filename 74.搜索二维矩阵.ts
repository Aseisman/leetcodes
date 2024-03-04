/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    const arr = [] as number[];
    matrix.forEach((item) => arr.push(...item));
    let left = 0,
      right = arr.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (arr[mid] == target) return true;
      else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return false;
};
// @lc code=end


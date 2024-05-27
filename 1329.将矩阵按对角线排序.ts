/*
 * @lc app=leetcode.cn id=1329 lang=typescript
 *
 * [1329] 将矩阵按对角线排序
 */

// @lc code=start
function diagonalSort(mat: number[][]): number[][] {
  // 对角线(i,j)
  // ([0,0] [1,1],[2,2])
  // ([1,0],[2,1])
  // ([0,1],[1,2])

  const m = mat.length;
  const n = mat[0].length;
  const arr = new Array(m + n).fill("").map(() => []) as number[][];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 对角线上的i - j相等，但是i-j可能是负数
      // 将原本值为[-n, m]的值，统一加n，变成[0,m+n]进行保存;
      arr[i - j + n].push(mat[i][j]);
    }
  }
  arr.forEach((item) => item.sort((a, b) => b - a));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      mat[i][j] = arr[i - j + n].pop() as number;
    }
  }
  return mat;
}
// @lc code=end

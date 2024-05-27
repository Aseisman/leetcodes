/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
// function isValidSudoku(board: string[][]): boolean {
//   // 每一行判断
//   for (let i = 0; i < board.length; i++) {
//     const map = {};
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] == ".") continue;
//       if (map[board[i][j]] == 1)return false;
//       map[board[i][j]] = 1;
//     }
//   }
//   // 每一列判断
//   for (let i = 0; i < board[0].length; i++) {
//     const map = {};
//     for (let j = 0; j < board.length; j++) {
//       if (board[j][i] == ".") continue;
//       if (map[board[j][i]] == 1)return false;
//       map[board[j][i]] = 1;
//     }
//   }
//   // 每个九宫格判断
//   for (let i = 0; i < board.length; i += 3) {
//     for (let j = 0; j < board[0].length; j += 3) {
//       const map = {};
//       for (let k = 0; k < 3; k++) {
//         for (let l = 0; l < 3; l++) {
//           if (board[i + k][j + l] == ".") continue;
//           if (map[board[i + k][j + l]] == 1)return false;
//           map[board[i + k][j + l]] = 1;
//         }
//       }
//     }
//   }
//   return true;
// }
function isValidSudoku(board: string[][]): boolean {
  // 9x9 矩阵：存储行数据
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  // 9x9 矩阵：存储列数据
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  // 3*3*9 矩阵(每行3个area，每列3个area，每个area有9个元素)：存储区域元素
  const subboxes = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      if (num !== ".") {
        const index = Number(num) - 1;

        // 第 i 行的 num 值 +！
        rows[i][index]++;
        // 第 i 列的 num 值 +！
        columns[j][index]++;
        // 第 x 区域的 num 值 +1
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;

        // 如果 第 i 行的 num 值的个数大于 1，则说明不满足要求，直接返回 false
        // 如果 第 i 列的 num 值的个数大于 1，则说明不满足要求，直接返回 false
        // 如果 第 x 区域的 num 值 的个数大于 1，则说明不满足要求，直接返回 false
        if (
          rows[i][index] > 1 ||
          columns[j][index] > 1 ||
          subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1
        ) {
          return false;
        }
      }
    }
  }
  // 全部迭代结束后，说明满足要求，返回 true
  return true;
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
    const res = [] as string[][];
    const board = new Array(n).fill(0).map(() => new Array(n).fill("."));
    const isValid = (row: number, col: number) => {
      // 竖线
      for (let i = 0; i < n; i++) {
        if (board[i][col] == "Q") return false;
      }
      // 右上斜线
      for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === "Q") return false;
      }
      // 左上斜线
      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === "Q") return false;
      }
      return true;
    };
    const dfs = (row: number) => {
      if (row == n) return res.push(board.map((v) => v.join("")));
      for (let col = 0; col < n; col++) {
        if (!isValid(row, col)) continue;
        board[row][col] = "Q";
        dfs(row + 1);
        board[row][col] = ".";
      }
    };
    dfs(0);
    return res;
  }
// @lc code=end


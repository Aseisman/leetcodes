/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];
    const board = new Array(n).fill(0).map(() => new Array(n).fill("."));
    const isValid = (row,col)=>{
        // 竖线
        for(let i =0;i<n;i++){
            if(board[i][col]=='Q')return false;
        }
        // 右上斜线
        for(let i=row-1,j=col+1; i>=0&&j<n; i--,j++){
            if(board[i][j]==='Q')return false;
        }
        // 左上斜线
        for(let i=row-1,j=col-1; i>=0&&j>=0; i--,j--){
            if(board[i][j]==='Q')return false;
        }
        return true;
    }
    // 路径：board 中小于 row 的那些行都已经成功放置了皇后
    // 选择列表：第 row 行的所有列都是放置皇后的选择
    // 结束条件：row 超过 board 的最后一行
    const backtrack = (row) => {
        if(row==n){
            res.push(board.map(v=>v.join("")));
            return ;
        }
        for(let col=0;col<n;col++){
            // 排除不合法选择;
            if (!isValid(row, col))continue;
            // 做选择;
            board[row][col] = "Q";
            backtrack(row+1);
            board[row][col]='.'
            // 回退
        }
    }
    backtrack(0);
    return res;
};
console.log(solveNQueens(9).length);
console.log(solveNQueens(8).length);
console.log(solveNQueens(7).length);
console.log(solveNQueens(6).length);
console.log(solveNQueens(5).length);
console.log(solveNQueens(4).length);
console.log(solveNQueens(3).length);
console.log(solveNQueens(2).length);


// 92 40
// @lc code=end

/* 输入棋盘边长 n，返回所有合法的放置 */
// function solveNQueens(n) {
//     // '.' 表示空，'Q' 表示皇后，初始化空棋盘。
//     const board = new Array(n).fill(0).map(() => new Array(n).fill("."));
//     const res = [];
//     backtrack(0);
//     return res;
  
//     function isValid(row, col) {
//       // 检查列是否有皇后互相冲突
//       for (let i = 0; i < n; i++) {
//         if (board[i][col] === "Q") return false;
//       }
//       // 检查右上方是否有皇后互相冲突
//       for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
//         if (board[i][j] === "Q") return false;
//       }
//       // 检查左上方是否有皇后互相冲突
//       for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
//         if (board[i][j] === "Q") return false;
//       }
//       return true;
//     }
  
//     // 路径：board 中小于 row 的那些行都已经成功放置了皇后
//     // 选择列表：第 row 行的所有列都是放置皇后的选择
//     // 结束条件：row 超过 board 的最后一行
//     function backtrack(row) {
//       // 触发结束条件;
//       if (row === board.length) {
//         res.push(board.map((row) => row.join("")));
//         return;
//       }
  
//       for (let col = 0; col < n; col++) {
//         // 排除不合法选择;
//         if (!isValid(row, col)) {
//           continue;
//         }
//         // 做选择;
//         board[row][col] = "Q";
//         // 进入下一行决策;
//         backtrack(row + 1);
//         // 撤销选择;
//         board[row][col] = ".";
//       }
//     }
//   }
  

/*
 * @lc app=leetcode.cn id=766 lang=typescript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
function isToeplitzMatrix(matrix: number[][]): boolean {
    let row = matrix.length, col = matrix[0].length;
    for(let i = 0; i<row; i++){
        for(let j = 0; j<col; j++){
            if(i>0&&j>0&&matrix[i][j] !== matrix[i-1][j-1])return false;
        }
    }
    return true;
};
// @lc code=end
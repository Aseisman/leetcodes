/*
 * @lc app=leetcode.cn id=3033 lang=typescript
 *
 * [3033] 修改矩阵
 */

// @lc code=start
function modifiedMatrix(matrix: number[][]): number[][] {
    for(let j = 0; j < matrix[0].length; j++){
        let max = matrix[0][j];
        let remix = [] as number[];
        for(let i = 0; i < matrix.length; i++){
            if(matrix[i][j] == -1){
                remix.push(i);
                continue;
            }
            max = Math.max(matrix[i][j],max);
        }
        remix.forEach(i=>matrix[i][j] = max)
    }
    return matrix;
};
// @lc code=end
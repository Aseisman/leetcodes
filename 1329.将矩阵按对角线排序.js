/*
 * @lc app=leetcode.cn id=1329 lang=javascript
 *
 * [1329] 将矩阵按对角线排序
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function (mat) {
    //  循环然后拿出来排序，最后在set进去
    const row = mat.length;
    const col = mat[0].length;
    const lineArr = [];
    const startArr = [];
    for (let i = 0; i < col; i++) {
        startArr.push({ x: 0, y: i })
    }
    for (let j = 1; j < row; j++) {
        startArr.push({ x: j, y: 0 })
    }
    startArr.forEach(k => {
        let a = k.x;
        let b = k.y;
        while (a < row && b < col) {
            lineArr.push(mat[a++][b++])
        }
        lineArr.sort((c, d) => c - d);
        while (a > 0 && b > 0) {
            mat[--a][--b] = lineArr.pop();
        }
    })
    return mat;
};
// @lc code=end
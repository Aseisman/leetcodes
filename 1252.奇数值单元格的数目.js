/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let arr = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    indices.forEach(indice=>{
        let x = indice[0], y = indice[1];
        // 某一行
        for(let i = 0; i < n; i++){
            arr[x][i]++;
        }
        // 某一列
        for(let j = 0; j < m; j++){
            arr[j][y]++;
        }
    })
    let res = 0;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(arr[i][j]%2!==0){
                res++;
            }
        }
    }
    return res;
};
var oddCells = function(m, n, indices) {
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);
    for (const index of indices) {
        rows[index[0]]++;
        cols[index[1]]++;
    }
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (((rows[i] + cols[j]) & 1) !== 0) {
                res++;
            }
        }
    }
    return res;
};
// @lc code=end

console.log(oddCells(2,3,[[0,1],[1,1]]));
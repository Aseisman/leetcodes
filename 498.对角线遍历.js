/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let i=0,j=0;
    let ilen = mat.length,jlen = mat[0].length;
    let flag = true;//true表示斜着往上，false表示斜着往下
    let res = [];
    while(i<ilen-1||j<jlen-1){
        res.push(mat[i][j]);
        // 往上时，转弯情况：i==0 || j = jlen-1
        if(flag&&(i==0||j===jlen-1)){
            flag=!flag;
            if(j==jlen-1){
                i++;
            }else{
                j++;
            }
        // 往下时，转弯情况：j==0 || i = ilen-1
        }else if(!flag &&(j===0||i==ilen-1)){
            flag = !flag;
            if(i===ilen-1){
                j++;
            }else{
                i++;
            }
        // 根据flag 判断往上or往下，
        }else{
            // 往下时：i++ j--;
            if(!flag){
                i++;j--;
            // 往上时：i-- j++;
            }else{
                j++;i--;
            }
        }
    }
    res.push(mat[i][j]);
    return res;
};
// @lc code=end
console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));


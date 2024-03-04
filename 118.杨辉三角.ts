/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
    let res:number[][] = Array.from(new Array(numRows),()=>[]);
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < i+1; j++){
            if(i==0||j==0||j==i ){
                res[i][j] = 1;
            }else{
                res[i][j] = res[i-1][j] + res[i-1][j-1];
            }
        }
    }
    return res;
};
// @lc code=end
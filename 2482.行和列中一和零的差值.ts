/*
 * @lc app=leetcode.cn id=2482 lang=typescript
 *
 * [2482] 行和列中一和零的差值
 */

// @lc code=start
function onesMinusZeros(grid: number[][]): number[][] {
    let n = grid[0].length, 
        m = grid.length; //m行 n列 
    let cRow:number[][] = Array.from({length: m}, () => [0, 0]); 
    let cCol:number[][] = Array.from({length: n}, () => [0, 0]);
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                cRow[i][1] += 1;
                cCol[j][1] += 1;
            }else{
                cRow[i][0] += 1;
                cCol[j][0] += 1;    
            }
        }
    }
    console.log(cRow,cCol);
    let ans:number[][] = Array.from({length: m}, () => new Array(n).fill(0));
    // new Array(m).fill(new Array(n).fill(0)); 
    // 这样是不行的,因为fill功能是:将括号里面的值的引用赋值给数组,所用的数组都将指向同一个地址
    for(let i =0; i < m; i++){
        for(let j = 0; j < n; j++){
            ans[i][j] = cRow[i][1] + cCol[j][1] - cRow[i][0] - cCol[j][0];
        }
    }
    return ans;
};
// @lc code=end


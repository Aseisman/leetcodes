/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    // 空间复杂度 O(rowIndex)
    // 倒推，因为 r[i][j] = r[i-1][j-1] + r[i-1][j];
    // 每次都从数组后面往前，即 r[i][j] = r[i-1][j-1] + r[i-1][j];
    const row:number[] = [];
    row[0]=1;
    for(let i = 1; i <= rowIndex; i++){
        for(let j = i; j > 0; j--){
            row[j] = (row[j-1]||0) + (row[j]||0);
        }
    }
    return row;
};
// @lc code=end
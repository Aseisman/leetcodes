/*
 * @lc app=leetcode.cn id=2639 lang=typescript
 *
 * [2639] 查询网格图中每一列的宽度
 */

// @lc code=start
function findColumnWidth(grid: number[][]): number[] {
    const ans = [] as number[];
    for(let i = 0; i < grid[0].length; i++){
        ans[i] = 0;
        for(let j = 0; j < grid.length; j++){
            const cur = grid[j][i];
            ans[i] = Math.max(ans[i], (''+cur).length)
        }
    }
    return ans;
};
// @lc code=end


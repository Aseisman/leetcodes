/*
 * @lc app=leetcode.cn id=994 lang=typescript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
function orangesRotting(grid: number[][]): number {
    // bfs 列队
    let minutes = 0;
    let fresh = 0;//新鲜果子数量，用来判断最后是否全部腐烂；
    let queue = [] as number[][];//腐烂果子列队，bfs同时扩张

    const m = grid.length;
    const n = grid[0].length;
    // 初始化
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            grid[i][j] == 1 && fresh++;
            grid[i][j] == 2 && queue.push([i,j]);
        }
    }
    while(queue.length && fresh){
        let direction = [[0,-1],[-1,0],[0,1],[1,0]];
        let newQueue = [] as number[][];
        while(queue.length){
            const current = queue.pop() as number[];
            for(let i = 0; i < direction.length; i++){
                const r = direction[i][0] + current[0];
                const c = direction[i][1] + current[1];
                if(r >= 0 && r < m && c >=0 && c < n && grid[r][c] == 1){
                    grid[r][c] = 2;
                    newQueue.push([r,c]);
                    fresh--;
                }
            }
        }
        minutes++;
        queue = newQueue;
    }
    return fresh === 0 ? minutes : -1;
};
// @lc code=end


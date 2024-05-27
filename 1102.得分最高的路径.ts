// Given an m x n integer matrix grid, return the maximum score of a path starting at (0, 0) and ending at (m - 1, n - 1) moving in the 4 cardinal directions.
// The score of a path is the minimum value in that path.
// For example, the score of the path 8 → 4 → 5 → 9 is 4.

// Example 1:
// Input: grid = [[5,4,5],[1,2,6],[7,4,6]]
// Output: 4
// Explanation: The path with the maximum score is highlighted in yellow.

// Example 2:
// Input: grid = [[2,2,1,2,2,2],[1,2,2,2,1,2]]
// Output: 2

// Example 3:
// Input: grid = [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
// Output: 3

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// 0 <= grid[i][j] <= 109

// 从 grid[0][0] 到 grid[m-1][n-1] 计算最大值路径
function maximumMinimumPath(grid: number[][]): number {
    const m = grid.length,
    n = grid[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; //右 下 左 上
  const set:Set<number> = new Set();

  let ceil = Math.min(grid[0][0], grid[m - 1][n - 1])
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        grid[i][j] <= ceil && set.add(grid[i][j])      
    }
  }
  const arr = Array.from(set)
  arr.sort((a, b) => a - b)
  
  const valid = (v:number)=>{
    const memo = Array.from({ length: m }, () => Array(n).fill(0))
  
      function dfs(x:number, y:number) {
        if (x === m - 1 && y === n - 1) return true
        memo[x][y] = 1
        for (const [dx, dy] of directions) {
          const nx = x + dx,
            ny = y + dy
          if (
            nx >= 0 &&
            nx < m &&
            ny >= 0 &&
            ny < n &&
            memo[nx][ny] === 0 &&
            grid[nx][ny] >= v &&
            dfs(nx, ny)
          )
            return true
        }
        return false
      }
  
      return dfs(0, 0)
  }

  let l = 0, r = arr.length - 1;
  while(l < r){
    const mid = r - ((r - l) >> 1)
      if (valid(arr[mid])) {
        l = mid
      } else {
        r = mid - 1
      }
  }



  return arr[l]
}

console.log(
  maximumMinimumPath([
    [5, 4, 5],
    [1, 2, 6],
    [7, 4, 6],
  ])
);
console.log(
  maximumMinimumPath([
    [2, 2, 1, 2, 2, 2],
    [1, 2, 2, 2, 1, 2],
  ])
);
console.log(
  maximumMinimumPath([
    [3, 4, 6, 3, 4],
    [0, 2, 1, 1, 7],
    [8, 8, 3, 2, 7],
    [3, 2, 4, 9, 8],
    [4, 1, 2, 0, 0],
    [4, 6, 5, 4, 3],
  ])
);

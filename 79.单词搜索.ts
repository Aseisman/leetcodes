/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
    const direction = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ]; //右下左上(用数组的形式去想象，arr[x][y] + arr[0][1] => arr[x][y+1] 即向右移动一格)
    const w = board[0].length,
        h = board.length;

    const dfs = (x: number, y: number, start: number) => {
        if (start >= word.length) return true;
        if (x >= h || y >= w || x < 0 || y < 0) return false;
        if (board[x][y] != word[start]) return false;

        // 走到这里，便是 board[x][y] 和 word[start]相同了，要继续比较下一个字符
        board[x][y] = "*"; //走过的不能再走；所以得换成*
        for (let [i, j] of direction) {
            if (dfs(i + x, j + y, start + 1)) return true;
        }
        board[x][y] = word[start];
        return false;
    };
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};
console.log(exist([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],"eat"));

// @lc code=end


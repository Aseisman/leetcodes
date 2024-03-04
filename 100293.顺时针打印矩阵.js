/*
 * @lc app=leetcode.cn id=100293 lang=javascript
 *
 * [剑指 Offer 29] 顺时针打印矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length)return [];
    let direction = [[0,1],[1,0],[0,-1],[-1,0]];//上，右，下，左
    let ans = [];
    let target = 0;
    let h = matrix.length,w=matrix[0].length;
    let visited = new Array(h).fill(null).map(()=>new Array(w).fill(false));
    let dep = (x,y)=>{
        let curdirect = direction[target];
        if((x>=0&&x<w&&y>=0&&y<h)&&!visited[y][x]){
            // x和y在范围内，且没有被遍历到
            ans.push(matrix[y][x]);
            visited[y][x]=true;
        }else{
            // 要么超范围了 要么被遍历到了
            // 都算是要回退一步，然后再往下走；
            if(ans.length == w*h)return;
            x=x-curdirect[1];
            y=y-curdirect[0];
            target = (target+1)%direction.length;
            curdirect = direction[target];
        }
        dep(x+curdirect[1],y+curdirect[0]);
    }
    dep(0,0);
    return ans;
};
// @lc code=end
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
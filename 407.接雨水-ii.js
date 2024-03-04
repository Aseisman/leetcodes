/*
 * @lc app=leetcode.cn id=407 lang=javascript
 *
 * [407] 接雨水 II
 */

// @lc code=start
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    // (i,j)接水后的高度：water[i][j]= max( heightMap[i][j],min(water[i-1][j],water[i+1][j],water[i][j-1],water[i][j+1]) );
    // 实际接水容量：water[i][j]-heightMap[i][j];
    let colLen = heightMap.length;
    let rowLen = heightMap[0].length;
    let maxHeight = 0;

    for(let i = 0 ;i<colLen;i++){
        for(let j = 0;j<rowLen;j++){
            maxHeight = Math.max(maxHeight,heightMap[i][j]);
        }
    }

    const water =  new Array(colLen).fill(0).map(()=>new Array(rowLen).fill(0));
    
    // 先初始化所有都是最高的
    for(let i = 0; i<colLen; i++){
        for(let j=0;j<rowLen;j++){
            water[i][j] = maxHeight;
        }
    }

    // 再把外围的一圈先校正
    const qu =[];
    for(let i =0 ;i<colLen;i++){
        for (let j = 0; j < rowLen; j++) {
            // 外围
            if(i == 0 || i == colLen-1 || j==0||j==rowLen-1){
                if(water[i][j]>heightMap[i][j]){
                    water[i][j]=heightMap[i][j];
                    qu.push([i,j]);
                }
            }
        }
    }

    // 用个列队，开始上下左右匹配，把water整个二维数组校正过来；
    const dirs = [-1,0,1,0,-1];//上下左右
    while(qu.length){
        const curr = qu.shift();
        const x = curr[0];
        const y = curr[1];
        for(let i = 0;i<4;i++){
            const nx = x +dirs[i],ny = y+dirs[i+1];
            if(nx<0 || nx>=colLen || ny<0 || ny>=rowLen){
                continue;
            }
            if(water[x][y]<water[nx][ny]&&water[nx][ny]>heightMap[nx][ny]){
                water[nx][ny] = Math.max(water[x][y],heightMap[nx][ny]);
                qu.push([nx,ny]);
            }
        }
    }

    // 计算真实水柱高度
    let res = 0;
    for(let i =0;i<colLen;i++){
        for (let j = 0;j<rowLen;j++){
            res+=water[i][j]-heightMap[i][j];
        }
    }
    return res;
};

var arr =[[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]];
console.log(trapRainWater(arr));
arr = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]];
console.log(trapRainWater(arr));
// @lc code=end


/*
 * @lc app=leetcode.cn id=2391 lang=typescript
 *
 * [2391] 收集垃圾的最少总时间
 */

// @lc code=start
function garbageCollection(garbage: string[], travel: number[]): number {
    // M P G 三种垃圾，任意收拾一种都要1分钟
    // 每种的垃圾车都要从原始点出发
    let ans = 0;
    const garbages = ['M','P',"G"];
    // 三种垃圾循环
    for(let i = 0; i < garbages.length; i++){
        const curGarbage = garbages[i];
        let lastGarbage = 0;//标记最后一个垃圾的索引；需要来加travel用

        // 计算收拾垃圾的时间；
        for(let j = 0; j < garbage.length; j++){
            const count = garbage[j].split('').filter(g=>g==curGarbage).length;
            if(count){
                lastGarbage = j;
                ans += count;
            }
        }
        // 就路程花费的时间
        for(let k = 0; k < lastGarbage; k++){
            ans += travel[k];
        }
    }
    return ans;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=473 lang=javascript
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    let len =matchsticks.length;
    if(len<4)return false;
    let total = matchsticks.reduce((a,c)=>{
        return a+c;
    },0);
    if(total%4!==0)return false;

    // dfs 回溯+剪枝
    matchsticks.sort((a,b)=>b-a);
    let used=[0,0,0,0];
    let trackback = (cur)=>{
        if(len == cur){
            return true;
        }
        for(let i = 0;i<4;i++){
            if(used[i]+matchsticks[cur]>total/4)continue;
            used[i]+=matchsticks[cur];
            if(trackback(cur+1))return true;
            used[i]-=matchsticks[cur];
        }
        return false;
    }
    return trackback(0);
};
// @lc code=end
console.log(makesquare([1,10,9,10,5,2,3,4,2,2,8,1,6,8,1]));
/*
 * @lc app=leetcode.cn id=473 lang=typescript
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
function makesquare(matchsticks: number[]): boolean {
    const average =  matchsticks.reduce((a,b)=>a+b)/4;
    if((average | 0) != average)return false;
    const len = matchsticks.length;
    let used:number[] = [0,0,0,0];
    matchsticks.sort((a,b)=>b-a);
    let backtrack = (index:number) =>{
        if(index ==  len)return true;
        for(let i = 0 ; i < 4; i++){
            if(used[i] + matchsticks[index] > average)continue;
            used[i]+=matchsticks[index];
            if(backtrack(index+1))return true;
            used[i]-=matchsticks[index];
        }
        return false;
    }
    return backtrack(0);
};
// @lc code=end


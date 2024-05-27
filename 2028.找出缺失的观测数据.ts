/*
 * @lc app=leetcode.cn id=2028 lang=typescript
 *
 * [2028] 找出缺失的观测数据
 */

// @lc code=start
function missingRolls(rolls: number[], mean: number, n: number): number[] {
    // 48 - 10 = 38  38 > 4 * 6 
    const ans = [] as number[];
    const rSum = rolls.reduce((pre,cur)=>pre+cur,0);
    const nSum = mean * (rolls.length + n) - rSum;
    if(nSum > n * 6 || nSum < n) return ans;
    const average = Math.floor(nSum / n);
    let els = nSum % n;
    for(let i = 0; i < n; i++){
        if(els + average > 6){
            ans.push(6);
            els -= 6 - average;
        }else{
            ans.push(els + average);
            els = 0; 
        }        
    }
    return ans;
};
// @lc code=end


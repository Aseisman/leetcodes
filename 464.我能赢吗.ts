/*
 * @lc app=leetcode.cn id=464 lang=typescript
 *
 * [464] 我能赢吗
 */

// @lc code=start
function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
    const memo = new Map();
    const dfs = (total:number,visited:Array<boolean>) =>{
        const state = visited.toString();
        if(memo.has(state)){
            return memo.get(state);
        }
        for(let i = 1; i <= maxChoosableInteger; i++){
            if(!visited[i]){
                if( i + total >= desiredTotal ){
                    memo.set(state,true);
                    return true
                }
                visited[i] = true
                const sub_res = dfs(total+i,visited);
                visited[i] = false
                if(!sub_res){
                    memo.set(state,true);
                    return true;
                }
            }
        }
        memo.set(state, false);
        return false;
    }
    if((1+maxChoosableInteger)*maxChoosableInteger / 2 < desiredTotal){
        return false;
    }
    return dfs(0,[])
};

// var canIWin = function(maxChoosableInteger, desiredTotal) {
//     const memo = new Map();
//     const dfs = (maxChoosableInteger, usedNumbers, desiredTotal, currentTotal) => {
//         if (!memo.has(usedNumbers)) {
//             let res = false;
//             for (let i = 0; i < maxChoosableInteger; i++) {
//                 if (((usedNumbers >> i) & 1) === 0) {
//                     if (i + 1 + currentTotal >= desiredTotal) {
//                         res = true;
//                         break;
//                     }
//                     if (!dfs(maxChoosableInteger, usedNumbers | (1 << i), desiredTotal, currentTotal + i + 1)) {
//                         res = true;
//                         break;
//                     }
//                 }
//             }
//             memo.set(usedNumbers, res);
//         }
//         return memo.get(usedNumbers);
//     }
//     if ((1 + maxChoosableInteger) * (maxChoosableInteger) / 2 < desiredTotal) {
//         return false;
//     }
//     return dfs(maxChoosableInteger, 0, desiredTotal, 0);
// };
// @lc code=end


/*
 * @lc app=leetcode.cn id=2225 lang=typescript
 *
 * [2225] 找出输掉零场或一场比赛的玩家
 */

// @lc code=start
function findWinners(matches: number[][]): number[][] {
    const answer = [[],[]] as number[][];
    const map = {}//保存用户;
    const loseMap = {}//保存失败的用户数量;
    for(let i = 0; i < matches.length; i++){
        const [winer,loser] = matches[i];
        map[winer] = 1;
        map[loser] = 1;
        loseMap[loser] = (loseMap[loser] || 0) + 1;
    }
    Object.keys(map).forEach(person=>{
        !loseMap[person] && answer[0].push(+person);
        loseMap[person] == 1 && answer[1].push(+person);
    })
    return answer;
};
// @lc code=end


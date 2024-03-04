/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    let track =[];
    candidates.sort((a,b)=>a-b);
    let backtrack = (start,trackSum)=>{
        if(trackSum==target){
            res.push([...track]);
            return ;
        }
        if(trackSum>target){
            return;
        }
        for(let i =start;i<candidates.length;i++){
            if(i>start&&candidates[i]==candidates[i-1]){
                continue;
            }
            track.push(candidates[i]);
            trackSum+=candidates[i];
            backtrack(i+1,trackSum);
            track.pop();
            trackSum-=candidates[i];
        }
    }
    backtrack(0,0);
    return res;
};
console.log(combinationSum2([14,6,25,9,30,20,33,34,28,30,16,12,31,9,9,12,34,16,25,32,8,7,30,12,33,20,21,29,24,17,27,34,11,17,30,6,32,21,27,17,16,8,24,12,12,28,11,33,10,32,22,13,34,18,12],27));
// @lc code=end


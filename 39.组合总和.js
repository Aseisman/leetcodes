/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res =[]
    let track = [];
    let backtrack = (start,trackSum)=>{
        if(trackSum==target){
            res.push([...track]);
            return;
        }
        if(trackSum>target){
            return ;
        }
        for(let i = start ;i<candidates.length;i++){
            track.push(candidates[i]);
            backtrack(i,trackSum+candidates[i]);
            track.pop();
        }
    }
    
    candidates.sort((a,b)=>a-b);
    backtrack(0,0);
    return res;
};
// @lc code=end


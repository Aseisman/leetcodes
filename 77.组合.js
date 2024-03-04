/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res =[];
    let backtrack = (start,track)=>{
        if(track.length==k){
            res.push([...track]);
            return ;
        }
        for(let i=start;i<=n;i++){
            track.push(i);
            backtrack(i+1,track);
            track.pop();
        }
    }
    backtrack(1,[]);
    return res;
};
console.log(combine(4,2));
// @lc code=end


/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res =[];
    let used = [];
    let track = [];
    nums.sort((a,b)=>a-b);
    let backtrack = ()=>{
        if(track.length==nums.length){
            res.push([...track])
            return ;
        }
        for(let i =0;i<nums.length;i++){
            if(used[i]){
                continue;
            }
            if(i>0&&nums[i]===nums[i-1]&&!used[i-1]){
                continue;
            }
            track.push(nums[i]);
            used[i]=true;
            backtrack();
            track.pop();
            used[i]=false;
        }
    }
    backtrack();
    return res;
};
console.log(permuteUnique([1,1,2]));
// @lc code=end


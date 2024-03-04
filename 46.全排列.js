/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 回溯算法
    let res = [];
    let huisu = (arr)=>{
        if(arr.length==nums.length){
            res.push(arr);
            return;
        }
        nums.forEach(n=>{
            if(arr.includes(n))return;
            huisu(arr.concat(n));
        })
    }
    huisu([]);
    return res;
};
var permute = function(nums) {
    // 回溯算法
    const res = [];
    const backtrack = (track,used)=>{
        if(nums.length==track.length){
            res.push([...track]);
            return;
        }
        const length = nums.length;
        for(let i = 0 ;i<length; i++){
            if(used[i])continue;
            track.push(nums[i]);
            used[i]=true;
            backtrack(track,used);
            used[i]=false;
            track.pop();
        }
    }
    backtrack([],[]);
    return res;
};
console.log(permute([1,2,3]));
// @lc code=end


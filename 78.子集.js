/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // 元素无重不可复选
    let res =[];
    const backtrack=(start,track)=>{
        res.push([...track]);
        for(let i =start;i<nums.length;i++){
            track.push(nums[i]);
            backtrack(i+1,track);
            track.pop();
        }
    }
    backtrack(0,[]);
    return res;
};
console.log(subsets([1,2,3]));
// @lc code=end


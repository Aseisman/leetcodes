/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    let len = arr.length;
    let res = [],min=Infinity;
    for(let i = 0; i < len; i++){
        let diffe = arr[i+1]-arr[i];
        if(min>diffe){
            min = diffe;
            res = [];
        }
        if(min > diffe || min == diffe){
            res.push([arr[i],arr[i+1]])
        }
    }
    return res;
};
// @lc code=end


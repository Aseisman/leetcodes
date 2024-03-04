/*
 * @lc app=leetcode.cn id=1168 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let len = arr.length;
    for(let i = 0 ;i < len ;i++){
        if(arr[i]==0){
            arr.splice(i+1,0,0);
            i++;
        }
    }
    arr.length=len;
};
// @lc code=end

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
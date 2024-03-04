/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 双指针  只需判断左右最高点，和当前节点的高度差，然后加起来即可
    let res = 0,left = 0 ,right = height.length -1,lmax = 0 ,rmax = 0;
    while(left<=right){
        lmax = Math.max(lmax,height[left]);
        rmax = Math.max(rmax,height[right]);
        if(lmax<rmax){
            res += (lmax - height[left]);
            left ++;
        }else{
            res += (rmax  - height[right]);
            right --;
        }
    }
    return res;
};

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));
// @lc code=end


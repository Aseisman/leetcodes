/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    let left = 0, right = height.length - 1;
    let res = 0;
    while(left < right){
        let min = Math.min(height[left], height[right]);
        if(res < min * (right - left)){
            res = min * (right - left);
        }
        if(height[left] == min){
            left++;
        }else{
            right--;
        }
    }
    return res;
};
// @lc code=end
// 和接雨水不一样，但都差不多，双指针法
// let left = 0,right = height.length -1;
// let res = 0;
// while(left<right){
//     let min = Math.min(height[left],height[right]);
//     res < (right - left)*min &&(res = (right - left)*min)
//     if(min == height[left]){
//         left ++;
//     }else{
//         right --;
//     }
// }
// return res;

// function maxArea(height: number[]): number {
//   let left = 0,
//     right = height.length - 1;
//   let res = 0;
//   while (left < right) {
//     let mh = height[left]<height[right]?height[left]:height[right];
//     res = Math.max(res,mh*(right-left));
//     if(mh == height[left]){
//         left++;
//     }else{
//         right--;
//     }
//   }
//   return res;
// }

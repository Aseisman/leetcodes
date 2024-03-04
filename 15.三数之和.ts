/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
// function threeSum(nums: number[]): number[][] {
//     if(nums.length<3)return [];
//     // 双指针
//     let res:number[][] = [];
//     nums.sort((a,b)=>a-b);

//     let left, right;

//     for(let i = 0; i< nums.length -2; i++){
//         // 边界问题
//         if(nums[i]>0)break;
//         if(nums[i]==nums[i-1])continue;

//         left = i+1;
//         right = nums.length - 1;
//         while(left<right){
//             let sum  = nums[i] + nums[left] + nums[right];
//             if(sum == 0){
//                 res.push([nums[i],nums[left],nums[right]])
//                 // 边界问题
//                 while(nums[left]==nums[left+1])left++;
//                 while(nums[right]==nums[right+1])right--;
//                 left++;
//                 right--;
//             }else if(sum < 0 ){
//                 left++;
//             }else {
//                 right--;
//             }
//         }
//     }
//     return res;
// };
function threeSum(nums: number[], target: number = 0): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  let left, right;
  for (let i = 0; i < nums.length - 2; i++) {
    // 过滤相同的
    if (nums[i] == nums[i - 1]) continue;

    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i];
      if (sum == target) {
        res.push([nums[i], nums[left], nums[right]]);
        // 过滤相同的
        while (nums[left] == nums[left + 1]) left++;
        while (nums[right] == nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}
// @lc code=end

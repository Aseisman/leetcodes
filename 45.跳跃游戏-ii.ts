/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
// function jump(nums: number[]): number {
//     let position = nums.length -1;
//     let steps = 0;
//     while(position > 0){
//         //从后往前,一步一步走,假设在第i个那里能直接到达最后一个格子,上一步就是这个i; 
//         //step++;同时position设置为i;直至position变成0;
//         for(let i = 0 ; i < position ; i++){
//             if(i + nums[i] >= position){
//                 position = i;
//                 steps ++;
//                 break;
//             }
//         }
//     }
//     return steps;
// }
function jump(nums: number[]): number {
  // 贪心,正向查找,设置end,在每个阶段(i~end)中,视为一步,这一步内找到能走最远的步伐maxPosition,
  // 将下次end设置为maxPosition,循环在(i~end)的这第二步中,找到最远的步伐
  let len = nums.length;
  let end = 0;
  let maxPosition = 0;
  let steps = 0;
  for (let i = 0; i < len - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i == end) {
      end = maxPosition;
      steps++;
    }
  }
  return steps;
  // [2,3,1,1,4] 
  // -> end = 0, i = 0; maxPosition = 0 + 2;
  // -> end = 2(第一步最远能走到2)
  // -> end = 2, i = 1; maxPosition = 2 || 1 + 3
  // -> end = 4(第二步能最远走到4)
  // -> end = 4, i = 2; maxPosition = 4 || 2 + 1
  // -> end = 4; (这里 i 和 end 不同,说明没走到目前的最远处);

  // [3, 2, 1, 0, 1](不包括这种测试用例,所以下面废了)
  // -> end = 0, i = 0; maxPosition = 0 + 3;
  // -> end = 3;(第一步最远走到3)
  // -> i = 1,2时,end也最远都到3
  // -> end = 3; i = 3; maxPosition = 3 + 0;
}
// @lc code=end

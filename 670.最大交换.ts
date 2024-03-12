/*
 * @lc app=leetcode.cn id=670 lang=typescript
 *
 * [670] 最大交换
 */

// @lc code=start
function maximumSwap(num: number): number {
  // 贪心
  // 先排序，比如, 2736 -> 7632, 然后循环比较不一样的地方
  // 比如 2736 和 7632 的第一位就不一样了，
  // 那么只需要知道第一位是7，我们才能变成最大值，然后从后面往前找到最后一位7，即交换位置即可

  // 9912 -> 9921
  // 循环比较: 99 一样，到了第三位不一样，即在原来的9912中找到2的index，并和现在的9912中的1进行交换位置即可
  
  const nums = [...("" + num)];
  const ans = [...("" + num)];
  nums.sort((a, b) => +b - +a);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != ans[i]) {
      let lastIndex = ans.lastIndexOf(nums[i]);
      ~lastIndex && ([ans[i], ans[lastIndex]] = [ans[lastIndex], ans[i]]);
      return Number(ans.join(""));
    }
  }
  return num;
}

// function maximumSwap(num: number): number {
//   // 暴力解法不演示

//   // 下标标记
//   // nums:[2,7,3,6]
//   // indexs:[-1, -1, 0, 2, -1, -1, 3, 1, -1, -1]
//   const indexs = new Array(10).fill(-1); //索引数组 下标即对应的数字，值为索引
//   const nums: string[] = [...num.toString()]; //数字数组
//   //找到相同值最后出现的位置
//   nums.forEach((num, i) => (indexs[+num] = i));

//   //原数组从左到右遍历，索引数组从后往前遍历
//   //遇到比当前位值大的，交换，因为索引数组从后往前遍历的，所以保证了值为最大
//   for (let i = 0; i < nums.length; i++) {
//     for (let d = 9; d > +nums[i]; d--) {
//       // d是数字，d比nums[i]大的同时，且索引比i大，那么就可以交换
//       if (indexs[d] > i) {
//         [nums[indexs[d]], nums[i]] = [nums[i], nums[indexs[d]]];
//         // 直接返回是贪心策略，因为最大的换到了最前面，即数整体变得最大
//         return Number(nums.join(""));
//       }
//     }
//   }
//   return Number(nums.join(""));
// }
// @lc code=end

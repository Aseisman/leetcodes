/*
 * @lc app=leetcode.cn id=2023 lang=typescript
 *
 * [2023] 连接后等于目标字符串的字符串对
 */

// @lc code=start
function numOfPairs(nums: string[], target: string): number {
  //   let ans = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       nums[i] + nums[j] == target && ans++;
  //     }
  //   }
  //   return ans;

  // O(n)  
  // 先统计出每个字符串的数量，然后将target 一拆为二，然后根据map中对应的数量相乘即可；
  // 注意“1111”这种情况，这种情况可能存在“11”，“11”的时候，需要map[xx] * (map[xx] - 1)  
  let ans = 0;
  let map = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  let start = "";
  for(let i = 0; i < target.length - 1; i++){
    start += target[i];
    let end = target.substring(i + 1);
    if(map[start] && map[end]){
        ans += start !== end ? map[start] * map[end] : map[start]* (map[end] - 1);
    }
  }
  return ans;
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=2938 lang=typescript
 *
 * [2938] 区分黑球与白球
 */

// @lc code=start
function minimumSteps(s: string): number {
  // 贪心
  let ans = 0;
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if(s[i] == '1'){
        sum++;//记录前面有多少个1(用于后面0要替换到前面的时候，一步步走的长度（遇到1交换，遇到0不换）)
    }else{
        //遇到0时，需要和前面的1交换，由于前面的1和前面的0完成了交换，因此前面的1数量是固定的，因此要交换sum次；
        ans += sum;
    }
  }
  return ans;
}
// @lc code=end

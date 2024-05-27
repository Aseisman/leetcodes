/*
 * @lc app=leetcode.cn id=944 lang=typescript
 *
 * [944] 删列造序
 */

// @lc code=start
function minDeletionSize(strs: string[]): number {
    if(strs.length == 1)return 0;
    let ans = 0;
    for(let i = 0 ; i < strs[0].length; i++){
      for(let j = 0; j < strs.length - 1; j++){
          if(strs[j][i] > strs[j+1][i]){
              ans++;
              break;
          }
      }
    }
    return ans;
};
// @lc code=end


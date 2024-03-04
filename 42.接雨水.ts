/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  // 双指针  只需判断左右最高点，和当前节点的高度差，然后加起来即可
  // let res = 0,
  //   left = 0,
  //   right = height.length - 1;
  // let lmax = 0,
  //   rmax = 0;
  // while (left < right) {
  //   lmax = Math.max(lmax,height[left]);
  //   rmax = Math.max(rmax,height[right]);
  //   if(lmax<rmax){
  //       res += (lmax - height[left]);
  //       left ++;
  //   }else{
  //       res += (rmax  - height[right]);
  //       right --;
  //   }
  // }
  // return res;

  let res = 0;
  let left = 0, right = height.length - 1;
  let lmax = 0, rmax = 0;
  while(left < right){
    lmax = Math.max(lmax, height[left]);
    rmax = Math.max(rmax, height[right]);
    if(lmax < rmax){
      res += (lmax - height[left]);
      left++;
    }else{
      res += (rmax - height[right]);
      right--;
    }
  }
  return res;
}
// @lc code=end

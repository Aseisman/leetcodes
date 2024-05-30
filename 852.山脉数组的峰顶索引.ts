/*
 * @lc app=leetcode.cn id=852 lang=typescript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
function peakIndexInMountainArray(arr: number[]): number {
  // 二分法
  let l = 0, r = arr.length - 1;
  while(l <= r){
    const mid = (l + r) >> 1;
    if(mid == 0 || mid == arr.length - 1)return -1;
    // 考虑边界0和n-1的情况
    if(arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]){
        return mid;
    }else if(arr[mid] < arr[mid + 1]){
        l = mid + 1;
    }else {
        r = mid;
    }
  }
  return -1;
}
// @lc code=end

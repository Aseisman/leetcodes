/*
 * @lc app=leetcode.cn id=2956 lang=typescript
 *
 * [2956] 找到两个数组中的公共元素
 */

// @lc code=start
function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
//   const map1 = nums1.reduce((pre, cur) => {
//     pre[cur] = (pre[cur] || 0) + 1;
//     return pre;
//   }, {});
//   const map2 = nums2.reduce((pre, cur) => {
//     pre[cur] = (pre[cur] || 0) + 1;
//     return pre;
//   }, {});
//   return [
//     nums1.reduce((pre,cur)=>pre + (map2[cur]>0 ? 1 : 0),0),
//     nums2.reduce((pre,cur)=>pre + (map1[cur]>0 ? 1 : 0),0)
//     ]

    // 一次遍历的做法
    const nums = new Array(101).fill(0);
    for(let num of nums1){
        nums[num]++;
    }
    let ans = [0 , 0];
    for(let num of nums2){
        if(nums[num] != 0){
            ans[1]++;
            // nums2在nums1中能找到的话，说明nums1也能在nums2里面找到此时的数，只要把统计好的数量加起来即可；
            // 标记为-1 是为了下次找到重复的时候,不重复相加;
            ans[0] += (nums[num] == -1 ? 0 : nums[num]);
            nums[num] = -1;
        }
    }
    return ans;
}
// @lc code=end
/*
 * @lc app=leetcode.cn id=2333 lang=typescript
 *
 * [2333] 最小差值平方和
 */

// @lc code=start
function minSumSquareDiff(
  nums1: number[],
  nums2: number[],
  k1: number,
  k2: number
): number {
  // const map = {}; //map key是值，value是这个值出现的次数
  // for (let i = 0; i < nums1.length; i++) {
  //   let val = Math.abs(nums1[i] - nums2[i]);
  //   map[val] = (map[val] || 0) + 1;
  // }
  // let k = k1 + k2;
  // const keys = Object.keys(map).sort((a, b) => +a - +b);
  // console.log(map,keys);

  // for (let i = keys.length - 1; k > 0 && i > 0; i--) {
  //   let key = keys[i];
  //   let value = map[key];
  //   const change = Math.min(k, value);
  //   //为什么要拿k和value比？这里是每次固定将当前值-1，有value个值，所以要和k比较大小
  //   map[+key - 1] += change;
  //   k -= change;
  //   map[key] -= change;
  // }
  // console.log(map,keys);
  // return keys.reduce((pre, key) => pre + +key * +key * map[key], 0);
  const arr = new Array(1e5 + 1).fill(0);
  for (let i = 0; i < nums1.length; i++) {
    arr[Math.abs(nums1[i] - nums2[i])]++;
  }
  let k = k1 + k2;
  for (let i = arr.length - 1; k > 0 && i > 0; i--) {
    const change = Math.min(k, arr[i]);
    arr[i - 1] += change;
    k -= change;
    arr[i] -= change;
  }
  return arr.reduce((cur, next, index) => index * index * next + cur, 0);
}

// @lc code=end

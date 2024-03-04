/*
 * @lc app=leetcode.cn id=605 lang=typescript
 *
 * [605] 种花问题
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  flowerbed.unshift(0);
  flowerbed.push(0);
  let count = 0;
  let len = flowerbed.length;
  for (let i = 1; i < len-1; i++) {
    // 三个0，就能插个1，前后加0是为了边界 类似[0,0,1,0,1]这种
    if(flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1]===0){
        count ++;
        flowerbed[i] = 1;
    }
  }
  return count >= n;
}
// @lc code=end

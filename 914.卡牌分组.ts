/*
 * @lc app=leetcode.cn id=914 lang=typescript
 *
 * [914] 卡牌分组
 */

// @lc code=start
function hasGroupsSizeX(deck: number[]): boolean {
  let map = new Map<number, number>();
  //辗转相除法 4,2
  let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  deck.forEach((item) => {
    map.set(item, map.has(item) ? (map.get(item) || 0) + 1 : 1);
  });
  let arr = [...map.values()];
  let res = arr[0];
  return arr.every((i) => (res = gcd(res, i)) > 1);
}
// @lc code=end

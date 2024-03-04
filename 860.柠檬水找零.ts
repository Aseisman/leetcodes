/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
  let coins = [0, 0, 0];
  let map = [5, 10, 20];
  for (let i = 0; i < bills.length; i++) {
    // 进账
    let index = Math.floor(bills[i] / 10);
    coins[index]++;
    // 出账；
    let returnMoney = bills[i] - 5;
    if (returnMoney > 0) {
      for (let j = map.length - 1; j >= 0; j--) {
        while (returnMoney >= map[j] && coins[j] > 0) {
          coins[j]--;
          returnMoney -= map[j];
        }
      }
      if (returnMoney > 0) return false;
    }
  }
  return true;
}
// @lc code=end

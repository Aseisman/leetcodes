/*
 * @lc app=leetcode.cn id=1052 lang=typescript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
// function maxSatisfied(
//   customers: number[],
//   grumpy: number[],
//   minutes: number
// ): number {
//   // 区间为minutes, 在区间为minutes内找到customers和最大，且grumpy在此区间内性价比最高。
//   // dp吧
//   // dp[i][1] 表示在到 第i分钟时 用了秘诀 的最大收益
//   // dp[i][0] 表示在到 第i分钟时 没用秘诀 的最大收益
//   // dp[i][1] = Math.max(dp[i - minutes][0] + getMinutes(i - minutes + 1, true), dp[i - minutes][1] + getMinutes(i - minutes + 1,false))
//   // dp[i][0] = Math.max(dp[i- minutes][0] + getMinutes(i - minutes + 1, false));
//   const getMinutes = (i, force) => {
//     let ans = 0;
//     for (let j = i; j < i + minutes; j++) {
//       (grumpy[j] == 0 || force) && (ans += customers[j]);
//     }
//     return ans;
//   };
//   const dp = new Array(customers.length)
//     .fill(0)
//     .map(() => new Array(2).fill(0));
//   for (let i = 0; i < minutes; i++) {
//     i == 0 &&
//       (dp[i][1] = customers[i]) &&
//       (dp[i][0] = grumpy[i] == 0 ? customers[i] : 0);
//     i != 0 &&
//       (dp[i][1] = dp[i - 1][1] + customers[i]) &&
//       (dp[i][0] = dp[i - 1][0] + (grumpy[i] == 0 ? customers[i] : 0));
//   }
//   console.log(dp);

//   for (let i = minutes; i < customers.length; i++) {
//     let curDP = dp[i - minutes];
//     dp[i][1] = Math.max(
//       curDP[0] + getMinutes(i - minutes + 1, true),
//       curDP[1] + getMinutes(i - minutes + 1, false)
//     );
//     dp[i][0] = Math.max(curDP[0] + getMinutes(i - minutes + 1, false));
//   }
//   console.log(dp);
//   return dp[customers.length - 1][1];
// }
// [1,2,3,4,5,6,7] \n [1,0,1,1,0,0,1] \n 4
// [4,10,10] \n [1,1,0] \n 2


// function maxSatisfied(
//   customers: number[],
//   grumpy: number[],
//   minutes: number
// ): number {
//   // 暴力,超时
//   // 在minutes窗口中滑动，并获取最大值
//   let ans = 0;
//   const len = customers.length;
//   for (let i = 0; i < len; i++) {
//     // 外层表示滑动窗口的起始点
//     const result = customers.reduce((pre, cur, j) => {
//       if (j >= i && j < i + minutes) {
//         return pre + cur;
//       }
//       return pre + (grumpy[j] == 0 ? customers[j] : 0);
//     }, 0);
//     ans = Math.max(ans, result);
//   }
//   return ans;
// }

function maxSatisfied(
    customers: number[],
    grumpy: number[],
    minutes: number
  ): number {
    // 首先计算老板不生气时的所有满意顾客
    // 这些顾客无论在不在情绪控制区都没有影响的
    let total = customers.reduce((pre, cur, j) => pre + (grumpy[j] == 0 ? cur : 0), 0);
    const n = customers.length;

    // 从左边开始，初始化滑动窗口，默认前几个使用秘密技巧
    let increase = 0;
    for (let i = 0; i < minutes; i++) {
        increase += customers[i] * grumpy[i];
    }
    let maxIncrease = increase;
    // 开始滑动,判断逻辑: 
    // 将前面一个的秘密技巧取消(increase - customer[i - minutes] * grumpy[i - minutes])
    // 再将后面的一个加上: ( + customers[i] * grumpy[i]);
    // 然后进行max保存;
    // 最后返回total + max
    for (let i = minutes; i < n; i++) {
        increase = increase - customers[i - minutes] * grumpy[i - minutes] + customers[i] * grumpy[i];
        maxIncrease = Math.max(maxIncrease, increase);
    }
    return total + maxIncrease;
};

// @lc code=end

/*
 * @lc app=leetcode.cn id=2484 lang=typescript
 *
 * [2484] 统计回文子序列数目
 */

// @lc code=start
// function countPalindromes(s: string): number {
//   const n = s.length;
//   const Mod = 10 ** 9 + 7;
//   const suffix = new Array(10).fill(0);
//   const prefix = new Array(10).fill(0);
//   const sufDp = new Array(10).fill(0).map((i) => new Array(10).fill(0));
//   const preDp = new Array(10).fill(0).map((i) => new Array(10).fill(0));
//   for (let i = n - 1; i >= 0; i--) {
//     const d = +s[i];
//     for (let j = 0; j < 10; j++) {
//       sufDp[d][j] += suffix[j]; // 相当于先收集第二个字母
//     }
//     suffix[d]++; // 收集最后一个字母
//     /**
//      * 13431
//      * sufDp相当于收集的是倒数第二个3
//      * suffix相当于收集的是最后一个1
//      */
//   }
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     // 要使用当前的数作为center中心数13431中的4
//     const d = +s[i];
//     suffix[d]--; //这里应该把后缀先减去
//     for (let j = 0; j < 10; j++) {
//       sufDp[d][j] -= suffix[j];
//     }
//     for (let m = 0; m < 10; m++) {
//       for (let n = 0; n < 10; n++) {
//         ans += preDp[m][n] * sufDp[m][n];
//       }
//       ans %= Mod;
//     }
//     // 当这个中心数使用完毕后，就可以添加到前缀去
//     for (let i = 0; i < 10; i++) {
//       preDp[d][i] += prefix[i];
//     }
//     prefix[d]++;
//   }
//   return ans;
// }

function countPalindromes(s: string): number {
//   // 三维数组模拟一下
//   // 求的是长度为5的回文，所以肯定是 ab ￥ ba
//   // 因此，ab 就是 从 00 到 99 的所有的情况
//   // 答案就是左右两边的对应串数量相乘 再 累加
//   const n = s.length;
//   const Mod = 10 ** 9 + 7;
//   let l = new Array(10).fill(0).map((i) => new Array(10).fill(0)); //二维数组
//   let f = new Array(10)
//     .fill(0)
//     .map((i) => new Array(10).fill(0).map((i) => new Array(10).fill(0))); //三维数组

//   // 先计算出 l[i][j] ,表示从左往右到 i 这个位置上，数字 j 出现了多少次
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < 10; j++) {
//       l[i][j] = l[i - 1][j] ||0; //前缀和思想
//       if (s[i] == "" + j) l[i][j]++;
//     }
//   }

//   //   再计算 f[i][j][k] ，表示从左往右到 i 这个位置上，数字序列 j，k 出现了多少次
//   for (let i = 2; i < 10; i++) {
//     for (let c1 = 0; c1 < 10; c1++) {
//       for (let c2 = 0; c2 < 10; c2++) {
//         f[i][c1][c2] = f[i - 1][c1][c2] || 0;
//         if(s[i]==''+c2){
//             f[i][c1][c2] = (f[i][c1][c2] + l[i-1][c1]) % Mod;
//         }
//       }
//     }
//   }
}
// @lc code=end

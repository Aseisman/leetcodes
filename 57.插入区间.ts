/*
 * @lc app=leetcode.cn id=57 lang=typescript
 *
 * [57] 插入区间
 */

// 几种情况
// [1,3],[6,9]中插入[2,5] ===> [1,5][6,9]
// [1,3],[6,9]中插入[2,7] ===> [1,9]
// [1,3],[6,9]中插入[4,5] ===> [1,3][4,5][6,9]
// [1,3],[6,9]中插入[4,7] ===> [1,3][4,9]

// @lc code=start
// function insert(intervals: number[][], newInterval: number[]): number[][] {
//   // 暴力方式:找到对应位置,然后插进去,然后再执行56,合并区间的逻辑
//   if (!intervals.length) return [newInterval];
//   let flag = false;
//   for (let i = 0; i < intervals.length; i++) {
//     if (flag) {
//       if (intervals[i + 1] && intervals[i][1] >= intervals[i + 1][0]) {
//         intervals.splice(i, 2, [
//           intervals[i][0],
//           intervals[i][1] > intervals[i + 1][1]
//             ? intervals[i][1]
//             : intervals[i + 1][1],
//         ]);
//         i--;
//       }
//     } else if (
//       intervals[i][0] <= newInterval[0] &&
//       (intervals[i + 1] ? intervals[i + 1][0] : Infinity) >= newInterval[0]
//     ) {
//       intervals.splice(i + 1, 0, newInterval);
//       flag = true;
//       i--;
//     } else if (intervals[i][0] > newInterval[0]) {
//       intervals.unshift(newInterval);
//       flag = true;
//       i--;
//     }
//   }
//   return intervals;
// }

function insert(intervals: number[][], newInterval: number[]): number[][] {
  // 前后丢进来,有重叠的中间部分单独处理
  const ans: number[][] = [];
  let i = 0;
  const len = intervals.length;
  // 无重叠部分
  while (i < len && intervals[i][1] < newInterval[0]) ans.push(intervals[i++]);

  // 中间部分 3<8
  while (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  ans.push(newInterval);

  // 后面无重叠部分
  while (i < len) ans.push(intervals[i++]);

  return ans;
}

// @lc code=end

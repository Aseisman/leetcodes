/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
// function permuteUnique(nums: number[]): number[][] {
//   // 还是回溯,不一样的是需要先排个序,然后判断前后相同的数,则跳过
//   let ans: number[][] = [];
//   nums.sort((a, b) => a - b);
//   let backtrack = (track, used) => {
//     if (track.length == nums.length) {
//       ans.push([...track]);
//       return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//       if (used[i]) continue;
//       // 当前的数跟前一个一样,且前一个没被用过
//       // 举个栗子: 两个11 标记为1a1b 不去重的话有两种排列方式1a1b 和 1b1a ;
//       // 我们只需要其中一种排列,这里限制了一定要访问1a后才能访问1b;
//       // 也就是 当 !used[i-1] (前一个1没被使用过，则后一个1也不用)

//       // 反过来 也可以
//       // used[i-1] 非同层剪枝，但我不会解释
//       if (i > 0 && nums[i] == nums[i - 1] && used[i - 1]) {
//         continue;
//       }
//       track.push(nums[i]);
//       used[i] = true;
//       backtrack(track, used);
//       track.pop();
//       used[i] = false;
//     }
//   };
//   backtrack([], []);
//   return ans;
// }

// function permuteUnique(nums: number[]): number[][] {
//   // dfs + map
//   const res: number[][] = [];
//   nums.sort((a, b) => a - b);
//   const track = (path: number[], used: boolean[]) => {
//     if (path.length == nums.length) return res.push([...path]);
//     for (let i = 0; i < nums.length; i++) {
//       if (used[i]) continue;

//       // 这里要注意[1,1,2]中2个1调换顺序后，会出现两种情况，所以要避免；
//       // 如何避免呢？
//       if (i < nums.length - 1 && nums[i] == nums[i + 1] && used[i + 1])
//         continue;
//       used[i] = true;
//       path.push(nums[i]);
//       track(path, used);
//       path.pop();
//       used[i] = false;
//     }
//   };
//   track([], []);
//   return res;
// }
function permuteUnique(nums: number[]): number[][] {
  // 回溯
  const ans = [] as number[][];
  const len = nums.length;
  const map = {};// 去重
  const backtrack = (track:number[],used:boolean[])=>{
    if(track.length == len){
      if(map[track.join("-")])return;
      map[track.join("-")] = 1;
      ans.push([...track]);
      return;
    }
    for(let i = 0; i < len; i++){
      // 特殊情况：[1,1,2]有两个答案，需要去重，因此需要map
      if(used[i])continue;
      track.push(nums[i]);
      used[i] = true;
      backtrack(track,used);
      used[i] = false;
      track.pop();
    }
  }
  backtrack([],[])
  return ans;
}
// @lc code=end
